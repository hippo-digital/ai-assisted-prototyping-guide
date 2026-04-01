---
layout: base.njk
title: Install Gemini CLI
part: "Part 1: Get set up"
---

<span class="caption">Part 1: Get set up</span>

# Install Gemini CLI

Gemini CLI is the AI tool you will use to build your prototype. It reads your project files, understands what you are building, and writes code based on your instructions.

It is free to use with a Hippo Google account.

## Step 1: Install Gemini CLI

Open a **new** terminal in VS Code. You need a second terminal because your prototype is still running in the first one.

To open a new terminal, click the **+** icon in the terminal panel, or go to **Terminal → New Terminal**.

In the new terminal, type:

<div class="code-block"><code>npm install -g @google/gemini-cli</code></div>

This installs Gemini CLI once on your computer. You only need to do this step once.

<details>
  <summary>I get a 'permission denied' error</summary>
  <div class="details-body">
    <p>On Mac or Linux, add <code>sudo</code> before the command:</p>
    <div class="code-block"><code>sudo npm install -g @google/gemini-cli</code></div>
    <p>Enter your computer password when asked. The cursor will not move as you type – this is normal.</p>
    <p>On Windows, try running VS Code as an administrator.</p>
  </div>
</details>

## Step 2: Start Gemini CLI

Navigate into your prototype project folder, then start Gemini CLI:

<div class="code-block"><code>cd ~/prototypes/report-building-issue
npx @google/gemini-cli</code></div>

You will use `npx` every time you want to start Gemini CLI. This is different from the `npm install` command in Step 1, which you only run once. Think of `npm install` as putting a tool in your toolbox, and `npx` as picking it up and using it.

Gemini CLI must be started from inside your prototype folder – this is how it knows which files to read and edit.

The first time you run it, it will ask you to sign in with Google.

## Step 3: Sign in with Google

When asked how to authenticate, select **Sign in with Google**.

Your browser will open and ask you to sign in. Use your Hippo Google account rather than a personal account.

After signing in, return to VS Code. Gemini CLI should now show a prompt where you can type instructions.

<div class="inset-text">
  <p><strong>Checkpoint:</strong> You should see a Gemini CLI prompt in your terminal, ready for you to type. It may show the name of your project folder.</p>
</div>

## Understanding the Gemini CLI interface

Once Gemini CLI is running, you will see a prompt at the top and a status bar along the bottom. The status bar tells you important information about your current session.

The status bar shows 4 things:

- **workspace** – the folder Gemini CLI is working in. This should show `~/prototypes/report-building-issue`. If it shows a different folder, Gemini is looking at the wrong project.
- **branch** – the Git branch you are on. If you have not set up Git, this will be blank. For this guide, you do not need to worry about it.
- **sandbox** – whether Gemini is running in a restricted mode. It will show `no sandbox` for most setups. This is normal.
- **model** – which version of Gemini is being used. The guide works with any model shown here.

<div class="inset-text">
  <p><strong>Check the workspace path before you start prompting.</strong> If the workspace does not show your prototype folder, stop and restart Gemini CLI from the correct folder. Run <code>cd ~/prototypes/report-building-issue</code> first, then <code>npx @google/gemini-cli</code>.</p>
</div>

You will also see **auto-accept edits** at the top of the interface. Leave this off – it means Gemini will ask your permission before making any changes to files, which is a useful safety net while you are learning.

## Step 4: Test it with a simple prompt

Type the following:

<div class="code-block"><code>What files and folders are in this project? Give me a brief summary.</code></div>

Gemini should describe the project structure, mentioning `app/views`, `app/assets`, and `package.json`.

If it asks for permission to read files, type **yes**. Gemini always asks before reading or changing files.

<div class="inset-text">
  <p><strong>Checkpoint:</strong> Gemini should have described your project files. If it mentioned the GOV.UK Prototype Kit or <code>app/views</code>, it can see your project and is ready to help you build.</p>
</div>

<details>
  <summary>How Gemini CLI works with your files</summary>
  <div class="details-body">
    <p>Gemini CLI reads and writes files in the folder where you started it. This is why you must run <code>npx @google/gemini-cli</code> from inside your prototype folder.</p>
    <p>When you give an instruction like "create a start page", it will:</p>
    <ol>
      <li>Look at the existing project structure to understand the conventions.</li>
      <li>Write HTML files into the correct folders.</li>
      <li>Ask your permission before creating or modifying any files.</li>
    </ol>
    <p>You can always say no, and you can undo changes with Ctrl+Z in your editor.</p>
  </div>
</details>

<details>
  <summary>Gemini CLI is free to use</summary>
  <div class="details-body">
    <p>It is free with a Google account, with generous usage limits (around 60 requests per minute and 1,000 per day). You are unlikely to hit them during prototyping.</p>
    <p>Google maintains Gemini CLI as open source software.</p>
  </div>
</details>

<nav class="pagination" aria-label="Pagination">
  <a href="/setup/install-the-prototype-kit/" class="pagination__link pagination__link--prev">
    <span class="pagination__direction">Previous</span>
    <span class="pagination__page-title">Install the Prototype Kit</span>
  </a>
  <a href="/setup/check-everything-works/" class="pagination__link pagination__link--next">
    <span class="pagination__direction">Next</span>
    <span class="pagination__page-title">Check everything works</span>
  </a>
</nav>
