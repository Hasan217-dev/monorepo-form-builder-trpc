import { z } from 'zod';
export declare const createUserSchema: z.ZodObject<{
    namwe: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export type CreateUserSchemaType = z.infer<typeof createUserSchema>;
//# sourceMappingURL=index.d.ts.map