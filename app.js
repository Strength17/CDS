import express from 'express';
import postsRoutes from './routes/posts.routes.js';
import errorMiddleware from './middleware/error.middleware.js';

const app = express();

app.use(express.json());

app.use('/posts', postsRoutes);

// global error handler (MUST be last)
app.use(errorMiddleware);

export default app;