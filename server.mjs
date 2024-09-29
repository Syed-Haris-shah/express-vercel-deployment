import express from 'express';

const app = express();

const PORT = 3000;

app.get('/api/users',(req, res)=>{
    res.status(200).json({message: 'Hello users 👍'})
})

app.listen(PORT,()=>{
    console.log(`server in listening on http://localhost:${PORT}`)
})