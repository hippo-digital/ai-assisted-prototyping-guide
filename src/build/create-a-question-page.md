---
layout: base.njk
title: "Create a question page"
part: "Part 2: Build a prototype"
---

<span class="caption">Part 2: Build a prototype</span>

# Create a question page

Most GOV.UK services ask questions one at a time. This pattern – called the question protocol – keeps users focused and reduces errors.

This first question page will ask users what type of building issue they want to report, using radio buttons so they can only pick one answer.

## The prompt

In Gemini CLI, paste this prompt:

```
Create a GOV.UK question page at app/views/issue-type.html.

The page should extend "layouts/main.html".

The page should ask: "What type of issue do you want to report?"

Include:
- A back link at the top pointing to /start using the govuk-back-link class
- A form with method="post" action="/issue-type"
- A fieldset with a legend containing the question as an h1 (use govuk-fieldset__legend--l and govuk-label-wrapper)
- Radio buttons using the govuk-radios component with these options: "Structural problem", "Heating or plumbing", "Damage to communal areas", "Something else"
- Each radio input should have a unique id and name="issue-type"
- A "Continue" button using the govuk-button class

Follow GOV.UK Frontend markup exactly, including the govuk-form-group wrapper and govuk-radios__item divs.
```

Gemini will ask permission to create the file. Type **yes**.

## Check your browser

Go to `http://localhost:3000/issue-type`.

<div class="inset-text">
<p><strong>Checkpoint:</strong> You should see a GOV.UK page with a back link at the top, the question as the main heading, four radio button options, and a blue "Continue" button. The radios should be stacked vertically with labels that are not bold.</p>
</div>

<details>
<summary>The radio button labels are bold</summary>
<div class="details-body">
<p>This is a common error. GOV.UK radio labels should use the <code>govuk-label</code> class but not <code>govuk-label--m</code> or <code>govuk-label--s</code> inside a fieldset. Ask Gemini to fix it:</p>
<div class="code-block"><code>The radio button labels on app/views/issue-type.html are bold. They should use the govuk-label class only, without any size modifier. Please fix the label markup.</code></div>
</div>
</details>

<details>
<summary>The question is not the page's h1</summary>
<div class="details-body">
<p>On GOV.UK, question pages should have exactly one h1, which should be the question itself – wrapped inside the fieldset legend. Ask Gemini:</p>
<div class="code-block"><code>On app/views/issue-type.html, the question heading should be an h1 inside the fieldset legend. Use the pattern: &lt;legend class="govuk-fieldset__legend govuk-fieldset__legend--l"&gt;&lt;h1 class="govuk-fieldset__heading"&gt;What type of issue do you want to report?&lt;/h1&gt;&lt;/legend&gt;</code></div>
</div>
</details>

<details>
<summary>The form does not do anything when I click Continue</summary>
<div class="details-body">
<p>That is expected at this stage – you have not set up routing yet. Clicking Continue will show a "Cannot POST /issue-location" error. You will fix this in the "Link your pages" section later.</p>
</div>
</details>

## Understanding what Gemini built

<details>
<summary>Why the question sits inside a fieldset</summary>
<div class="details-body">
<p>When a group of radio buttons or checkboxes all relate to the same question, they should be wrapped in a <code>&lt;fieldset&gt;</code> element. The <code>&lt;legend&gt;</code> acts as a label for the whole group. Screen readers announce the legend text before each option, so users always know which question the options belong to.</p>
<p>GOV.UK design pattern: always use a fieldset and legend for radio button and checkbox groups. Never just use a standalone heading above the inputs.</p>
</div>
</details>

<details>
<summary>Why the form posts to its own URL</summary>
<div class="details-body">
<p>The <code>action</code> attribute on the form tells the browser where to send the data when the user submits it. Setting it to <code>/issue-location</code> means clicking Continue will attempt to go to that URL. The Prototype Kit's routing system (in <code>app/routes.js</code>) intercepts these form submissions and decides where to send the user next. You will set that up in the linking pages step.</p>
</div>
</details>

<details>
<summary>Adding a "None of these" option with a divider</summary>
<div class="details-body">
<p>The GOV.UK Design System has a pattern for separating a "none" option from the main list using a divider. Ask Gemini:</p>
<div class="code-block"><code>Add an "or" divider and a "None of these" option at the bottom of the radio group on app/views/issue-type.html, following the GOV.UK radios with divider pattern.</code></div>
</div>
</details>

<nav class="pagination" aria-label="Pagination">
<a href="../create-a-start-page/" class="pagination__link pagination__link--prev">
<span class="pagination__direction">Previous</span>
<span class="pagination__page-title">Create a start page</span>
</a>
<a href="../create-a-second-question/" class="pagination__link pagination__link--next">
<span class="pagination__direction">Next</span>
<span class="pagination__page-title">A second question page</span>
</a>
</nav>
