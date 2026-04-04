# Smart AI Features

Zuperix uses artificial intelligence to do the heavy lifting for you. From automatic tagging to extracting text from images, our AI features help you stay organized without the manual effort.

## 🏷️ Smart Tags (Gold Plan)

Stop manually typing "mountain," "blue sky," or "outdoor." Zuperix uses deep learning models to "see" your images the moment they are uploaded.

### How It Works
- **Object Recognition**: Zuperix identifies over 1,000 distinct object categories (cars, landmarks, animals).
- **Scene Detection**: Understands contexts like "wedding," "professional office," or "nature."
- **Action Tags**: Recognizes what’s happening in a photo (e.g., "running," "shaking hands").

### 🔍 Search Power
Smart Tags are weighted in our search index, meaning if you search for "mountain," Zuperix will prioritize photos that the AI *knows* contain mountains, even if the filename is `DSC001.jpg`.

---

## 👥 Facial Recognition (Silver+)

Managing photography of teams, events, or marketing shoots is faster when Zuperix knows who's who.

### 👤 Automatic People Grouping
As soon as photos are uploaded, Zuperix’s localized computer vision model extracts distinct facial signatures.
- **Find More Like This**: Within an asset's details, you’ll see a list of detected faces. Clicking a face will instantly pull up every other photo in your workspace containing that specific person.
- **Privacy First**: All facial feature extraction happens within your secure workspace; we do not share facial data across different customers.

---

## 🧐 Visual Similarity (Silver+)

Found an asset you like, but want to see "something similar"? Zuperix uses **CLIP (Contrastive Language-Image Pre-training)** embeddings to compare the "visual essence" of your files.

- **Look-a-Like Discovery**: Zuperix maps images into a mathematical multi-dimensional space. The "Search Similar" button simply finds the assets that are closest to each other in that space.
- **Pattern Match**: It detects colors, textures, and compositions. If you find a dark blue minimalist logo, "Search Similar" will find other dark blue minimalist logos.

---

## 🔍 OCR & Text Extraction (Bronze+)

Zuperix "reads" your documents so you don't have to.
- **Full-Text Retrieval**: We extract text from PDFs, screenshots, and scanned images (OCR).
- **Search Inside**: You can find a document just by searching for a sentence or keyword that appears on page 42. Use the `text:"your query"` shortcut to search within extracted text only.

---

## 👥 No More Duplicates (All Plans)

Ever accidentally upload the same photo twice? Zuperix is smarter than that.

- **Hash-based Check**: We check every file you upload to make sure it's not already in your workspace.
- **Visual Check**: Our AI senses if an image is *too similar* to something you've already uploaded.

## ⏳ Versioning (The Time Machine)

Making changes to a design or editing a video? Don't lose your work.

- **Upload New Versions**: Upload a revised version of an asset, and Zuperix will automatically keep the original one.
- **History**: View and download previous versions from the **Asset History** tab.

![Versioning Panel Placeholder](TODO: [Screenshot of the version history panel on an asset])
