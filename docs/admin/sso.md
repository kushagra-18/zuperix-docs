# Single Sign-On (SSO)

Streamline your team's access and secure your workspace with **Single Sign-On (SSO)**. By integrating your corporate identity provider, you can manage users in a central location and ensure that only authorized employees can access your high-value assets.

*(SSO is available exclusively on the **Gold** plan)*

---

## 🔒 Why Use SSO?

- **Centralized Security**: Revoke access to Zuperix instantly when an employee leaves your company by disabling their central account.
- **Improved Experience**: No more remembering another password. Your team can sign in with one click using their existing credentials.
- **Enforced Compliance**: Ensure all users login via your company's mandated login flow (including your own Multi-Factor Authentication).

---

## 🛠️ Supported Providers

Zuperix uses **SAML 2.0** and **OIDC**, which allows us to support almost every major enterprise identity provider (IdP):

- **Okta**
- **Microsoft Azure AD / Entra ID**
- **Google Workspace**
- **OneLogin**
- **Ping Identity**

---

## ⚙️ Configuration

To set up SSO for your workspace, follow these steps:

### 1. Register Zuperix in your IdP
Create a new "SAML 2.0" application in your provider's dashboard. You will need the following Zuperix values (available in **Workspace Settings > Security**):
- **Assertion Consumer Service (ACS) URL**
- **Entity ID / Audience URI**

### 2. Provide IdP Metadata to Zuperix
Once the application is created, your provider will give you a **Metadata URL** or an **XML file**. Paste these into the Zuperix SSO configuration screen.

### 3. Domain Verification
To prevent others from "claiming" your team's email addresses, you must verify your corporate domain (e.g., `yourcompany.com`) via a DNS TXT record.

---

## 👥 Just-In-Time (JIT) Provisioning

Zuperix supports **JIT Provisioning**. This means you don't have to manually invite every employee.
- When an employee first logs in via SSO, Zuperix automatically creates a user account for them.
- You can map IdP groups to Zuperix **Roles** (e.g., anyone in the "Design-Team" group in Okta automatically becomes an "Editor" in Zuperix).

![SSO Configuration Placeholder](TODO: [Screenshot of the SSO configuration screen in the dashboard settings])
