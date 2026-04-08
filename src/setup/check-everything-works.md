---
layout: base.njk
title: "Check everything works"
part: "Part 1: Get set up"
---

<span class="caption">Part 1: Get set up</span>

# Check everything works

Before you start building, let us confirm that all your tools are working together.

You should have 2 terminals open in Kiro:

- **Terminal 1:** running your prototype (`npm run dev`)
- **Terminal 2:** running Gemini CLI (`npx @google/gemini-cli`)

And your prototype should be visible in a browser at `http://localhost:3000`.

## The final test

Let us ask Gemini CLI to make a small change and check it appears in the browser.

In Gemini CLI (Terminal 2), type:

```
Change the service name in this prototype to "Report a building issue". The config file is at app/config.json — update the serviceName field.
```

Gemini will show you the change it wants to make and ask for your permission. Use the **arrow keys** to select **Allow once**, then press **Enter** to confirm.

<img src="/ai-assisted-prototyping-guide/images/gemini-action-required.png" alt="Gemini CLI showing an Action Required prompt, with a diff of the proposed change to app/config.json and options to Allow once, Allow for this session, or No" class="screenshot">
<p class="screenshot-caption">Gemini shows exactly what it plans to change before making any edits. Use the arrow keys to choose an option and press Enter.</p>

Now go to your browser and refresh the page at `http://localhost:3000`.

<div class="inset-text">
<p><strong>Checkpoint:</strong> You should see "Report a building issue" in the header of your prototype. If you do, everything is working – Gemini CLI can edit your prototype files, and the changes show up in the browser.</p>
</div>

<details>
<summary>The service name did not change</summary>
<div class="details-body">
<ul>
<li>Check that Gemini confirmed the edit. If it asked permission and you said yes, it should have confirmed the change.</li>
<li>Try a hard refresh: <strong>Cmd + Shift + R</strong> (Mac) or <strong>Ctrl + Shift + R</strong> (Windows).</li>
<li>Check manually: open <code>app/config.json</code> in Kiro and look at the <code>serviceName</code> value.</li>
<li>Make sure your prototype is still running in Terminal 1.</li>
</ul>
</div>
</details>

## Your setup at a glance

| Tool | How to check it is working |
|------|---------------------------|
| Kiro | You can see your project files in the sidebar |
| Node.js | `node --version` shows v20 or higher |
| Prototype Kit | Your prototype loads at `http://localhost:3000` |
| Gemini CLI | You can type prompts and Gemini responds |

## Tips for working with Gemini CLI

### Always check what Gemini produces

Gemini is very good at writing code, but it does not always get things right first time. After each prompt, refresh your browser to see the result. If something looks wrong, tell Gemini what to fix in plain English.

### Be specific in your prompts

The more detail you give, the better the result. Instead of "make a page", try "create a question page that asks the user what type of building issue they want to report, with radio buttons for 'Broken window', 'Heating not working', 'Water leak', and 'Something else'".

### You can undo any change

Press **Cmd + Z** (Mac) or **Ctrl + Z** (Windows) in the affected file to undo. You can also ask Gemini to revert the change.

### Refer to the GOV.UK Design System

Reference specific components from the [GOV.UK Design System](https://design-system.service.gov.uk/) in your prompts. For example, "use the radios component" or "add a back link". This helps Gemini produce the right markup.

<details>
<summary>Tips for people with HTML and CSS experience</summary>
<div class="details-body">
<ul>
<li>Review the HTML Gemini produces before accepting, to check it uses the right GOV.UK Frontend classes.</li>
<li>Make small tweaks by hand, then ask Gemini to handle the complex parts.</li>
<li>Ask Gemini to explain what it did: "explain the HTML you just wrote" gives a walkthrough.</li>
</ul>
</div>
</details>

<details>
<summary>Tips for advanced users</summary>
<div class="details-body">
<ul>
<li><strong>GEMINI.md context files</strong> – create <code>GEMINI.md</code> in your project root with conventions like "always use GOV.UK Frontend components, use Nunjucks extends for layouts, follow GDS patterns". Gemini reads this on every start.</li>
<li><strong>Routing logic</strong> – ask Gemini to handle branching in <code>app/routes.js</code>. Be explicit: "if the user selects 'Something else', send them to the something-else page".</li>
<li><strong>Git integration</strong> – initialise with <code>git init</code> and commit after each major step for a safety net.</li>
</ul>
</div>
</details>

<hr class="section-break section-break--thick">

## You are ready to build

You have all the tools installed and working. In part 2, you will use Gemini CLI to build a complete 5-page prototype for a fictional 'Report a building issue' service.

<a href="../../build/overview/" class="button-start">
Start building your prototype
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
<path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
</svg>
</a>

<nav class="pagination" aria-label="Pagination">
<a href="../install-gemini-cli/" class="pagination__link pagination__link--prev">
<span class="pagination__direction">Previous</span>
<span class="pagination__page-title">Install Gemini CLI</span>
</a>
</nav>
