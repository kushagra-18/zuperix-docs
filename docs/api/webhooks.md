# Webhooks

Webhooks are a powerful way to keep your external systems in perfect sync with your Zuperix workspace. Instead of constantly polling the API to check if a new asset has been uploaded, Zuperix will proactively send an HTTP POST request to a URL of your choosing the moment an event happens.

*(Webhooks are available exclusively on the Silver and Gold plans)*

## 🔗 How It Works

When you create a Webhook in Zuperix, you define:
1. **The URL**: Where Zuperix should send the HTTP POST request (e.g., `https://api.yourcompany.com/webhooks/zuperix`).
2. **The Events**: Which specific actions should trigger the webhook.
3. **The Type**: Zuperix supports `generic` raw JSON webhooks, as well as pre-formatted webhooks for `slack` and `discord`.

## 🎯 Destination Types

Zuperix allows you to send event data to different types of endpoints, automatically formatting the payload for the best experience.

### 🌐 Generic Webhook
Sends a standard JSON payload containing the event type and the full asset data. Use this for your own custom backend integrations or internal tools.

### 💬 Slack & Discord
If you select Slack or Discord as your destination, Zuperix transforms the data into a beautiful, rich-text message (using Block Kit for Slack or specialized Embeds for Discord).
- **Slack**: Simply paste your Slack Incoming Webhook URL.
- **Discord**: Simply paste your Discord Webhook URL.

## 📦 Available Events

You can subscribe to the following core asset lifecycle events:
- `asset.uploaded`: Fired the moment a new file completes uploading and processing.
- `asset.updated`: Fired when an asset's metadata, filename, or categories are changed.
- `asset.deleted`: Fired when a user permanently deletes an asset.
- `asset.restored`: Fired when an asset is rolled back or restored from the trash.

## 🔐 Security and Signature Verification

When you create a webhook, Zuperix generates a cryptographic **Secret**. You should use this secret to verify that the incoming requests are legitimately from Zuperix.

For `generic` webhooks, Zuperix signs every payload using an HMAC SHA-256 hash of the request body, using your secret as the key. 

### The Signature Header
The signature is passed in the **`X-Webhook-Signature`** header, prefixed with `sha256=`.

**Best Practice**: Your server should calculate the HMAC SHA-256 hash of the raw request body using your secret key and compare it to the header.

```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signatureHeader, secret) {
  // 1. Extract the hash from the header (remove 'sha256=' prefix)
  const signature = signatureHeader.replace('sha256=', '');

  // 2. Calculate the HMAC of the raw body
  const hash = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');

  // 3. Compare using timingSafeEqual to prevent timing attacks
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(hash)
  );
}
```

## 📊 Viewing Logs & Debugging

Webhook deliveries aren't black boxes. In your Workspace Settings under the Webhooks tab, you can view the complete **Webhook Logs**. 

- **Status Codes**: See exactly what your server responded with (e.g., `200 OK` or `500 Error`).
- **Response Time**: Monitor how fast your integration is processing events.
- **Payload History**: See the exact JSON object Zuperix sent to your endpoint.

If your server goes down, Zuperix will automatically retry delivery 5 times with exponential backoff.
