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
    const base = 'https://www.github.com/repository/:owner/:repo';
    try {

        const [repoResponse, contributionResponse, commitsResponse] = await Promise.all(fetch(base), fetch(`${base}/contribution`), fetch(`${base}/commits`));
        if (!repoResponse || !contributionResponse || !commitsResponse) {
            res.status(502).json({
                errro: 'failed to get the details'
            })
        }
        const [repository, contributors, commits] = await Promise.all([
            repoResponse.json(),
            contributionResponse.json(),
            commitsResponse.json()
        ])
        res.json({
            repository,
            contributors,
            commits
        })
    }
    catch (error) {
        res.status(201).json({
            error: 'The fetching failed'
        }
        )
    }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})