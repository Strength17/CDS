import { asyncHandler } from '../utils/asyncHandler.js';
import { supabase } from '../services/supabase.js';
import { TABLE_NAME } from '../services/supabase.js';


const VALID_PLATFORMS = new Set([
  'twitter',
  'linkedin',
  'facebook'
]);

export const createPost = asyncHandler(async (req, res) => {
  const { title, content, platforms } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      error: 'Title and content are required'
    });
  }

  if (!Array.isArray(platforms) || platforms.length === 0) {
    return res.status(400).json({
      error: 'At least one platform is required'
    });
  }

  const invalid = platforms.filter(p => !VALID_PLATFORMS.has(p));

  if (invalid.length > 0) {
    return res.status(400).json({
      error: `Invalid platforms: ${invalid.join(', ')}`
    });
  }

  // ✅ REAL DATABASE INSERT
  const { data, error } = await supabase
    
    .from(TABLE_NAME)
    .insert([{ title, content, platforms }])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return res.status(201).json(data);
});


export const getPosts = asyncHandler(async (req, res) => {
  const { data, error } = await supabase
    
    .from(TABLE_NAME)
    .select('*');

  if (error) throw new Error(error.message);

  res.json(data);
});

export const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, content, platforms } = req.body;

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update({ title, content, platforms })
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error(error.message);

  res.json(data);
});