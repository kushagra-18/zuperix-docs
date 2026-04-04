# Audit Logs

At Zuperix, we believe in transparency and security. The Audit Logs page on [dashboard.zuperix.com](https://dashboard.zuperix.com) gives you a full record of what's happening in your workspace.

## 🕵️‍♂️ Seeing Who Did What

Zuperix maintains a tamper-proof record of all critical activities within your workspace. 

### Core Action Events

| Category | Dashboard Identity | Description |
| :--- | :--- | :--- |
| **Assets** | `UPLOAD` | Recorded when a new file finishes processing. |
| **Assets** | `DOWNLOAD` | Recorded when a user or API fetches a raw file. |
| **Assets** | `DELETE` | Tracked when items are moved to trash or purged. |
| **Metadata** | `METADATA_UPDATE` | Captures changes to custom fields or AI tags. |
| **Access** | `MANAGE_ACCESS` | Tracked when roles or access levels are modified. |
| **Workflows** | `WORKFLOW_STARTED` | Recorded when an asset enters a review pipeline. |
| **Workflows** | `WORKFLOW_COMPLETED`| Tracked when an asset is fully approved or rejected. |

> [!NOTE]
> Audit logs also capture the **IP Address** and **User Agent** for every action, providing a complete forensic trail for security teams.

![Audit Logs Dashboard Placeholder](TODO: [Screenshot of the audit logs table with columns for Action, User, and Date])

## 🏷️ Filtering and Search

Finding a specific event is fast:

- **Filter by ActionType**: Only see "Delete" or "Permission" events.
- **Filter by User**: See the activity of a specific team member.
- **Search by Date**: Look up what happened last Tuesday or during a specific project launch.

## 📥 Exporting Logs

Need to share these logs with your security team or for compliance?

- **CSV Export**: Download the full audit trail as a spreadsheet.
- **Webhooks**: (Future) Notify external systems of security-critical actions real-time.
