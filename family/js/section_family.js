import { getPrefix } from '../../0_global/js/global.js'
import "../../0_global/modules/d3.js";
import { familyDB as familyData } from "./db_family.js";

const data = {
  attrs: [],
  selection: {
    layerSpacing: 16,
    nodeSpacing: 32,
    verticalOrientation: false,
  },
  svgGroup: undefined,
  root: undefined,
  boxWidth: 200,
  boxHeight: 60,
  duration: 250,
  zoom: undefined,
  initTransform: undefined,
  svg: undefined,
  datumId: 0,
  template: ``
}

class Family extends HTMLElement {
  constructor() {
    super()
  }

  setNodeRectLayout(nodeBox) {
    return nodeBox
      .attr("x", -(data.boxWidth / 2))
      .attr("y", -(data.boxHeight / 2))
      .attr("width", data.boxWidth)
      .attr("height", data.boxHeight);
  }

  linkDataKey(link) {
    return link.target.id;
  }

  nodeDataKey(datum) {
    return datum.id || (datum.id = ++data.datumId);
  }

  togglePerson(datum) {
    if (datum.collapsed) {
      datum.collapsed = false;
      this.expandChildren(datum);
    } else {
      this.collapseChildren(datum);
    }
    this.updateTidyTree(datum);
  }

  elbow(d) {
    let sourceX = d.source.x,
      sourceY = d.source.y + data.boxWidth / 2,
      targetX = d.target.x,
      targetY = d.target.y - data.boxWidth / 2;

    return (
      "M" +
      sourceY +
      "," +
      sourceX +
      "H" +
      (sourceY + (targetY - sourceY) / 2) +
      "V" +
      targetX +
      "H" +
      targetY
    );
  }

  linkVertical(d) {
    let sourceX = d.source.x,
      sourceY = d.source.y + data.boxHeight / 2,
      targetX = d.target.x,
      targetY = d.target.y - data.boxHeight / 2;
    return (
      "M" +
      sourceX +
      "," +
      sourceY +
      "v" +
      (targetY - sourceY) / 2 +
      "H" +
      targetX +
      "V" +
      targetY
    );
  }

  drawHierarchicalData(hierarchicalData) {
    data.root = d3.hierarchy(hierarchicalData);
    data.root.x0 = 0;
    data.root.y0 = 0;
    this.updateTidyTree(data.root);
  }

  expandChildren(datum) {
    datum.collapsed = false;
    if (datum._children) {
      datum.children = datum._children;
      datum.children.forEach(this.expandChildren);
      datum._children = null;
    }
  }

  collapseChildren(datum) {
    datum.collapsed = true;
    if (datum.children) {
      datum._children = datum.children;
      datum._children.forEach(this.collapseChildren);
      datum.children = null;
    }
  }

  zoomed() {
    data.svgGroup.attr("transform", d3.event.transform);
  }

  personTreeHeight(root) {
    if (!root) return 0;
    if (!root.children || !root.children.length) return 1;
    return (
      1 +
      Math.max.apply(
        null,
        root.children.map((it) => this.personTreeHeight(it))
      )
    );
  }

  updateTidyTree(source) {
    data.datumId = 0;
    const vertical = data.selection.verticalOrientation;
    let buildLinkPath = vertical ? this.linkVertical : this.elbow;
    let nodeSize = [
      data.boxWidth + data.selection.nodeSpacing,
      data.boxHeight + data.selection.layerSpacing,
    ];
    let tree = d3
      .tree()
      .separation(function (a, b) {
        return 1;
      })
      .nodeSize(vertical ? nodeSize : nodeSize.reverse());

    let treeData = tree(data.root);

    let nodes = treeData.descendants(),
      links = treeData.links();

    let nodesUpdate = data.svgGroup
      .selectAll("g.person")
      .data(nodes, this.nodeDataKey);

    let nodesEnter = nodesUpdate
      .enter()
      .append("g")
      .attr("data-id", (datum) => datum?.data?.data_id)
      .attr("class", (datum) => {
        const classes = ["person"];
        if (datum?.data?.group) {
          classes.push(datum.data.group);
        }
        if (datum?.data?.name?.length && datum?.data?.familyName?.length) {
          if (
            datum.data.name.indexOf("--") > -1 ||
            datum.data.familyName.indexOf("--") > -1
          ) {
            classes.push("incompleto");
          }
        } else {
          classes.push("incompleto");
        }
        return classes.join(" ");
      })
      .attr(
        "transform",
        "translate(" +
          (vertical
            ? source.x0 + "," + source.y0
            : source.y0 + "," + source.x0) +
          ")"
      )
      .style("opacity", 0)
      .on("click", this.togglePerson);
    this.setNodeRectLayout(nodesEnter.append("rect"));

    nodesEnter
      .append("text")
      .attr("dy", 6)
      .attr("text-anchor", "middle")
      .attr("class", "nickname")
      .text(function (datum) {
        return datum?.data?.nickname?.length ? datum.data.nickname : "";
      });

    nodesEnter
      .append("text")
      .attr("dy", -4)
      .attr("text-anchor", "middle")
      .attr("class", "name")
      .text(function (datum) {
        let name = datum?.data?.name?.length
          ? datum.data.name.join(" ")
          : "--";
        if (datum?.data?.preferedName) {
          name = datum.data.preferedName;
        }
        return name;
      });

    nodesEnter
      .append("text")
      .attr("dy", 14)
      .attr("text-anchor", "middle")
      .attr("class", "family-name")
      .text(function (datum) {
        return datum?.data?.familyName?.length
          ? datum.data.familyName.join(" ")
          : "--";
      });

    {
      nodesUpdate
        .merge(nodesEnter)
        .transition("SlideShow")
        .duration(data.duration)
        .attr("transform", function (datum, index) {
          return (
            "translate(" +
            (vertical ? datum.x + "," + datum.y : datum.y + "," + datum.x) +
            ")"
          );
        })
        .style("opacity", 1);
    }
    nodesUpdate
      .exit()
      .transition()
      .duration(data.duration)
      .attr("transform", function (datum) {
        return (
          "translate(" +
          (vertical ? source.x + "," + source.y : source.y + "," + source.x) +
          ")"
        );
      })
      .style("opacity", 0)
      .remove();

    let linksUpdate = data.svgGroup
      .selectAll("path.link")
      .data(links, this.linkDataKey);

    let linksEnter = linksUpdate
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", function (d, idx) {
        let position = { x: source.x0, y: source.y0 };
        return buildLinkPath({ source: position, target: position });
      })
      .style("opacity", 0);

    linksUpdate
      .merge(linksEnter)
      .transition()
      .duration(data.duration)
      .attr("d", buildLinkPath)
      .style("opacity", 1);

    linksUpdate
      .exit()
      .transition()
      .duration(data.duration)
      .attr("d", function (d, idx) {
        let position = { x: source.x, y: source.y };
        return buildLinkPath({ source: position, target: position });
      })
      .style("opacity", 0)
      .remove();

    nodes.forEach(function (person) {
      person.x0 = person.x;
      person.y0 = person.y;
    });

    [...data.svgGroup.selectAll("g.person[data-id]")._groups[0]].forEach(
      (item) => {
        item.addEventListener("mouseover", function () {
          document
            .querySelectorAll(`[data-id="${dataset.id}"]`)
            .forEach((item) => item.classList.add("hover"));
        });
        item.addEventListener("mouseleave", function () {
          document
            .querySelectorAll(`[data-id="${dataset.id}"]`)
            .forEach((item) => item.classList.remove("hover"));
        });
      }
    );
  }

  init() {
    data.zoom = d3
      .zoom()
      .scaleExtent([0.1, 2])
      .on("zoom", this.zoomed)
      .extent([
        [0, 0],
        [0, 0],
      ]);

    data.initTransform = d3.zoomIdentity.translate(0, 0);
    data.svg = d3
      .select("mr-family")
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("class", "overlay printable")
      .call(data.zoom);
    data.svg
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 8)
      .attr("refY", 5)
      .attr("orient", "auto")
      .attr("markerWidth", 4)
      .attr("markerHeight", 4)
      .attr("xoverflow", "visible")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .attr("fill", "#999")
      .style("stroke", "none");

    data.svgGroup = data.svg.append("g");
    data.svg.call(data.zoom.transform, data.initTransform);
    this.drawHierarchicalData(familyData);
  }

  connectedCallback() {
    this.innerHTML = data.template
    this.init()
  }
}

window.customElements.define(getPrefix('family'), Family)

export { data }
