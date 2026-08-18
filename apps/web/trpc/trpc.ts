import {createTRPCReact} from "@trpc/react-query"
import type {AppRouter} from "@monorepo-form-builder-trpc/trpc"

export const trpc = createTRPCReact<AppRouter>();