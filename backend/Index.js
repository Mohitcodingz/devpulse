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
    const { owner, repo } = req.params;
    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        
        if (!response.ok) {
            return res.status(response.status).json({
                error:'Repository not found'
            })
        }
        const data = await response.json();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({
            error:'Failed to fetch Repo Data'
        });
    }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})