# Searching Your Assets

Zuperix offers two ways to find what you're looking for: **Literal Keyword Matching** and **AI-Powered Semantic Discovery**.

## 🧠 Smart AI Search (Gold Plan)

Traditional search engines only look for exact words. Zuperix's AI (powered by CLIP embeddings) understands **visual concepts**.

- **Prompt Examples**: "Sunset over mountains," "Person wearing a blue jacket," "Modern kitchen interiors."
- **How it works**: Toggle the **AI** switch in the search bar. Zuperix will then use neural networks to find images that "look like" your description, even if they don't have those words in their tags or filename.

![AI Search Switch Toggle Placeholder](TODO: [Screenshot of the AI switch in the search bar being toggled ON])

## Pro Search Shortcuts

Power users can use specific "shortcuts" to filter results instantly from the search bar.

| Shortcut | Example | Description |
| :--- | :--- | :--- |
| `type:` | `type:image` | Filter by mime-type (image, video, pdf). |
| `ext:` | `ext:jpg` | Filter by specific file extension. |
| `tag:` | `tag:nature` | Search within asset tags only. |
| `size:` | `size:>10mb` | Find assets larger or smaller than a size. |
| `created:` | `created:7d` | Find assets uploaded in the last X days. |
| `status:` | `status:approved` | Filter by approval status. |
| `ratio:` | `ratio:>1.5` | Filter by aspect ratio (e.g., landscape). |
| `text:` | `text:"Project X"` | Search within extracted document text (Bronze+). |

### 🛠️ Using Logical Operators

You can combine shortcuts using **AND**, **OR**, **NOT**, and **parentheses ()** to create complex queries.

*   **AND**: `type:image AND tag:mountain` (Both must be true)
*   **OR**: `ext:pdf OR ext:docx` (Either can be true)
*   **NOT**: `type:image NOT status:draft` (Exclude drafts)
*   **Grouping**: `(ext:jpg OR ext:png) AND created:30d` (Recent images only)

---

## 📸 Visual Search (Gold Plan)

Found a great photo and need more like it? Use the **Visual Similarity** search.

## 👁️ Visual Search

Found an asset you like, but want to see more like it? Use the **Visual Similarity** search.

- **"Find More Like This"**: One click on an asset will show you others that look visually similar—same colors, shapes, and patterns.
- **Pattern Match**: Even if the labels are different, our AI senses the visual "vibe" of your assets.

![Visual Similarity Search Placeholder](TODO: [Screenshot of the "Similiar Visuals" results for a specific item])

## 🏷️ Multi-Filter Search

Refine your search by using our powerful filters.

- **File Type**: Search only for PNGs or PDFs.
- **Color**: Find assets that match your brand's color palette.
- **Date**: Search by creation or upload date.
- **Category & Collection**: Drill down into specific parts of your workspace.

![Advanced Filters Placeholder](TODO: [Screenshot of the sidebar filters in action])

## 🎞️ Search & Selection

Working with many items? Use our selection tools to quickly move, delete, or share multiple results.

- **Bulk Select**: Select dozens of assets at once.
- **Marquee Select**: Drag your mouse to select a specific area of assets in the grid.
- **Bulk Actions**: A toolbar will appear at the bottom for quick management of your selection.
