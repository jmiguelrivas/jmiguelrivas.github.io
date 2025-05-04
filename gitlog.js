#!/usr/bin/env node

import 'dotenv/config' // loads .env automatically

import fetch from 'node-fetch'
import fs from 'fs'

const owner = 'jmiguelrivas'
const repo = 'jmiguelrivas.github.io'
const token = process.env.GITHUB_TOKEN

console.log(`Token length: ${token.length}`);

if (!token) {
  throw new Error('GITHUB_TOKEN is not defined in .env file')
}

const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, {
  headers: {
    Authorization: `token ${token}`,
    'User-Agent': 'your-script-name',
    Accept: 'application/vnd.github.v3+json',
  }
})

const commits = await res.json()

console.log(commits[0])

const html = `
<!DOCTYPE html>
<html>
  <head><title>${repo} Commits</title></head>
  <body>
    <h1>Commits for ${repo}</h1>
    <ul>
      ${commits.map(c => `<li><strong>${c.commit.author.name}</strong>: ${c.commit.message}</li>`).join('')}
    </ul>
  </body>
</html>
`

fs.writeFileSync('github_log/index.html', html)
