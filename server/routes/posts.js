import { Router } from 'express';
import {
  createPost,
  getAll,
  getById,
  getMyPosts,
  removePost,
  updatePost,
} from '../controllers/posts.js';
import { getPostComments } from '../controllers/comments.js';
import { checkAuth } from '../utils/checkAuth';

const router = new Router();

// Create post
// http://localhost:3002/api/posts
router.post('/', checkAuth, createPost);

//get all posts
// http://localhost:3002/api/posts
router.get('/', getAll);

//get post by id
// http://localhost:3002/api/posts/:id
router.get('/:id', getById);

//get my posts
// http://localhost:3002/api/posts/user/me
router.get('/user/me', checkAuth, getMyPosts);

//remove by id
// http://localhost:3002/api/posts/:id
router.delete('/:id', checkAuth, removePost);

//update post by id
// http://localhost:3002/api/posts/:id
router.put('/:id', checkAuth, updatePost);

//get post comments
// http://localhost:3002/api/posts/comments/:id
router.get('/comments/:id', checkAuth, getComments);

export default router;
