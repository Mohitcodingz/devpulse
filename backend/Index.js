const express =  require('express');
const app = express();
const cors = require('cors')
require("dotenv").config()

app.use(cors());
app.use(express.json());
app.get("/",(req,res,next)=>{
res.send('This is a HomePage')
})
app.get('/api/health',(req,res,next)=>{
res.send({status:'ok',project:'DevPulse'})
})
app.get('/api/repository/:owner/:repo',(req,res)=>{
    const {owner,repo} = req.params;
res.json({
    owner,
    repo,
    fullName:`${owner}/${repo}`,
});
});
const PORT  = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})