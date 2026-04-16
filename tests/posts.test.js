import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../app.js';

describe('POST /posts', () => {
  it('should create a valid post', async () => {
    const res = await request(app)
      .post('/posts')
      .send({
        title: 'Test',
        content: 'Hello world',
        platforms: ['twitter']
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test');
  });

  it('should fail with invalid platform', async () => {
    const res = await request(app)
      .post('/posts')
      .send({
        title: 'Test',
        content: 'Hello',
        platforms: ['invalid']
      });

    expect(res.statusCode).toBe(400);
  });

  it('should fail with missing fields', async () => {
    const res = await request(app)
      .post('/posts')
      .send({});

    expect(res.statusCode).toBe(400);
  });
});