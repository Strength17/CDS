import { createClient } from '@supabase/supabase-js';
import { IS_TEST } from '../config/env.js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// 🚨 HARD FAIL if missing
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export const TABLE_NAME = IS_TEST ? 'posts_test' : 'posts';