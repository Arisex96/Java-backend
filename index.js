require('dotenv').config()
//console.log(process.env)

const express = require('express')
const app = express()
const port = 3000

const github_data = 
{
    "login": "Arisex96",
    "id": 172830679,
    "node_id": "U_kgDOCk0v1w",
    "avatar_url": "https://avatars.githubusercontent.com/u/172830679?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Arisex96",
    "html_url": "https://github.com/Arisex96",
    "followers_url": "https://api.github.com/users/Arisex96/followers",
    "following_url": "https://api.github.com/users/Arisex96/following{/other_user}",
    "gists_url": "https://api.github.com/users/Arisex96/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Arisex96/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Arisex96/subscriptions",
    "organizations_url": "https://api.github.com/users/Arisex96/orgs",
    "repos_url": "https://api.github.com/users/Arisex96/repos",
    "events_url": "https://api.github.com/users/Arisex96/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Arisex96/received_events",
    "type": "User",
    "site_admin": false,
    "name": "ADITYA KUMAR",
    "company": null,
    "blog": "",
    "location": "jabalpur",
    "email": null,
    "hireable": null,
    "bio": "trying to learn some dev",
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-06-14T15:02:34Z",
    "updated_at": "2024-08-22T16:14:27Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/twitter",(req,res)=>{
    res.send("this is twitter")
})
app.get("/login", (req,res)=>{
    res.send("<h1>Hi tag is send</h1>")
})

app.get("/github", (req,res)=>{
    res.json(github_data)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})