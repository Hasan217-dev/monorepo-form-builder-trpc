"use client"

import {trpc} from "@/trpc/trpc"

export default function Health(){
    const healhQuery = trpc.health.useQuery()
    console.log(healhQuery)

    return <h1>This is the health route</h1>
}