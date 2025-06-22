<template>
  <div id="family-tree" />
</template>

<script>
import Vue from "vue";
import * as d3 from "d3/dist/d3.min";
import { familyDB as familyData } from "@/db/family-tree";

export default Vue.extend({
  data: () => ({
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
  }),
  mounted() {
    this.zoom = d3
      .zoom()
      .scaleExtent([0.1, 2])
      .on("zoom", this.zoomed)
      .extent([
        [0, 0],
        [0, 0],
      ]);

    this.initTransform = d3.zoomIdentity.translate(0, 0);
    this.svg = d3
      .select("#family-tree")
      .append("svg")
      .attr("width", 1)
      .attr("height", 1)
      .attr("class", "overlay printable")
      .call(this.zoom);
    this.svg
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

    this.svgGroup = this.svg.append("g");
    this.svg.call(this.zoom.transform, this.initTransform);
    this.drawHierarchicalData(familyData);
  },
});
</script>