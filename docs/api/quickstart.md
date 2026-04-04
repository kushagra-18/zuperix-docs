# Developer Quickstart

Welcome to the Zuperix Developer ecosystem. This guide will help you make your first successful API call in under 5 minutes.

## 🚀 Prerequisites

Before you start, ensure you have:
1. A **Silver** or **Gold** Zuperix plan.
2. A **Workspace ID** (Available in your Dashboard URL: `dashboard.zuperix.com/w/UUID`).
3. An **API Key** with at least `search:read` and `asset.read` scopes.

---

## 🔑 1. Simple Authentication Test

The fastest way to verify your setup is to hit our "Search" endpoint with a simple query. This doesn't require any complex JSON—just a basic GET request.

```bash
curl -X GET "https://api.zuperix.com/search?q=sunset" \
  -H "x-api-key: YOUR_API_KEY"
```

**What to look for**: You should receive a `200 OK` with a JSON object containing a `results` array. If you get a `403 Forbidden`, check that your API key has the `search:read` scope.

---

## 📤 2. Your First Upload (Simple)

For small files (under 100MB), you can use our direct upload endpoint. It uses `multipart/form-data`.

```bash
curl -X POST https://api.zuperix.com/public/assets/upload \
  -H "x-api-key: YOUR_API_KEY" \
  -F "file=@/path/to/your/image.jpg"
```

---

## ⚡ 3. Production-Grade Uploads (Recommended)

For large files or production-grade integrations, you should use our **3-Step Asynchronous Upload Pipeline**. This is far more reliable and allows for direct-to-cloud performance.

### A. Initialize (`POST /assets/upload/init`)
Tell Zuperix what you're about to upload to receive a storage key and a presigned URL.

```bash
curl -X POST https://api.zuperix.com/assets/upload/init \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{"filename": "movie.mp4", "mime_type": "video/mp4", "size": 500000000}'
```

### B. Direct Upload (PUT to S3)
Upload the raw bytes directly to the `upload_url` provided in the previous step.

### C. Finalize (`POST /assets/upload/finalize`)
Once the bytes are moved, tell Zuperix to start the AI processing engine.

```bash
curl -X POST https://api.zuperix.com/assets/upload/finalize \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{"key": "pre-signed-storage-key", "workspace_id": "your-id"}'
```

---

## 🔍 4. Advanced Searching (The POST way)

While simple keyword searches can be done via `GET`, we recommend using **`POST /search`** for any production integration. This allows you to send complex filters, arrays of mime-types, and semantic AI flags.

```bash
curl -X POST "https://api.zuperix.com/search" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "q": "a red car driving in the rain",
    "is_semantic": true,
    "limit": 5
  }'
```

---

## 🛡️ Best Practices

1. **Keep Secrets Secret**: Never expose your API keys in client-side code (frontend JavaScript). Always proxy requests through your own backend.
2. **Handle Rate Limits**: If you receive a `429 Too Many Requests`, slow down! Implement a retry mechanism with exponential backoff.
3. **Use Webhooks**: Don't poll! If you're waiting for an asset to finish processing, subscribe to the `asset.uploaded` webhook instead of hitting the API every 5 seconds.

## 📚 Next Steps
- [Full API Reference](./reference)
- [Managing Webhooks](./webhooks)
- [Authentication & Scopes](./authentication)
