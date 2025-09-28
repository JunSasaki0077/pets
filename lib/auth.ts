import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance
import {nanoid} from "nanoid"

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", 
				// usersなどの複数形で制作してくれる
				usePlural: true,
    }),
		advanced: {
			database: {
				generateId: () => nanoid(10)
			}
		}
});