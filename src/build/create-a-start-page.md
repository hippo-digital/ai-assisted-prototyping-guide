---
layout: base.njk
title: "Create a start page"
part: "Part 2: Build a prototype"
---

<span class="caption">Part 2: Build a prototype</span>

# Create a start page

The start page is the first thing users see. It introduces the service, explains what it does, and has a "Start now" button that begins the journey.

On GOV.UK, start pages follow a consistent pattern: a clear heading, a short description of the service, bullet points listing what the user will need, and a prominent start button.

## The prompt

In Gemini CLI (Terminal 2), paste the following prompt:

```
Create a GOV.UK start page for a service called "Report a building issue".

The page should be at app/views/start.html and extend the main layout using {% extends "layouts/main.html" %}.

The page content should include:
- A heading: "Report a building issue"
- A short paragraph: "Use this service to report a problem with a building you manage or are responsible for."
- A bullet list under the heading "Use this service to:" with these items: "report a structural problem", "report a heating or plumbing issue", "report damage to communal areas"
- A "Start now" button using the govuk-button--start class with an arrow icon, linking to /issue-type
- A paragraph below the button with a link to a sign in page (href="/sign-in"): "If you have reported an issue before, you can sign in to track your reports."

Use GOV.UK Frontend classes throughout. The button should use the correct GOV.UK start button markup with the SVG arrow icon.
```

Gemini will show you the file it wants to create and ask for your permission. Use the **arrow keys** to select **Allow once**, then press **Enter** to confirm.

## Check your browser

Go to `http://localhost:3000/start` in your browser.

<div class="inset-text">
<p><strong>Checkpoint:</strong> You should see a GOV.UK-styled page with a blue header containing the GOV.UK Tudor crown logo, the service name "Report a building issue", the introductory paragraph, the bullet list, and a green "Start now" button with an arrow. The page should be in a two-thirds column layout on the left.</p>
</div>

<details>
<summary>The page is not found (404 error)</summary>
<div class="details-body">
<p>Check that Gemini confirmed it created the file at <code>app/views/start.html</code>. If it did not, ask it again:</p>
<div class="code-block"><code>Create the file app/views/start.html as described.</code><button class="code-copy-btn" aria-label="Copy to clipboard">Copy</button></div>
<p>Also check that your prototype is still running in Terminal 1. If not, run <code>npm run dev</code> again.</p>
</div>
</details>

<details>
<summary>The page looks wrong – no GOV.UK styling</summary>
<div class="details-body">
<p>This usually means the Nunjucks layout is not being extended correctly. Check that the first line of <code>app/views/start.html</code> is:</p>
<div class="code-block"><code>{% extends "layouts/main.html" %}</code><button class="code-copy-btn" aria-label="Copy to clipboard">Copy</button></div>
<p>If it is not there, ask Gemini to fix it:</p>
<div class="code-block"><code>The start page at app/views/start.html is not using the GOV.UK layout. Make sure it extends "layouts/main.html" correctly.</code><button class="code-copy-btn" aria-label="Copy to clipboard">Copy</button></div>
</div>
</details>

<details>
<summary>The button does not look like a GOV.UK start button</summary>
<div class="details-body">
<p>The GOV.UK start button requires both the <code>govuk-button</code> and <code>govuk-button--start</code> classes, plus an SVG arrow icon inside the button element. Ask Gemini to fix it:</p>
<div class="code-block"><code>The start button on app/views/start.html does not look right. Update it to use the correct GOV.UK start button with the SVG arrow icon. The button element should have classes govuk-button and govuk-button--start, and contain the correct arrow SVG.</code><button class="code-copy-btn" aria-label="Copy to clipboard">Copy</button></div>
</div>
</details>

## Understanding what Gemini built

<details>
<summary>What the Nunjucks layout does</summary>
<div class="details-body">
<p>When you open <code>app/views/start.html</code> in Kiro, you will see it starts with <code>{% extends "layouts/main.html" %}</code>. This tells the Prototype Kit to wrap your page content with the shared layout – the GOV.UK blue header, footer, and skip link.</p>
<p>The rest of your content sits inside a <code>{% block content %}</code> tag. Only what is inside that block is unique to this page.</p>
</div>
</details>

<details>
<summary>The GOV.UK classes Gemini uses</summary>
<div class="details-body">
<p>GOV.UK Frontend uses a consistent naming pattern for its CSS classes. A few you will see on this page:</p>
<ul>
<li><code>govuk-grid-row</code> and <code>govuk-grid-column-two-thirds</code> – creates the two-thirds content column</li>
<li><code>govuk-heading-xl</code> – the large page heading style</li>
<li><code>govuk-body</code> – standard paragraph text</li>
<li><code>govuk-list govuk-list--bullet</code> – a bulleted list</li>
<li><code>govuk-button govuk-button--start</code> – the green start button</li>
</ul>
<p>These classes come from the GOV.UK Frontend package that the Prototype Kit installs automatically. You do not need to write any CSS yourself.</p>
</div>
</details>

<nav class="pagination" aria-label="Pagination">
<a href="../overview/" class="pagination__link pagination__link--prev">
<span class="pagination__direction">Previous</span>
<span class="pagination__page-title">What you'll build</span>
</a>
<a href="../create-a-question-page/" class="pagination__link pagination__link--next">
<span class="pagination__direction">Next</span>
<span class="pagination__page-title">Create a question page</span>
</a>
</nav>
