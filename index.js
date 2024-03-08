// console.log("chai aur code");
// import express from 'express'
require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000

const githubData = {
  "login": "Sandeep13Paul",
  "id": 123166400,
  "node_id": "U_kgDOB1dewA",
  "avatar_url": "https://avatars.githubusercontent.com/u/123166400?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Sandeep13Paul",
  "html_url": "https://github.com/Sandeep13Paul",
  "followers_url": "https://api.github.com/users/Sandeep13Paul/followers",
  "following_url": "https://api.github.com/users/Sandeep13Paul/following{/other_user}",
  "gists_url": "https://api.github.com/users/Sandeep13Paul/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Sandeep13Paul/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Sandeep13Paul/subscriptions",
  "organizations_url": "https://api.github.com/users/Sandeep13Paul/orgs",
  "repos_url": "https://api.github.com/users/Sandeep13Paul/repos",
  "events_url": "https://api.github.com/users/Sandeep13Paul/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Sandeep13Paul/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Sandeep Paul",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": "Aspiring MERN Stack Developer",
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-01-20T11:13:17Z",
  "updated_at": "2024-03-08T11:33:47Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Sandeep13Paul');
})

app.get('/login', (req, res) => {
    res.send('<h1>please Login!</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Welcome to Youtube!</h2>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})