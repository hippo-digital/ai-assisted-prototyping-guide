---
layout: base.njk
title: "What you'll build"
part: "Part 2: Build a prototype"
---

<span class="caption">Part 2: Build a prototype</span>

# What you'll build

In this part, you will use Gemini CLI to build a working 5-page GOV.UK prototype for a fictional service called **Report a building issue**.

You will not write any code by hand. Instead, you will write plain English prompts and Gemini will create the pages for you. Your job is to direct Gemini, check what it produces, and tell it what to fix.

## The pages you'll create

Your finished prototype will have these pages, in this order:

1. **Start page** – introduces the service and has a "Start now" button
2. **Question page 1** – asks what type of building issue the user wants to report, using radio buttons
3. **Question page 2** – asks for the location of the issue, using a text input
4. **Check your answers page** – shows the user what they entered so they can review it
5. **Confirmation page** – tells the user their report has been submitted

You will then link all the pages together so someone can click through the full journey from start to confirmation.

## How this part works

Each section of this guide follows the same pattern:

1. A brief description of what the page should look like and do
2. The exact prompt to give Gemini CLI – copy it exactly or adapt it
3. A checkpoint telling you what to look for in your browser
4. What to do if something does not look right

<div class="inset-text">
<p>You do not need to understand the code Gemini writes. Focus on whether the page looks right in your browser. If it does not, describe the problem to Gemini in plain English and it will fix it.</p>
</div>

## Before you start

Make sure you have:

- Terminal 1 open with your prototype running (`npm run dev`)
- Terminal 2 open with Gemini CLI running (`npx @google/gemini-cli`), pointed at your prototype folder
- Your prototype open in a browser at `http://localhost:3000`

If you closed your terminals since Part 1, open Kiro, navigate to your prototype folder, and restart both.

<details>
<summary>Restarting if you closed everything</summary>
<div class="details-body">
<p>Open Kiro and open your prototype folder (<strong>File → Open Folder</strong> and find <code>report-building-issue</code>).</p>
<p>Open Terminal 1 and run:</p>
<div class="code-block"><code>npm run dev</code><button class="code-copy-btn" aria-label="Copy to clipboard">Copy</button></div>
<p>Open Terminal 2 (click the + icon in the terminal panel), navigate into your prototype folder, then run:</p>
<div class="code-block"><code>cd ~/prototypes/report-building-issue
npx @google/gemini-cli</code><button class="code-copy-btn" aria-label="Copy to clipboard">Copy</button></div>
<p>Check your browser at <code>http://localhost:3000</code> – you should see your prototype.</p>
</div>
</details>

## Navigating to pages in your browser

After Gemini creates each page, you will check it by going to a URL in your browser. The Prototype Kit maps filenames to URLs automatically – this is called auto-routing.

You do not need a link or button to visit a page. Just type the URL directly into your browser's address bar:

- After creating `app/views/start.html`, go to `http://localhost:3000/start`
- After creating `app/views/issue-type.html`, go to `http://localhost:3000/issue-type`

This is how designers normally navigate their own prototypes. Each section of this guide will tell you exactly which URL to visit.

<details>
<summary>Optional: add a Start now button to the index page</summary>
<div class="details-body">
<p>The default index page at <code>http://localhost:3000</code> is a plain list of links. Once you have Gemini CLI running, you can ask it to add a "Start now" button that links directly to the first page of your journey. This is useful if you want to share the prototype with a user researcher or stakeholder.</p>
<p>In Gemini CLI, paste this prompt:</p>
<div class="code-block"><code>Update app/views/index.html to add a "Start now" button that links to /start. Place it below any existing content on the page. Use the govuk-button and govuk-button--start classes, and include the GOV.UK arrow SVG icon inside the button.</code><button class="code-copy-btn" aria-label="Copy to clipboard">Copy</button></div>
<p>You can always navigate directly to <code>http://localhost:3000/start</code> without it – this is entirely optional.</p>
</div>
</details>

## A note on how Gemini handles HTML in the Prototype Kit

The GOV.UK Prototype Kit uses a templating system called Nunjucks. When you ask Gemini to create pages, it will create `.html` files inside `app/views`. These files use a mix of standard HTML and Nunjucks tags – you will see things like `{% extends "layouts/main.html" %}` at the top.

You do not need to understand Nunjucks to follow this guide. Just focus on the browser output.

<details>
<summary>What Nunjucks does</summary>
<div class="details-body">
<p>Nunjucks is a templating language that lets pages share a common layout – the GOV.UK header, footer, and navigation – without you having to copy that code onto every page. When the Prototype Kit processes a Nunjucks file, it combines your page content with the shared layout and serves the result as a complete HTML page in your browser.</p>
<p>When Gemini creates a page, it only needs to write the unique content for that page. The rest (GOV.UK header, footer, skip link, phase banner) is inherited automatically from the layout.</p>
</div>
</details>

<nav class="pagination" aria-label="Pagination">
<a href="../../setup/check-everything-works/" class="pagination__link pagination__link--prev">
<span class="pagination__direction">Previous</span>
<span class="pagination__page-title">Check everything works</span>
</a>
<a href="../create-a-start-page/" class="pagination__link pagination__link--next">
<span class="pagination__direction">Next</span>
<span class="pagination__page-title">Create a start page</span>
</a>
</nav>
