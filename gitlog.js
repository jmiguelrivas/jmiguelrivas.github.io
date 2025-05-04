#!/usr/bin/env node

import dotenv from 'dotenv'
dotenv.config({ path: '.env.gitlog' })

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

function generateJSON(commits) {
  return commits.map(c => {
    const author = c.commit.author.name
    const id = c.sha.slice(0, 7)
    const dateIso = new Date(c.commit.author.date).toISOString()
    const dateLocal = new Date(c.commit.author.date).toLocaleString()
    const msg = c.commit.message.split('\n').filter(Boolean)

    return {
      author,
      id,
      dateIso,
      dateLocal,
      msg,
    }
  })
}

fetchAllCommits()
  .then(commits => {
    const json = 'export default ' + JSON.stringify(generateJSON(commits), null, 2)
    fs.writeFileSync('github_log/js/db_commits.js', json)

    console.log(`✅ Saved ${commits.length} commits to commits.html`)
  })
  .catch(err => {
    console.error('❌ Error:', err.message)
  })
