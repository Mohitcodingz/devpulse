const express = require('express');
const app = express();
const cors = require('cors')
require("dotenv").config()

app.use(cors());
app.use(express.json());
app.get("/", (req, res, next) => {
    res.send('This is a HomePage')
})
app.get('/api/health', (req, res) => {
    res.send({ status: 'ok', project: 'DevPulse' })
})

app.get('/api/repository/:owner/:repo', async (req, res) => {
    const { owner, repo } = req.params;
    const base = `https://api.github.com/repos/${owner}/${repo}`;
    try {

        if(!owner || !repo){
            return res.status(400).json({
                message: 'owner and repo fields are required'
            })
        }

        const results = await Promise.allSettled([fetch(base), fetch(`${base}/contributors`), fetch(`${base}/commits`)])

        const [repositoryResult, contributorsResult, commitsResult] = results;
        let commits = null;
        let repository = null;
        let contributor = null;

        if(repositoryResult.status === 'rejected'){
            return res.status(500).json({error:'Failed to fetch Repo'})
        }
        if(!repositoryResult.value.ok){
            return res.status(404).json({error:'Repo not found'})
        }
            repository = await repositoryResult.value.json()
                
        if (contributorsResult.status === 'fulfilled' && contributorsResult.value.ok) {
            contributor = await contributorsResult.value.json()
        }

        if (commitsResult.status === 'fulfilled' && commitsResult.value.ok) {
            commits = await commitsResult.value.json()
        }

        const topContributors = contributor ? [...contributor].sort((a, b) => { return b.contributions - a.contributions }) : [];

        const formattedContributors = topContributors.map((user) => ({
            username: user.login,
            avatar: user.avatar_url,
            profile: user.html_url,
            contributions: user.contributions
        }));
        
      
            const formattedCommits = (commits===null||commits===undefined)?[]:commits.map((user) => {
                return {
                    message: user.commit.message,
                    userName: user.commit.author.name,
                    date: user.commit.author.date,
                    link: user.html_url
                }
            })
        
        
        const stats = {
            stars: repository?.stargazers_count ?? 0,
            forks: repository?.forks_count ?? 0,
            openIssues: repository?.open_issues_count ?? 0,
            totalContributors: contributor?.length ?? 0,
            totalCommits: commits?.length ?? 0
        }

        res.json({
            repository,
            contributor,
            commits,
            stats,
            topContributors,
            formattedContributors,
            formattedCommits
        })
    }
    catch (error) {
        return res.status(500).json({
            error: 'Internal server error'
        }
        )
    }
})
// app.get('/pokeapi.co/api/v2/:category/:pokeName',async (req, res) => {
//     try{
//         const { category, pokeName } = req.params;
//     const base = `https://pokeapi.co/api/v2/${category}/${pokeName}`;
//     const [categoryResponse, pokeNameResponse] =await Promise.all([fetch(base), fetch(`${base}/encounters`)])
//     if(!categoryResponse.ok || !pokeNameResponse.ok){
//         return res.status(200).json({
//             message:'failed to get the details.'
//         })
//     }
//     const [categoryFinal, pokeNameFinal] = await Promise.all([categoryResponse.json(),pokeNameResponse.json()]);
//     res.json({categoryFinal,pokeNameFinal});
// }
// catch(error){
//     console.log(error)
// res.status(500).json({
//     error:'try function for api poke failed.'
// })
// }
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})