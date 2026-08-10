import express from "express"

import {createUserSchema} from "@monorepo-form-builder-trpc/utils"

const app = express()

const PORT = 5000

app.get("/" , (req , res)=>{
    return res.json({
        message : "Hello Peers"
    })
});

app.listen(PORT , ()=>{
    console.log(`Server started at PORT : ${PORT}`)
});