# The Art of Metadata

If your Assets are the bricks of your digital library, **Metadata** is the cement that holds them together. Without it, you just have a pile of files. With it, you have a searchable, organized, and intelligent system.

## 📖 What is Metadata?

Metadata is "data about data." It's the silent story told by every file in your Zuperix workspace. While a filename might be `IMG_5678.jpg`, its metadata tells us it’s a high-resolution landscape photo, taken in 2024, with a dominant blue color palette, and is currently labeled as "Approved" for social media use.

In Zuperix, we treat metadata as a first-class citizen. It's not just a list of hidden text; it's the engine that powers your search, your filters, and your workflows.

---

## 🛠️ Custom Metadata Fields

Every business is unique. A fashion brand needs to track "Season" and "Fabric," while an architecture firm needs to track "Project Number" and "Lead Architect."

Zuperix allows you to define your own **Metadata Fields** in your Workspace Settings. We support a variety of field types to ensure your data is clean and actionable:

- **Short Text**: For names, IDs, or short descriptions.
- **Long Text**: For detailed notes or transcripts.
- **Number**: For prices, counts, or dimensions.
- **Boolean (Yes/No)**: For simple toggles like "Web Ready" or "Archived."
- **Date**: To track project milestones, expiry dates, or releases.
- **URL/Email**: For linking to external resources or contacts.

![Custom Metadata Configuration Placeholder](TODO: [Screenshot of the Metadata Fields configuration screen in Settings])

---

## 🤖 System-Generated Metadata

You don't have to do all the work. Zuperix automatically extracts several key pieces of information as soon as you upload a file:

1. **Technical Specs**: File size, dimensions (width/height), aspect ratio, and mime-type.
2. **Color Palette**: Our AI analyzes the image and extracts the most dominant colors, allowing you to search by "vibe."
3. **Smart Tags (Gold Only)**: AI identifies objects, scenes, and actions in your images and tags them automatically.
4. **OCR & Text Extraction**: For PDFs and images containing text, we "read" the content so you can find a document by searching for a sentence within it.

---

## 🔍 The Power of Searching with Metadata

Metadata really shines when you need to find one needle in a haystack of ten thousand assets.

### Filtering by Fields
In the **Filter Sidebar**, you'll see a dedicated section for your Custom Metadata. You can check a box to see only "Cotton" fabrics or use a slider to find assets with a "Price" between $50 and $100.

### Advanced Queries
Using [Search Shortcuts](../search/smart-search#pro-search-shortcuts), you can query metadata directly from the search bar:
- `metadata.ProjectID:12345`
- `metadata.IsApproved:true`

---

## 🚀 Power Moves: Bulk Metadata Import

Managing metadata for ten assets is easy. Managing it for ten thousand is a different story. For large-scale updates or migrating data from another system, Zuperix provides a high-performance **Bulk Import (CSV)** tool.

### 📥 1. Download Your Custom Template
Metadata fields are unique to every workspace. Instead of giving you a generic template, Zuperix generates a **custom CSV template** specifically for your current field definitions.

- **Action**: Head to **Workspace Settings > Metadata** and click **Bulk Import (CSV)**.
- **Template Download**: Click **Download Template**. You'll get a file with all your custom field keys already set as column headers.

### 🍱 2. Data Structure & Matching
To update the right asset, the CSV uses a **Matching Key**. You can use either of the following in the first column:
- `asset_id`: The unique 36-character UUID assigned by Zuperix.
- `original_filename`: The exact name of the file (e.g., `Summer_Campaign_01.jpg`).

### ✍️ 3. Formatting Your Values
Ensure your data matches the field types you've defined:
- **Text & Strings**: Regular text.
- **Numbers**: Just the numeric value (no currency symbols or commas).
- **Booleans**: Use `true` or `false`.
- **Multi-Select**: Separate multiple values using a **pipe character (`|`)**.
  - *Example*: `Nature | Landscape | Summer`

### 📤 4. Upload & Background Processing
Once your spreadsheet is ready, upload it back to the Bulk Import screen.
- **Async Execution**: Large files are processed in the background so you can keep working.
- **Batch Reindexing**: After the import finishes, Zuperix automatically reindexes your assets so the new metadata is instantly searchable.

---

## 💡 Best Practices for Great Metadata

- **Be Consistent**: Use clear, standardized names for your fields.
- **Use the Right Type**: Don't use a Text field for a Date; using the Date type allows you to use the calendar filter.
- **Required Fields**: For critical data (like a Project ID), mark the field as **Required** to ensure your team fills it out during upload.

Metadata isn’t just admin work; it’s the key to making your assets discoverable and your team efficient.
