# Workflow Management 🏗️

:::warning Beta Feature
Workflow Management is currently in Beta. Features and UI are subject to change.
:::

Zuperix Workflow Management allows you to create automated approval pipelines for your assets. Instead of manually chasing stakeholders for approval, you can define "railroads" that every asset must travel before it is marked as **Approved**.

---

## 📋 Core Concepts

To master workflows, you need to understand the four pillars of our automation engine:

1.  **Workflow Templates**: These are the "Blueprints." A template defines the name, description, and the logical steps an asset will follow.
2.  **Stages**: The sequential steps within a template (e.g., "Legal Review" ➡️ "Brand Compliance").
3.  **Approvals**: The logic requiring one or more members of a specific **Role** to sign off on a stage.
4.  **Conditions**: The "Smart" logic that determines if a workflow should start or if a stage should be skipped.

---

## ⚡ Smart Triggers (Automation)

Workflows in Zuperix don't just sit there. They can be triggered automatically the moment an asset is uploaded or updated.

### Automatic Start
You can configure a Workflow Template to auto-start if an asset meets specific criteria. This uses our **Condition Evaluator** engine.

| Supported Field | Description | Example |
| :--- | :--- | :--- |
| `size` | The file size in bytes. | `size > 104857600` (100MB+) |
| `mime_type` | The internet media type. | `mime_type eq video/mp4` |
| `extension` | The file extension. | `extension in [.psd, .ai]` |
| `category` | The names of assigned categories. | `category equals Legal` |
| `metadata.KEY` | Any custom metadata field value. | `metadata.Urgency eq High` |

### Conditional Stages
Even within a workflow, stages can have their own conditions. 
*Example*: A "Translation Review" stage that only triggers if the metadata field `Target Market` is set to `International`.

---

## 👥 The Approval Flow

### Sequential Execution
Workflows are strictly sequential. An asset starts at Stage 1, and only once that stage is fully approved does it move to Stage 2.

### Required Approvals
You can define exactly how many approvals are needed for a stage to pass:
- **Single Approval**: Any member of the assigned role can approve (1 approval).
- **Consensus**: Require multiple people (e.g., 3 members of the "Legal" team).

### User Tasks
When an asset enters a stage, Zuperix automatically creates **Tasks** for every member of the assigned role. These users will:
1. Receive a notification (email/in-app).
2. See the task in their **"My Approvals"** queue.
3. Review the asset and choose to **Approve** (with comments) or **Reject**.

---

## 🛡️ Outcomes & Security

### Rejection Handling
If a single approver **Rejects** a task, the entire workflow is immediately canceled and marked as `REJECTED`. The asset's status is reverted to `DRAFT` (or `PENDING_REVISION`), and the original uploader is notified to make changes.

### Audit Trail
Every single interaction—who approved, when they approved, and what comments they left—is permanently recorded in the [Audit Logs](./audit-logs).

### Administrative Override
**Super Admins** have the power to "Force Approve" or "Bypass" stages in emergency situations, ensuring that your content delivery never hits a permanent bottleneck.

---

![Workflow Management Dashboard Placeholder](TODO: [Screenshot of the Workflow Management dashboard showing the list of templates])
