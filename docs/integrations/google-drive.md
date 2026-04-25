# Google Drive Integration

Zuperix provides a deep, enterprise-grade integration with Google Drive that goes beyond simple file uploading. It is designed to support modern workflows where data might already exist in the cloud, allowing for both **zero-copy linking** and **full structural migration**.

> [!NOTE]
> **Link Mode** and **Smart Import** are currently in **Beta**. These features may not be available on all plans or environments and are controlled via feature toggles.

---

## Core Philosophy
We believe that you shouldn't have to duplicate terabytes of data just to get the benefits of a modern Digital Asset Management (DAM) system. Our Google Drive integration supports:
- **Link Mode**: Zero-copy management. We index the metadata and stream the content.
- **Selective Import**: Use filters to bring only what you need.
- **Full Migration**: Move your entire library into Zuperix while maintaining folder structures.

---

## Setup & Configuration

### 1. Google Cloud Console
To enable the integration, you must first create a project in the [Google Cloud Console](https://console.cloud.google.com/):
1. **Enable API**: Search for and enable the "Google Drive API".
2. **OAuth Consent Screen**:
   - Set User Type to **External**.
   - Add the scopes: `.../auth/drive.readonly` and `.../auth/userinfo.email`.
   - Add your own email as a **Test User** (if in Testing mode).
3. **Credentials**:
   - Create an **OAuth 2.0 Client ID** for a **Web Application**.
   - Add the following **Authorized Redirect URI**:
     `http://localhost:3001/settings/integrations/google-drive/callback`

### 2. Environment Variables
Add these to your `.env` file in the backend repository:

```env
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3001/settings/integrations/google-drive/callback
GOOGLE_TOKEN_ENCRYPTION_KEY=your-64-char-hex-string
```

> [!IMPORTANT]
> The `GOOGLE_TOKEN_ENCRYPTION_KEY` is used to encrypt user refresh tokens in your database. Ensure this is a secure, unique 64-character hex string.

---

## Integration Modes

### 1. Link Mode (Zero-Copy)
> [!TIP]
> **Beta Feature**: This mode is currently in beta and requires the `drive-advanced-modes` feature flag to be enabled.

The primary way to use Google Drive with Zuperix.
- **How it works**: Zuperix fetches metadata (name, size, mimeType, thumbnail) and stores it. The actual file binary remains in Google Drive.
- **Streaming**: When you view an asset in Zuperix, it is streamed directly from Google Drive using a signed temporary session.
- **AI Processing**: Zuperix generates embeddings and AI metadata using the thumbnails and lightweight previews, enabling search without high bandwidth usage.

### 2. Smart Import Mode
> [!TIP]
> **Beta Feature**: This mode is currently in beta and requires the `drive-advanced-modes` feature flag to be enabled.

Perfect for selective migration. You can choose to import files based on:
- Specific Folders
- Mime Types (e.g., only "image/jpeg")
- Date modified (e.g., only files updated in the last 30 days)

### 3. Full Migration Mode
Zuperix will recursively traverse your entire Google Drive, recreate the folder hierarchy in Zuperix as **Vaults**, and download every file into your configured storage (S3/Local).

---

## Technical Architecture

### Security & Encryption
User tokens are never stored in plain text. We use **AES-256-GCM** encryption with a system-wide encryption key to protect OAuth refresh tokens. Every request for a fresh access token happens server-side, ensuring user credentials never leak to the client.

### Background Processing
Import and Sync operations are handled by a robust background processing engine. This ensures that even if you are importing 100,000 files, the UI remains responsive and the operation continues reliably even if you close your browser.

- **Sync Processing**: Handles periodic checks for changes in Linked folders.
- **Import Processing**: Handles the heavy lifting of downloading and processing assets.

### Real-time Tracking
Monitor the status of your imports directly within the Zuperix dashboard. The system provides real-time updates on your active operations, showing exactly how many files have been processed, skipped, or if any encountered issues, allowing you to stay informed at every step of the migration.
