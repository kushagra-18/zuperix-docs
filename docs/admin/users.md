# User Management

Managing who has access to your Zuperix workspace is essential for security and collaboration. Let's break down how Users exist within the system.

## 👤 What is a User?

A **User** in Zuperix represents a real person accessing the platform. Every User is identified by a unique email address and is securely authenticated (often via Supabase or SSO for Gold plans). 

Users are distinct from Workspaces. A single User can belong to multiple Workspaces (e.g., a freelancer who has access to both Client A's workspace and Client B's workspace).

## 🏢 System-Level Roles

Before a User even enters a specific Workspace, they have a "Global" or "System-Level" role. These roles dictate their core capabilities across the entire Zuperix server.

1. **`SUPER_ADMIN`**: The ultimate administrator. They have access to manage all workspaces, billing, and system configurations. A `SUPER_ADMIN` automatically has the `manage all` permission, bypassing all granular workspace checks.
2. **`USER`**: The standard role. A `USER` can only access Workspaces they have been explicitly invited to or that they have created themselves.

*(Note: Unless you are self-hosting Zuperix or are part of the core Zuperix team, you will almost always be operating with the `USER` system role).*

## 🤝 Workspace Membership

When a User joins a Workspace, they become a **Workspace Member**. This is where the magic happens. 

- **Invitations**: An Admin can invite a new User to a Workspace. If the User doesn't exist yet, Zuperix handles the onboarding flow.
- **Contextual Access**: A User might be an `ADMIN` in "Workspace A" (where they work) but only a `VIEWER` in "Workspace B" (a client's gallery). 

To understand what a User can actually *do* once they enter a Workspace, check out the [Roles & Permissions Guide](./roles-permissions.md).
