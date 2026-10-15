const express = require('express');
const app = express();
const cors = require('cors')
require("dotenv").config()

app.use(cors());
app.use(express.json());
app.get("/", (req, res, next) => {
    res.send('This is a HomePage')
})
app.get('/api/health', (req, res, next) => {
    res.send({ status: 'ok', project: 'DevPulse' })
})

app.get('/api/repository/:owner/:repo', async (req, res) => {
    const base = 'https://api.github.com/repos/${owner}/${repo}';
    try {

        const [repoResponse, contributorsResponse, commitsResponse] = await Promise.all([fetch(base), fetch(`${base}/contributors`), fetch(`${base}/commits`)]);
        if (!repoResponse.ok || !contributorsResponse.ok || !commitsResponse.ok) {
           return res.status(502).json({
                errro: 'failed to get the details'
            })
        }
        const [repository, contributors, commits] = await Promise.all([
            repoResponse.json(),
            contributorsResponse.json(),
            commitsResponse.json()
        ])
        res.json({
            repository,
            contributors,
            commits
        })
    }
    catch (error) {
       return  res.status(500).json({
            error: 'The fetching failed'
        }
        )
    }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})