import {initTRPC} from "@trpc/server"

const t = initTRPC.create()

export const router = t.router   //routes -> function declare
export const publicProcedure = t.procedure; // funcation