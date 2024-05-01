const express = require('express'); 
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());   


app.post('/nuevo', async (req, res)=>{
    console.log
    const nuevo = await prisma.persona.create({
        data: req.body
    }) 
    res.json(nuevo);
});

app.get('/datos', async (req, res)=>{
    const todos = await prisma.persona.findMany();
    if(!todos)
        return res.status(404).json({error: "Persona no encontrada"});
    res.json(todos);
})

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});