# Workspace Administration

Managing your team and workspace is a breeze on [dashboard.zuperix.com](https://dashboard.zuperix.com). Welcome to the control center of your digital library.

## 👥 Team & Access Management

Zuperix is built for collaboration, which means giving the right people the right level of access.

- **Users**: Invite team members, clients, or freelancers to your workspace. (Read the deep dive on [User Management](./users.md)).
- **Roles**: Assign specific roles (like Viewer, Editor, or Admin) to control exactly what each member can do. (See the [Roles & Permissions](./roles-permissions.md) breakdown).

You can manage all active and pending invitations directly from the **Team** tab in your Workspace Settings.

## 🤖 The Machines: API Keys & Webhooks

Sometimes, you don't want a human to do the work. You want a robot. If you are on the **Silver Plan** or higher, your museum gets access to automated systems.

### API Keys (The Robot's ID Badge)
While humans use an email and password to log in, robots use an **API Key**. An API key is a long, secret string of characters that acts as both a username and a password for your custom scripts or software.

You can hand an API Key to your company's internal software so it can automatically upload all new marketing images straight into Zuperix at midnight. Just like human users, API Keys are given specific *scopes* (permissions). You can give a robot a key that only allows it to "upload" but never "delete," ensuring a rogue script can't accidentally empty your workspace.

### Webhooks (The Museum Alarm System)
If an API Key is how a robot talks to Zuperix, a **Webhook** is how Zuperix talks to a robot. 

Imagine you want your team to get a Slack message every time a new video is uploaded. Instead of having a robot constantly knocking on the museum door asking, "Is there a new video? Is there a new video?", you set up a Webhook. 

A Webhook is a simple rule: *"Hey Zuperix, when [an asset is uploaded], please immediately send a message to [this URL]."* It's an instant, automatic notification system that keeps your other apps (like Slack, Jira, or custom dashboards) perfectly in sync with what's happening inside your workspace.

*(Webhooks and API keys are available exclusively on Silver and Gold plans)*

---

## 📊 Usage and Billing

- **Storage**: See at a glance how much storage you are using across all assets.
- **Plan**: View your current plan and upgrade if you need more space or features.
- **Billing History**: Access and download invoices for your workspace.

## 📥 Exports

Need your data in a different format?

- **CSV Export**: Download a full list of your assets and their metadata in a spreadsheet.
- **Bulk Migration**: Tools for moving assets between workspaces or to another storage provider.
