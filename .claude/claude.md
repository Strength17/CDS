# CLAUDE.md — OHC-CDS Development Guide

## ⚡ CRITICAL FIRST — READ BEFORE EVERY RESPONSE

**This project uses `"type": "module"` in package.json**
- ✅ **ALWAYS use ES Modules** (`import`/`export`)
- ❌ **NEVER use CommonJS** (`require`/`module.exports`)
- All `.js` files are ESM format
- Check CLAUDE.md before writing any code

---

## Profile

**Developer:** Strength Awa — Graphic Designer / Web Dev / AI Engineer aspirant  
**Goal:** Solo SaaS MVP for multi-platform content distribution  
**Approach:** Move fast, fix bugs immediately, brief responses, production quality  

---

## Project Overview

Multi-platform content distribution backend API. Users create posts → system distributes to Facebook, LinkedIn, Website.

**Stack:** Node.js + Express + Supabase (REST API) + ES Modules  
**Status:** MVP core working, integrations are stubs  

---

## Dev Commands

```bash
npm install           # Install dependencies
npm run dev           # Start server (localhost:5000)
npm run test:api      # Colored terminal API tests
```

---

## Architecture

**Routes** → **Controllers** → **Services** → **Supabase**

- `server.js` — Express entry point
- `routes/posts.js` — Endpoint definitions
- `controllers/posts.js` — Request handlers
- `services/supabase.js` — Supabase client
- `scripts/test-api.js` — Terminal tests with colors

---

## API Endpoints

```
GET  /              → Health check
POST /posts         → Create post {title, content, platforms[]}
GET  /posts         → List all posts  
POST /posts/publish/:id → Publish to platforms
```

---

## Code Style (ES MODULES ONLY)

✅ Do this:
```javascript
import express from 'express';
import supabase from '../services/supabase.js';
export const createPost = async (req, res) => { }
```

❌ Never do this:
```javascript
const express = require('express');
module.exports = createPost;
```

---

## Critical Network Constraint

**Direct PostgreSQL → Blocked (ISP IPv6 issue)**  
**Supabase REST API → Works perfectly**  
**Manual SQL setup → Required once, then automatic forever**

Database initialization:
1. Supabase Dashboard → SQL Editor
2. Paste `migrations/001_create_posts_table.sql`
3. Execute

---

## Working Style

- **Bugs found:** Fix immediately, show results after
- **Building features:** Build complete, show what's done
- **Responses:** Brief, direct, bullet points, no fluff
- **Quality:** Production-ready (error handling, logging, validation)
- **Edits:** One-write rule — read file, plan in memory, edit once
- **Permissions:** Always ask before reading `.env` or sensitive files

---

## Lab Notes — Don't Repeat

| Tried | Failed Because | Do Instead |
|------|---|---|
| CommonJS syntax in scripts | Project uses `"type": "module"` | Always use `import`/`export` |
| Direct PostgreSQL init | ISP blocks IPv6, no IPv4 fallback | Use Supabase REST API or manual SQL |
| Reading .env without asking | User gets angry, security risk | Always ask permission first |

---

## Next Steps

1. Fix `"expess"` → `"express"` in package.json
2. Add error handling to controllers
3. Add input validation middleware
4. Add structured logging
5. Stub Facebook/LinkedIn APIs
6. Add authentication
7. Deploy config

---

## Files at a Glance

| File | Purpose |
|------|---------|
| `server.js` | Express setup |
| `routes/posts.js` | Route defs |
| `controllers/posts.js` | Logic |
| `services/supabase.js` | DB client |
| `scripts/test-api.js` | Tests |
| `.env` | Config (never commit) |
| `package.json` | `"type": "module"` ← CRITICAL |

---

## Environment

```
PORT=5000
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_KEY=sb_secret_xxx
```

---

## Remember

**ES Modules only. Read CLAUDE.md first. Move fast. Quality code.**
