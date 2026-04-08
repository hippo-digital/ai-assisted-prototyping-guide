---
layout: base.njk
title: "Install the GOV.UK Prototype Kit"
part: "Part 1: Get set up"
---

<span class="caption">Part 1: Get set up</span>

# Install the GOV.UK Prototype Kit

The Prototype Kit gives you everything you need to make your prototype look and work like a real GOV.UK service.

## Step 1: Create a folder for your prototypes

First, choose where on your computer you want to keep your prototypes. We recommend creating a folder called `prototypes` in your home directory.

In the Kiro terminal, type the first command and press Enter:

```
mkdir ~/prototypes
```

Then type the second command and press Enter:

```
cd ~/prototypes
```

<details>
<summary>What mkdir and cd mean</summary>
<div class="details-body">
<p><code>mkdir</code> stands for "make directory" – it creates a new folder. <code>cd</code> stands for "change directory" – it moves you into that folder. The <code>~</code> symbol means your home folder (for example, <code>/Users/yourname</code> on a Mac or <code>C:\Users\yourname</code> on Windows).</p>
</div>
</details>

## Step 2: Create a new prototype

Type the following command to create a new prototype project:

```
npx govuk-prototype-kit create report-building-issue
```

This will take a minute or two. It downloads all the files you need and sets up the project.

When it finishes, move into your new project folder:

```
cd report-building-issue
```

## Step 3: Open the project in Kiro

Open Kiro. Go to **File → Open Folder**, then find and select the `report-building-issue` folder inside your `prototypes` folder.

You should see the project files appear in the left-hand sidebar.


## Step 4: Run the prototype

In the Kiro terminal (make sure you are in the `report-building-issue` folder), type:

```
npm run dev
```

After a moment, you should see a message that includes a URL, usually `http://localhost:3000`.

## Step 5: View your prototype in a browser

Open your web browser and go to:

```
http://localhost:3000
```

<div class="inset-text">
<p><strong>Checkpoint:</strong> You should see the GOV.UK Prototype Kit start page in your browser. It will have a blue header with the GOV.UK Tudor crown logo and show a default homepage. If you see this, the Prototype Kit is installed and running.</p>
</div>

<details>
<summary>The header is black, not blue</summary>
<div class="details-body">
<p>GOV.UK refreshed its brand in June 2025, moving the header from black to blue. The Prototype Kit supports this via a flag in <code>app/config.json</code>. If your header is showing as black, the rebrand flag may not be enabled.</p>
<p>Open <code>app/config.json</code> in Kiro and check whether it includes <code>"rebrand": true</code> inside the plugins section. It should look like this:</p>
<div class="code-block"><code>{
  "serviceName": "Report a building issue",
  "plugins": {
    "govuk-frontend": {
      "rebrand": true
    }
  }
}</code><button class="code-copy-btn" aria-label="Copy to clipboard">Copy</button></div>
<p>If the plugins section is missing, add it. Save the file and refresh your browser – the header should turn blue.</p>
<p>You need GOV.UK Frontend v5.10.0 or later for this to work. If you have just created your prototype with <code>npx govuk-prototype-kit create</code>, you should already have a compatible version.</p>
</div>
</details>

<details>
<summary>I see an error in the terminal instead</summary>
<div class="details-body">
<p>Common issues:</p>
<ul>
<li><strong>"port 3000 is already in use"</strong> – close any other prototypes or dev servers, then try again.</li>
<li><strong>"node_modules not found"</strong> – run <code>npm install</code> first, then <code>npm run dev</code>.</li>
<li><strong>"permission denied"</strong> – on Mac or Linux, you may need a temporary admin session via <strong>Admin By Request</strong> before running <code>sudo npm run dev</code>. On Windows, try running Kiro as an administrator via <strong>Admin By Request</strong>.</li>
</ul>
<p>If you are stuck, check the <a href="https://prototype-kit.service.gov.uk/docs/support" target="_blank" rel="noopener noreferrer">Prototype Kit support page</a> or ask a developer on your team.</p>
</div>
</details>

## Understanding the project files

In the Kiro sidebar, the main folders to know about are:

- **app/views** – where all your pages live. Each page is an HTML file.
- **app/assets** – for images, custom CSS, and JavaScript.
- **app/routes.js** – controls page-to-page navigation. Gemini can handle this for you.

<details>
<summary>Other files and folders</summary>
<div class="details-body">
<p>Files like <code>package.json</code>, <code>node_modules</code>, and config files are used by Node.js and the Prototype Kit internally. You do not need to touch them.</p>
<p>The <code>node_modules</code> folder is often very large – this is normal.</p>
</div>
</details>

## How URLs work in the Prototype Kit

The Prototype Kit uses auto-routing. Every HTML file you place in `app/views` is automatically available as a URL in your browser – no configuration needed.

The URL matches the filename, without the `.html` extension:

- `app/views/start.html` → `http://localhost:3000/start`
- `app/views/issue-type.html` → `http://localhost:3000/issue-type`
- `app/views/confirmation.html` → `http://localhost:3000/confirmation`

This means you can go directly to any page at any time by typing its URL into your browser's address bar. You do not need a button or link on the index page to get there.

<div class="inset-text">
<p>In Part 2, after Gemini creates each page, the guide will tell you to go to a specific URL to check it. Just type that URL directly into your browser – for example, <code>http://localhost:3000/start</code>.</p>
</div>

<div class="warning-text">
<span class="warning-text__icon" aria-hidden="true">!</span>
<p>Keep the terminal running. If you close it or press Ctrl+C, your prototype will stop. You will need to run <code>npm run dev</code> again to restart it.</p>
</div>

<nav class="pagination" aria-label="Pagination">
<a href="../install-node/" class="pagination__link pagination__link--prev">
<span class="pagination__direction">Previous</span>
<span class="pagination__page-title">Install Node.js</span>
</a>
<a href="../install-gemini-cli/" class="pagination__link pagination__link--next">
<span class="pagination__direction">Next</span>
<span class="pagination__page-title">Install Gemini CLI</span>
</a>
</nav>
