
import express from "express"
import cors from "cors"

import { createExpressMiddleware } from "@trpc/server/adapters/express"
import { appRouter } from "@monorepo-form-builder-trpc/trpc"

// import {createUserSchema} from "@monorepo-form-builder-trpc/utils"

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 5000

app.use("/trpc" , createExpressMiddleware({
    router : appRouter
}));


// app.get("/" , (req , res)=>{
//     return res.json({
//         message : "Hello Peers"
//     })
// });

// app.post("/users" , (req , res)=>{
//     const result = createUserSchema.safeParse(req.body);

//     if(!result.success){
//        const message = result.error.issues
//         .map((issue) => issue.message)
//         .join(", ")

//         return res.status(400).json({
//             success : false ,
//             message : message
//         })
//     }

//      console.log(result.data)

//         return res.json({
//             success : true ,
//             message : "user created"
//         })

// })

app.listen(PORT , ()=>{
    console.log(`Server started at PORT : ${PORT}`)
});