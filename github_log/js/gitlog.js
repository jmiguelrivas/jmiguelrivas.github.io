import '../../0_global/js/index.js'
import {
  getPrefix
} from '../../0_global/js/global_helpers.js'
import commitsDB from './db_commits.js'

function simplifyCommits(commits) {
  const grouped = new Map();

  for (const { date, author, id, msg } of commits) {
    const key = `${date}::${author}`;

    if (!grouped.has(key)) {
      grouped.set(key, {
        date,
        author,
        commits: []
      });
    }

    const group = grouped.get(key);
    for (const m of msg) {
      group.commits.push({ id, msg: m });
    }
  }

  return Array.from(grouped.values());
}

const commitsSimplified = simplifyCommits(commitsDB)

class Log extends HTMLElement {
  static commits = commitsSimplified.map(commit => {
    const msg = commit.commits.map(p => `<li><em>${p.id}</em> ${p.msg}</li>`).join(' ')

    return `
<li>
  <h2>
    <strong>${commit.author}</strong> :: <time datetime="${commit.date}">${commit.date}</time>
  </h2>
  <ul class="msg">
    ${msg}
  </ul>
</li>
`
  }).join(' ')

  static template = `
<nn-caja padding="1rem">
  <h1>Github Log</h1>
  <ul class="main-list">
    ${Log.commits}
  </ul>
</nn-caja>
`

  static data = {
    attrs: [],
  }

  constructor() {
    super()
  }

  generateTemplate() {
    this.innerHTML = Log.template
  }

  connectedCallback() {
    this.generateTemplate()
  }
}

window.customElements.define(getPrefix('log'), Log)

export {
  Log
}