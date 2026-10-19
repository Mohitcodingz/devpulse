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
    const base = `https://api.github.com/repos/${owner}/${repo}`;
    try {

        const results =  await Promise.allSettled([fetch(base), fetch(`${base}/contributors`), fetch(`${base}/commits`)])
        // const [repoResponse, contributorsResponse, commitsResponse] = await Promise.all([fetch(base), fetch(`${base}/contributors`), fetch(`${base}/commits`)]);

 const [repositoryResult, contributorsResult, commitsResult ] = results;
let commits= null;
let repository = null;
let contributor = null

if(repositoryResult.status === 'fulfilled' && repositoryResult.value.ok){
     repository = await repositoryResult.value.json()
}

if(contributorsResult.status === 'fulfilled' && contributorsResult.value.ok){
    contributor = await contributorsResult.value.json()
}

if(commitsResult.status === 'fulfilled' && commitsResult.value.ok){
commits = await commitsResult.value.json()
}

        // if (!results.ok) {
        //     console.log(results.status)
        //     return res.status(502).json({
        //         error: 'failed to get the details'
        //     })
        // }

        // const [repository, contributors, commits] = await Promise.all([
        //     repoResponse.json(),
        //     contributorsResponse.json(),
        //     commitsResponse.json()
        // ])
       

        res.json({  
         repository, contributor, commits 
        })
    }
    catch (error) {
        return res.status(500).json({
            error: 'The fetching failed'
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