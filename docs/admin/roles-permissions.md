# Roles & Permissions

While Users are the *who*, Roles and Permissions define the *what*. Zuperix uses a robust, granular security model (powered by CASL) to ensure your assets are protected and workflows remain smooth.

## 🏨 The "Hotel Keycard" Analogy

Think of a **Role** like a hotel keycard. When you check in, the front desk doesn't hand you a massive list of individual rules; they simply give you a card. 

Encoded on that card are tiny, invisible **Permissions**. For example, your card might let you open the gym doors (`asset.create`), but it won't let you into the manager's office (`workspace.invite`). When Zuperix checks if someone can delete a document, it just swipes their keycard to see if they hold the `asset.delete` permission.

---

## 🎨 Out-of-the-Box Workspace Roles

Zuperix provides three default roles designed to fit modern team workflows:

### 1. The VIEWER
*The Lobby Guest.*
- **Capabilities**: Can browse assets, search, view categories, and download files (if permitted). 
- **Restrictions**: Cannot upload (`create`), edit metadata (`update`), or move any assets. They are strictly read-only.
- **Best for**: Clients and external stakeholders.

### 2. The EDITOR (Contributor)
*The Room Guest.*
- **Capabilities**: Has all the powers of a Viewer, but they can also upload new assets, edit metadata, create collections, and organize categories.
- **Restrictions**: They cannot invite new users to the workspace. Furthermore, an Editor can generally only `delete` or `revert` assets that they personally uploaded.
- **Best for**: Photographers, designers, and marketing team members.

### 3. The ADMIN
*The Hotel Manager.*
- **Capabilities**: Has the master keys for the workspace. They possess the `manage` action, which overrides granular restrictions.
- **Powers**: They can invite/remove members, change workspace settings, and delete *any* asset, regardless of who uploaded it.
- **Best for**: Team leads and organization owners.

---

## 🔒 Under the Hood: Granular Actions

If you are building integrations using the Zuperix API, it's helpful to understand the underlying framework. Inside our security matrix, every request is run against a policy engine.

The engine verifies access using six core **Actions**:
1. **`read`**: Viewing data (Assets, Collections, Users).
2. **`create`**: Making new records (Uploading, creating categories).
3. **`update`**: Modifying existing records (Changing metadata).
4. **`delete`**: Removing records (Trashing assets).
5. **`revert`**: A special action for rolling an asset back to a previous version.
6. **`manage`**: A wildcard action that grants total control over a subject.

### Workspace Context (The Isolation Rule)

It's impossible to "accidentally" grant permissions across workspaces. Even if an API Key or a User is granted `manage Asset`, the engine automatically intercepts the request and injects a strict `workspaceId` condition. 

You can't touch an asset unless your lanyard explicitly belongs to *that specific workspace*.
