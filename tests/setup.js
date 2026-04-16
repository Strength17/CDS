import dotenv from 'dotenv';

dotenv.config({
  path: '.env.test'
});

// Debug (temporary)
console.log('TEST ENV LOADED:', {
  NODE_ENV: process.env.NODE_ENV,
  SUPABASE_URL: process.env.SUPABASE_URL ? '✅ loaded' : '❌ missing',
  SUPABASE_KEY: process.env.SUPABASE_KEY ? '✅ loaded' : '❌ missing'
});
