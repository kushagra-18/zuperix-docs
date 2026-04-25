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

## How to Connect

Connecting your Google Drive to Zuperix is a simple process:

1. **Navigate to Integrations**: Open your workspace settings and select the **Integrations** tab.
2. **Select Google Drive**: Click on the Google Drive card.
3. **Authorize**: Click **Connect to Google Drive**. You will be redirected to the Google OAuth consent screen.
4. **Grant Permissions**: Review the requested permissions (Read-only access to your Drive files and your email address) and click **Allow**.
5. **Syncing**: Once connected, you can start selecting folders to link or import directly from the Zuperix dashboard.

> [!TIP]
> **Seeing a "Google hasn't verified this app" screen?**
> Please don't be alarmed! Zuperix is currently undergoing Google's official security verification process. During this time, Google may show a warning page. Your data is perfectly safe—we only request **read-only** access to your files. 
>
> To continue, simply click **Advanced** on that screen and select **Go to Zuperix (unsafe)**. We appreciate your patience as we finalize this official certification!

> [!NOTE]
> Zuperix only requests **read-only** access to your files. We will never modify or delete any data in your Google Drive.

---


## Integration Modes

### 1. Link Mode (Zero-Copy)
> [!TIP]
> **Beta Feature**: This mode is currently in beta and is available on select plans.

The primary way to use Google Drive with Zuperix.
- **How it works**: Zuperix fetches metadata (name, size, mimeType, thumbnail) and stores it. The actual file binary remains in Google Drive.
- **Streaming**: When you view an asset in Zuperix, it is streamed directly from Google Drive using a signed temporary session.
- **AI Processing**: Zuperix generates embeddings and AI metadata using the thumbnails and lightweight previews, enabling search without high bandwidth usage.

### 2. Smart Import Mode
> [!TIP]
> **Beta Feature**: This mode is currently in beta and is available on select plans.

Perfect for selective migration. You can choose to import files based on:
- Specific Folders
- Mime Types (e.g., only "image/jpeg")
- Date modified (e.g., only files updated in the last 30 days)

### 3. Full Migration Mode
Zuperix will recursively traverse your entire Google Drive, recreate the folder hierarchy in Zuperix as **Vaults**, and download every file into Zuperix secure storage.

---

## Technical Architecture

### Security & Data Protection
Your credentials and data are handled with industry-standard security. User tokens are never stored in plain text; we use multi-layered encryption to protect your account access. All authentication happens server-side, ensuring your credentials never leave a secure environment.

### Reliable Processing
Large imports and synchronization tasks are handled by a dedicated background engine. This ensures that even if you are importing tens of thousands of files, you can close your browser or navigate away, and the process will continue reliably in the background.

- **Background Sync**: Automatically keeps your linked folders up to date.
- **High-Volume Import**: Efficiently handles migration of large libraries.

### Real-time Tracking
Monitor the status of your imports directly within the Zuperix dashboard. The system provides real-time updates on your active operations, showing exactly how many files have been processed, skipped, or if any encountered issues, allowing you to stay informed at every step of the migration.
