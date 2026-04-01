# AI Assisted Prototyping Guide

A guide for Hippo's Design Community of Practice on using Gemini CLI with the GOV.UK Prototype Kit to build realistic prototypes faster.

Built with [Eleventy](https://www.11ty.dev/) and hosted on GitHub Pages.

**Maintained by:** Suly Khan — reach out on Slack with questions or feedback.

---

## Contents

- [How the guide is structured](#how-the-guide-is-structured)
- [Contributing content](#contributing-content)
  - [Option 1: Edit directly on GitHub (no setup needed)](#option-1-edit-directly-on-github-no-setup-needed)
  - [Option 2: Run it locally](#option-2-run-it-locally)
- [How to edit an existing page](#how-to-edit-an-existing-page)
- [How to add a new page](#how-to-add-a-new-page)
- [Markdown reference](#markdown-reference)
- [Special components](#special-components)
- [Changing the navigation](#changing-the-navigation)
- [Changing the design](#changing-the-design)
- [How publishing works](#how-publishing-works)

---

## How the guide is structured

```
src/
├── _includes/
│   └── base.njk                    ← Shared layout (header, sidebar, nav). Edit with care.
├── _data/
│   └── sidebarNav.js               ← Navigation structure. Edit to add or reorder pages.
├── css/
│   ├── style.css                   ← Hippo brand styles.
│   └── nav.js                      ← JavaScript for mobile menu and copy buttons.
├── setup/                          ← Part 1 pages (one .md file per page)
├── build/                          ← Part 2 pages (one .md file per page)
└── index.md                        ← Guide homepage
```

Each `.md` file is a page. The shared layout — header, sidebar, navigation — is defined once in `base.njk` and applied automatically to every page.

---

## Contributing content

You do not need to know how to code to contribute. All content is written in Markdown — plain text with simple formatting rules. There are two ways to contribute.

---

### Option 1: Edit directly on GitHub (no setup needed)

This is the easiest route. You only need a GitHub account.

**To edit an existing page:**

1. Go to the repository on GitHub
2. Navigate to `src/setup/` or `src/build/`
3. Click the file you want to edit
4. Click the pencil icon (Edit this file) in the top right
5. Make your changes
6. Click **Propose changes**
7. Click **Create pull request**

Suly will review and merge it. The site updates automatically.

**To add a new page:**

1. Go to `src/setup/` or `src/build/` in the repository
2. Click **Add file → Create new file**
3. Name your file using lowercase and hyphens — for example `advanced-prompting.md`
4. Add the frontmatter and content (see [How to add a new page](#how-to-add-a-new-page))
5. Open a pull request
6. Also edit `src/_data/sidebarNav.js` to add the page to the navigation

---

### Option 2: Run it locally

For contributors who want to preview changes as they write.

**You need:** Node.js v20 or higher.

```bash
git clone https://github.com/hippo-digital/ai-prototyping-guide.git
cd ai-prototyping-guide
npm install
npm start
```

Open `http://localhost:8080`. The site reloads as you save files.

Push to a new branch and open a pull request when you are ready to share.

---

## How to edit an existing page

Open the `.md` file for the page you want to change. Content sits below the frontmatter block — the section between the `---` lines at the top. Edit the text and save.

Do not change the frontmatter block, the `base.njk` layout file, or anything in `src/css/` unless you mean to.

---

## How to add a new page

**Step 1: Create the file**

Create a `.md` file in `src/setup/` or `src/build/`. Use lowercase and hyphens for the filename.

**Step 2: Add the frontmatter**

Every page must start with:

```yaml
---
layout: base.njk
title: "Your page title"
part: "Part 1: Get set up"
---
```

Change `title` to your page title and `part` to either `Part 1: Get set up` or `Part 2: Build a prototype`.

**Step 3: Write your content**

Write below the frontmatter in Markdown. See the [Markdown reference](#markdown-reference) below.

**Step 4: Add the page to the navigation**

Open `src/_data/sidebarNav.js` and add an entry to the right section:

```js
{ title: "Your page title", url: "/setup/your-filename/" }
```

The URL matches your filename — `advanced-prompting.md` becomes `/setup/advanced-prompting/`.

**Step 5: Add pagination links**

At the bottom of your content:

```html
<nav class="pagination" aria-label="Pagination">
  <a href="/setup/previous-page/" class="pagination__link pagination__link--prev">
    <span class="pagination__direction">Previous</span>
    <span class="pagination__page-title">Previous page title</span>
  </a>
  <a href="/setup/next-page/" class="pagination__link pagination__link--next">
    <span class="pagination__direction">Next</span>
    <span class="pagination__page-title">Next page title</span>
  </a>
</nav>
```

---

## Markdown reference

```markdown
## H2 heading — main sections

### H3 heading — subsections

A paragraph. Keep sentences under 25 words.

- Bullet list item
- Another item

1. Numbered item
2. Second item

**Bold** for interface labels like button names.

`inline code` for file paths, commands, and code references.

[Link text](https://example.com)
```

---

## Special components

Use these as HTML blocks directly in your `.md` file.

**Code block** (dark panel with copy button):

```html
<div class="code-block"><code>your command here</code></div>
```

**Inset text** (callout box):

```html
<div class="inset-text">
  <p><strong>Checkpoint:</strong> Your message here.</p>
</div>
```

**Warning** (pink left border):

```html
<div class="warning-text">
  <span class="warning-text__icon" aria-hidden="true">!</span>
  <p>Your warning here.</p>
</div>
```

**Expandable section:**

```html
<details>
  <summary>Summary text shown when collapsed</summary>
  <div class="details-body">
    <p>Content shown when expanded.</p>
  </div>
</details>
```

**Caption** (shown above the H1):

```html
<span class="caption">Part 1: Get set up</span>
```

---

## Changing the navigation

Edit `src/_data/sidebarNav.js`.

To add a page, add an entry to the right section:

```js
{ title: "Your page title", url: "/setup/your-filename/" }
```

To reorder pages, move entries up or down within the array.

To add a new part (Part 3 etc.), add a new section object and create a new folder in `src/` for the pages:

```js
{
  part: "Part 3: Going further",
  pages: [
    { title: "First page",  url: "/advanced/first-page/" },
    { title: "Second page", url: "/advanced/second-page/" }
  ]
}
```

---

## Changing the design

All styles are in `src/css/style.css`. Hippo brand variables are defined at the top under `:root`. To change a colour across the whole site, update the relevant variable:

```css
:root {
  --turquoise: #6db9ab;
  --navy: #0c2340;
}
```

---

## How publishing works

Merging a pull request into `main` triggers a GitHub Actions build and deploys to GitHub Pages. It usually takes under 2 minutes. No manual deploy steps are needed.

The workflow is in `.github/workflows/deploy.yml`.
