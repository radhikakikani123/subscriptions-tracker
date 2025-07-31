import { config } from 'dotenv';

config( { path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
     PORT,
     NODE_ENV, 
     DB_URI,
     JWT_SECRET, 
     ARCJET_KEY,
     ARCJET_ENV, 
     JWT_EXPIRES_IN,
     } = process.env;