# Vaults: Secure Asset Sandboxes

**Vaults** provide a secure, isolated layer for your most sensitive or team-specific assets. While Categories and Collections help organize your library, Vaults ensure that only authorized members can access high-stakes content.

---

## 🔐 What is a Vault?

Unlike Global Categories, which are typically visible to everyone in a workspace, a **Vault** is a private repository. It is ideal for:
- **Legal & Contracts**: Storing sensitive agreements.
- **Pre-Launch Assets**: Keeping unreleased product media hidden from the broader team.
- **Departmental Silos**: Providing a dedicated space for HR or Finance teams.

---

## 🏗️ Managing Vaults

### Creating a Vault
1. Navigate to the **Vaults** tab in the sidebar.
2. Click the **New Vault** button.
3. Provide a clear name and description.
4. Once created, you can access the vault to begin adding assets.

### Adding Assets to a Vault
To maintain the highest level of security and data integrity, **assets can only be assigned to a Vault during the initial upload process**. 

1. Open the **Upload** dialog from any page.
2. Use the **Vault** dropdown to select your target vault.
3. Uploaded files will be automatically assigned and encrypted for that specific vault.

:::important Why is this restrictive?
By requiring vault assignment at upload, Zuperix prevents "security leakage" where an asset might be temporarily visible in a public category before being moved. This "Secure at Source" model ensures audit trails are started the moment the file hits our servers.
:::

---

## 👥 Access Control & Oversight

### Membership Roles
Vaults have their own membership list, independent of your workspace-wide roles:
- **Owner**: Full control over assets, vault settings, and membership.
- **Editor**: Can add, modify, and delete assets within the vault.
- **Viewer**: Read-only access to vaulted content.

### Super Admin Visibility
While Vaults are private to their members, **Super Admins** maintain "God Mode" visibility over all vaults. 

:::danger Abuse Prevention
This administrative oversight is necessary to prevent the storage of illegal or prohibited content and to ensure that workspace-wide storage quotas are managed responsibly.
:::

---

## ❓ FAQ

**Are vaulted assets visible in the main search?**
Vaulted assets are only visible to users who are members of that specific vault (and Super Admins). 

**Can I move an existing asset into a vault later?**
No. For security compliance, assets must be vaulted at the time of upload. If you have an unvaulted asset that needs protection, you should re-upload it directly to the vault and delete the original.
