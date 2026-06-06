require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000


const githubData={
  
  "login": "kumarideas2025",
  "id": 199050784,
  "node_id": "U_kgDOC91GIA",
  "avatar_url": "https://avatars.githubusercontent.com/u/199050784?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kumarideas2025",
  "html_url": "https://github.com/kumarideas2025",
  "followers_url": "https://api.github.com/users/kumarideas2025/followers",
  "following_url": "https://api.github.com/users/kumarideas2025/following{/other_user}",
  "gists_url": "https://api.github.com/users/kumarideas2025/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kumarideas2025/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kumarideas2025/subscriptions",
  "organizations_url": "https://api.github.com/users/kumarideas2025/orgs",
  "repos_url": "https://api.github.com/users/kumarideas2025/repos",
  "events_url": "https://api.github.com/users/kumarideas2025/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kumarideas2025/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "kowshik kumar sarker",
  "company": null,
  "blog": "http://linkedin.com/in/kowshik-sarker-b4b161334",
  "location": "Gazipur , Dhaka , Bangladesh",
  "email": null,
  "hireable": null,
  "bio": "make it sense why i learn Cs ",
  "twitter_username": null,
  "public_repos": 22,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2025-02-13T07:41:11Z",
  "updated_at": "2025-12-14T13:10:46Z"

    }
app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter', (req, res) => {
  res.send('Hello KOWSHIK!')
})

app.get('/login', (req, res) => {
  res.send('<h1> please login at code </h1>')
})

app.get('/insta', (req, res) => {
  res.send(' <h1> kowshik grggrgr <h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})