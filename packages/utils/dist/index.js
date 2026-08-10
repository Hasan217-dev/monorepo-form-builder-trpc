import { z } from 'zod';
export const createUserSchema = z.object({
    name: z.string().min(3, "Name must at least 3 characters"),
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must at leat 8 characters")
});
//# sourceMappingURL=index.js.map