---
layout: base.njk
title: "A second question page"
part: "Part 2: Build a prototype"
---

<span class="caption">Part 2: Build a prototype</span>

# A second question page

This page asks users to describe where in the building the issue is. Instead of radio buttons, you will use a text input and a textarea – two of the most common GOV.UK form components.

## The prompt

In Gemini CLI, paste this prompt:

```
Create a GOV.UK question page at app/views/issue-location.html.

The page should extend "layouts/main.html".

Include:
- A back link at the top pointing to /issue-type using the govuk-back-link class
- A form with method="post" action="/issue-location"
- An h1 heading: "Where is the issue?"
- A text input asking for the floor or area (label: "Floor or area", hint text: "For example, 2nd floor, reception, car park", input name="issue-floor", id="issue-floor")
- A textarea asking for a description (label: "Describe the issue", hint text: "Include as much detail as you can", textarea name="issue-description", id="issue-description", rows="5")
- A "Continue" button using the govuk-button class

Each input should be wrapped in a govuk-form-group div. Use govuk-input for the text input and govuk-textarea for the textarea. Include govuk-hint for the hint text and govuk-label for each label.
```

Type **yes** when Gemini asks permission to create the file.

<div class="warning-text">
<span class="warning-text__icon" aria-hidden="true">!</span>
<p>Check that Gemini has not added a hidden CSRF input to the form. If you see the line <code>&lt;input type="hidden" name="_csrf" value="{{ csrfToken }}"&gt;</code> in the file, ask Gemini to remove it. The Prototype Kit does not use CSRF tokens and this line will cause form submissions to skip pages silently.</p>
</div>

## Check your browser

Go to `http://localhost:3000/issue-location`.

<div class="inset-text">
<p><strong>Checkpoint:</strong> You should see a back link, the heading "Where is the issue?", a text input with hint text for the floor or area, a larger textarea with hint text for the description, and a "Continue" button. The labels should be above their inputs, in the GOV.UK style.</p>
</div>

<details>
<summary>There is no hint text visible</summary>
<div class="details-body">
<p>Hint text in GOV.UK Frontend uses the <code>govuk-hint</code> class and must be placed between the label and the input, not after. Ask Gemini:</p>
<div class="code-block"><code>On app/views/issue-location.html, the hint text is not showing. Make sure each hint uses the govuk-hint class and is placed between the label and the input inside the govuk-form-group.</code></div>
</div>
</details>

<details>
<summary>The textarea is too small or too large</summary>
<div class="details-body">
<p>The <code>rows</code> attribute on a textarea controls its height. You can ask Gemini to adjust it:</p>
<div class="code-block"><code>Update the textarea on app/views/issue-location.html to have rows="8" to give users more space to write.</code></div>
</div>
</details>

## Understanding what Gemini built

<details>
<summary>Why each input has a govuk-form-group wrapper</summary>
<div class="details-body">
<p>The <code>govuk-form-group</code> wrapper is required by GOV.UK Frontend for all form fields. It serves two purposes: it keeps the label, hint, and input visually grouped, and it is also used to show error states. When a field has a validation error, the class <code>govuk-form-group--error</code> is added to this wrapper, which adds the red left border that signals a problem to the user.</p>
</div>
</details>

<details>
<summary>Adding validation so fields cannot be left empty</summary>
<div class="details-body">
<p>Validation in the Prototype Kit is handled in <code>app/routes.js</code> – the server checks the form data before deciding where to send the user. Ask Gemini to handle this after you have set up routing:</p>
<div class="code-block"><code>In app/routes.js, add validation for the /issue-location form. If either the issue-floor or issue-description fields are empty, redirect back to /issue-location and show an error message on the relevant field using GOV.UK error message markup.</code></div>
<p>This is an advanced step – the basic prototype works fine without it.</p>
</div>
</details>

<details>
<summary>Text inputs and textareas compared</summary>
<div class="details-body">
<p>A text input (<code>&lt;input type="text"&gt;</code>) is for short, single-line answers – like a name, reference number, or postcode. A textarea is for longer, multi-line answers where users might write several sentences. The GOV.UK Design System guidance is clear: use a textarea when you expect longer answers, and set the <code>rows</code> attribute to give users a visual sense of how much to write.</p>
</div>
</details>

<nav class="pagination" aria-label="Pagination">
<a href="../create-a-question-page/" class="pagination__link pagination__link--prev">
<span class="pagination__direction">Previous</span>
<span class="pagination__page-title">Create a question page</span>
</a>
<a href="../create-a-check-answers-page/" class="pagination__link pagination__link--next">
<span class="pagination__direction">Next</span>
<span class="pagination__page-title">Check answers page</span>
</a>
</nav>
