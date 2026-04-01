---
layout: base.njk
title: "Install Node.js"
part: "Part 1: Get set up"
---

<span class="caption">Part 1: Get set up</span>

# Install Node.js

Node.js powers both the GOV.UK Prototype Kit and Gemini CLI. You need to install it before either of those tools will work.

You will not use Node.js directly – it runs in the background.

## Step 1: Check if you already have Node.js

In the VS Code terminal, type the following and press Enter:

```
node --version
```

If you see a version number starting with **v20** or higher (for example, `v20.11.0`), you already have a compatible version. Skip to the [next page](install-the-prototype-kit.html).

If you see an error like `command not found`, or a version lower than 20, continue below.

## Step 2: Download Node.js

Go to [nodejs.org](https://nodejs.org/) and download the **LTS** (Long Term Support) version. This is the version on the left – it will say "Recommended for most users".

<div class="warning-text">
<span class="warning-text__icon" aria-hidden="true">!</span>
<p>Make sure you download version 20 or higher. The GOV.UK Prototype Kit and Gemini CLI both need at least version 20.</p>
</div>

## Step 3: Install Node.js

Open the downloaded file and follow the installer. Accept all the default settings.

## Step 4: Restart VS Code

After installing Node.js, close VS Code completely and reopen it. This makes sure VS Code can find the newly installed Node.js.

## Step 5: Check it worked

Open the terminal in VS Code again and type:

```
node --version
```

<div class="inset-text">
<p><strong>Checkpoint:</strong> You should see a version number like <code>v20.11.0</code> or higher. If you do, Node.js is installed and working.</p>
</div>

<details>
<summary>I still get 'command not found' after installing</summary>
<div class="details-body">
<p>Try these things:</p>
<ul>
<li>Make sure you fully closed and reopened VS Code (not just the tab – the whole application).</li>
<li>On Windows, try opening a new terminal via <strong>Terminal</strong> → <strong>New Terminal</strong>.</li>
<li>On Mac with Homebrew, open a new terminal window for the changes to take effect.</li>
<li>Try restarting your computer.</li>
</ul>
<p>If none of these work, ask a developer on your team. It is a common setup issue and they will likely know the fix for your specific computer.</p>
</div>
</details>

<details>
<summary>What Node.js does in the background</summary>
<div class="details-body">
<p>Node.js is a runtime – a program that can run JavaScript code outside of a web browser. The Prototype Kit is built with JavaScript, so it needs Node.js to run. Gemini CLI is also a JavaScript application, so it needs Node.js too.</p>
<p>Node.js also comes with a tool called <strong>npm</strong> (Node Package Manager), which is how you install things like the Prototype Kit and Gemini CLI. Think of npm as an app store for developer tools.</p>
</div>
</details>

<nav class="pagination" aria-label="Pagination">
<a href="../install-a-code-editor/" class="pagination__link pagination__link--prev">
<span class="pagination__direction">Previous</span>
<span class="pagination__page-title">Install a code editor</span>
</a>
<a href="../install-the-prototype-kit/" class="pagination__link pagination__link--next">
<span class="pagination__direction">Next</span>
<span class="pagination__page-title">Install the GOV.UK Prototype Kit</span>
</a>
</nav>
