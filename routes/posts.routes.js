import express from 'express';
import {
  createPost,
  getPosts,
  updatePost
} from '../controllers/posts.controller.js';

const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.put('/:id', updatePost);

export default router;