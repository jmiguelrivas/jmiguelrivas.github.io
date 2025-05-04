#!/usr/bin/env node

import dotenv from 'dotenv';
dotenv.config({ path: '.env.gitlog' });

import fetch from 'node-fetch'
import fs from 'fs'

const owner = 'jmiguelrivas'
const repo = 'jmiguelrivas.github.io'
const token = process.env.GITHUB_TOKEN

if (!token) {
  throw new Error('Missing GITHUB_TOKEN in .env')
}

async function fetchAllCommits() {
  const commits = []
  let page = 1
  const perPage = 100

  while (true) {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${perPage}&page=${page}`,
      {
        headers: {
          Authorization: `token ${token}`,
          'User-Agent': 'commit-fetcher',
          Accept: 'application/vnd.github.v3+json',
        },
      }
    )

    if (!res.ok) {
      const error = await res.text()
      throw new Error(`GitHub API error (${res.status}): ${error}`)
    }

    const data = await res.json()
    if (data.length === 0) break

    commits.push(...data)
    page++
  }

  return commits
}

function generateHTML(commits) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <meta name="description" content="Github Log" />
    <title>Github Log</title>
    <link rel="shortcut icon" type="image/x-icon" href="https://jmiguelrivas.github.io/0_global/img/favicon.ico" />
    <link rel="icon" type="image/png" sizes="256x256" href="https://jmiguelrivas.github.io/0_global/img/favicon-256x256.png" />
    <link rel="icon" type="image/png" sizes="128x128" href="https://jmiguelrivas.github.io/0_global/img/favicon-128x128.png" />
    <link rel="icon" type="image/png" sizes="64x64" href="https://jmiguelrivas.github.io/0_global/img/favicon-64x64.png" />
    <link rel="icon" type="image/png" sizes="48x48" href="https://jmiguelrivas.github.io/0_global/img/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="https://jmiguelrivas.github.io/0_global/img/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="24x24" href="https://jmiguelrivas.github.io/0_global/img/favicon-24x24.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="https://jmiguelrivas.github.io/0_global/img/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="https://jmiguelrivas.github.io/0_global/img/favicon-180x180.png" />
    <meta name="msapplication-TileColor" content="#e9c200" />
    <meta name="msapplication-TileImage" content="https://jmiguelrivas.github.io/0_global/img/favicon-128x128.png" />
    <meta property="og:image" content="https://jmiguelrivas.github.io/0_global/img/preview.webp" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="stylesheet" href="./log.css" />
  </head>

  <body>
    <h1>Github Log</h1>
    <ul class="main-list">
      ${commits
        .map(c => {
          const author = c.commit.author.name
          const id = c.sha.slice(0, 7)
          const date = new Date(c.commit.author.date).toLocaleString()
          const msg = c.commit.message
            .split('\n')
            .filter(Boolean)
            .map(p => `<li>${p}</li>`)
            .join('')
          return `
      <li>
        <h2>
          <strong>${author}</strong> :: <em>${id}</em> :: <time datetime="${date}">${date}</time>
        </h2>
        <ul class="msg">
          ${msg}
        </ul>
      </li>
      `
        })
        .join('')}
    </ul>
  </body>
</html>
`
}

fetchAllCommits()
  .then(commits => {
    const html = generateHTML(commits)
    fs.writeFileSync('github_log/index.html', html)
    console.log(`✅ Saved ${commits.length} commits to commits.html`)
  })
  .catch(err => {
    console.error('❌ Error:', err.message)
  })
