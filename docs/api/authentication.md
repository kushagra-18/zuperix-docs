# Authentication

To use the Zuperix Public API, you need an API Key. These keys are tied to a specific Workspace and allow you to interact with your assets programmatically.

## 🔑 Obtaining an API Key

1. Log in to [dashboard.zuperix.com](https://dashboard.zuperix.com).
2. Go to **Settings > API Keys**.
3. Click **Create New Key**.
4. Give your key a name and select the required **Scopes** (permissions).
5. **Copy your key immediately.** For security reasons, we cannot show it to you again.

### What are Scopes and Why Do They Matter?

In Zuperix, **Scopes** are granular permissions that dictate exactly what a specific API Key is allowed to do when making requests. 

For security reasons, you should always follow the **Principle of Least Privilege**: never give an API Key more power than it needs. Below is the complete matrix of granular scopes available in Zuperix:

### System & Search Scopes
| Scope Identity | Dashboard Label | Description | Use Case |
| :--- | :--- | :--- | :--- |
| `all` | **Full Access** | Can perform any action. | Maximum control—use *extremely* rarely for full-system syncs. |
| `search:read` | **Search Assets** | Full-text and semantic search. | Perfect for a frontend website or search bar integration. |

### Asset Scopes
| Scope Identity | Dashboard Label | Description | Use Case |
| :--- | :--- | :--- | :--- |
| `asset.read` | **Read Assets** | List and view asset details. | Reading metadata and downloading underlying files. |
| `asset.add` | **Upload Assets** | Upload files and metadata. | Ideal for automated backup scripts or dropzones. |
| `asset.update` | **Update Assets** | Update asset status, name, and dates. | Bulk metadata syncing tools. |
| `asset.delete` | **Delete Assets** | Remove assets from library. | Automated retention or cleanup scripts. |

### Taxonomic Scopes
| Scope Identity | Dashboard Label | Description | Use Case |
| :--- | :--- | :--- | :--- |
| `collection.read` | **Read Collections** | List collections and their assets. | Displaying "Albums" on a custom frontend. |
| `collection.manage`| **Manage Collections**| Create collections, add/remove assets. | Programmatic curation. |
| `category.read` | **Read Categories** | View category tree. | Rendering hierarchy navigation. |
| `category.manage` | **Manage Categories** | Assign assets to categories. | Auto-sorting newly uploaded assets. |
| `tag.read` | **Read Tags** | List workspace tags. | Fetching available tag suggestions. |
| `tag.manage` | **Manage Tags** | Add and remove tags on assets. | Custom AI pipelines tagging assets asynchronously. |

![Create API Key Placeholder](TODO: [Screenshot of the API Key creation modal in the dashboard settings])

## 📥 Using the API Key

All requests to the Zuperix Public API must include your key in the `x-api-key` header.

```http
GET /search?q=sunset
x-api-key: your_api_key_here
```

## 🔭 Understanding API Scopes

Zuperix uses **Scopes** to limit what an API Key is allowed to do. When creating a key, you select the specific privileges it carries. 

This strict scope validation is handled by the `PublicApiKeyGuard` inside the Zuperix backend.
- **The `all` Scope**: Setting a key's scope to `all` gives it super-admin-level programmatic access within the workspace. It bypasses all granular scope checking and can hit any endpoint.
- **Granular Scopes**: If an endpoint requires the `asset.delete` scope, and the key only has `search:read` and `asset.add`, Zuperix immediately blocks the request with a `403 Forbidden` error.

## 🛡️ Security Best Practices & Allowlisting

Beyond scopes, Zuperix provides physical layer security limits for your API keys.

- **Domain Allowlist**: If you are calling the Zuperix API from a frontend website, you can strictly allowlist your domain (e.g., `https://my-gallery.com`). If an attacker extracts your key and tries to use it from their own domain, the Zuperix server checks the `Origin` or `Referer` headers and rejects the call.
- **IP Allowlist**: For back-end, server-to-server integrations, you can lock the API key down to your server's static IP address. Any requests originating outside that IP will be automatically dropped (`401 Unauthorized`).
- **Environment Variables**: Never hardcode your API key in your source code. Use environment variables or a secrets manager.

## 🚦 Rate Limits

To ensure stability for all users, the Public API has rate limits based on your plan (API access is unavailable on the Bronze plan).

- **Silver Plan**: 500 requests per minute.
- **Gold Plan**: 5,000 requests per minute.

If you exceed these limits, you will receive a `429 Too Many Requests` response.
