// import dotenv from 'dotenv';
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
app.use(express.json());
app.get('/health', (req, res) => {
    res.send('This is a Health Page')
})
app.get('/',(req,res)=>{
    res.send('HomePagee')
})
app.get('/api/repository/:owner/:repo', async (req, res) => {
    try {
        const { owner, repo } = req.params;
        const base = `https://api.github.com/repos/${owner}/${repo}`
        const valid = /^[a-zA-Z0-9._-]+$/;

        if (!valid.test(owner) || !valid.test(repo)) {
            return res.status(400).json({ message: 'The repository name or owner is misspelled' })
        }
        const [baseResponse, commitsResponse, contributorsResponse] = await Promise.all([fetch(base), fetch(`${base}/commits`), fetch(`${base}/contributors`)]);
        const responses = [baseResponse, commitsResponse, contributorsResponse];
        

        // if (!baseResponse.ok || !commitsResponse.ok || !contributorsResponse.ok) {
        //     return res.status(404).json({
        //         message: 'Incorrect Data Unable to Fetch',  
        //     })
        // }

        if (!baseResponse.ok) {
            return res.status(400).json({
                message: 'Problem encountered while fetching baseResponse'
            })
        }
        if (!commitsResponse.ok) {
            return res.status(400).json({
                message: 'Problem encountered while fetching commitsResponse'
            })
        }
        if (!contributorsResponse.ok) {
            return res.status(400).json({
                message: 'Problem encountered while fetching contributorsResponse'
            })
        }
        const [baseData, commitsData, contributorsData] = await Promise.all([baseResponse.json(), commitsResponse.json(), contributorsResponse.json()]);

        // if (baseData.private === true) {
        //     return res.send('This Repo is Private')
        // }

        res.status(200).json({
            repository: baseData, commits: commitsData, contributors: contributorsData
        })
    }
    catch (error) {
        res.status(502).json({
            message: `The error occured because ${error.message}`
        })
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`The server running in http://localhost:${PORT}`)
})