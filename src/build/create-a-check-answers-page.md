---
layout: base.njk
title: "Check answers page"
part: "Part 2: Build a prototype"
---

<span class="caption">Part 2: Build a prototype</span>
 <h1>Check answers page</h1>

 <p>Before submitting, users should be able to review everything they have entered and change anything that is wrong. This is one of the most important patterns in GOV.UK service design – it prevents errors and builds user confidence.</p>

 <p>The GOV.UK Design System calls this the <a href="https://design-system.service.gov.uk/patterns/check-answers/" target="_blank" rel="noopener noreferrer">check answers pattern</a>. It uses a summary list component to show each question and answer with a "Change" link next to each one.</p>

 <h2>The prompt</h2>

 <p>In Gemini CLI, paste this prompt:</p>

 <div class="code-block"><code>Create a GOV.UK check answers page at app/views/check-answers.html.

The page should extend "layouts/main.html".

Include:
- An h1 heading: "Check your answers"
- A summary list using the govuk-summary-list component with these rows:
  Row 1: key "Type of issue", value "Structural problem", change link href="/issue-type" with visually hidden text "type of issue"
  Row 2: key "Floor or area", value "2nd floor", change link href="/issue-location" with visually hidden text "floor or area"
  Row 3: key "Description", value "There is a large crack in the exterior wall near the fire exit on the east side of the building.", change link href="/issue-location" with visually hidden text "description"
- A heading below the summary list: "Now send your report"
- A paragraph: "By submitting this report you confirm the details are correct to the best of your knowledge."
- A form with method="post" action="/check-answers" containing a "Accept and send" button using govuk-button

Use the full govuk-summary-list markup including govuk-summary-list__row, govuk-summary-list__key, govuk-summary-list__value, and govuk-summary-list__actions. The change links should use govuk-link class and include a &lt;span class="govuk-visually-hidden"&gt; for screen reader context.</code></div>

 <p>Type <strong>yes</strong> when prompted.</p>

 <h2>Check your browser</h2>

 <p>Go to <code>http://localhost:3000/check-answers</code>.</p>

 <div class="inset-text">
 <p><strong>Checkpoint:</strong> You should see the heading "Check your answers", followed by a summary list showing three rows – each with a label on the left, the answer in the middle, and a "Change" link on the right. Below that, a paragraph and an "Accept and send" button.</p>
 </div>

 <details>
 <summary>The summary list rows do not have a bottom border between them</summary>
 <div class="details-body">
 <p>The govuk-summary-list component adds borders automatically via CSS. If borders are missing, it may mean the GOV.UK Frontend stylesheet is not loading correctly, or the class names are wrong. Ask Gemini:</p>
 <div class="code-block"><code>The summary list on app/views/check-answers.html is missing its row borders. Check that the govuk-summary-list, govuk-summary-list__row, govuk-summary-list__key, govuk-summary-list__value, and govuk-summary-list__actions classes are all present and correct.</code></div>
 </div>
 </details>

 <details>
 <summary>The "Change" links are not accessible</summary>
 <div class="details-body">
 <p>A "Change" link on its own is ambiguous for screen reader users – they cannot tell what they are changing. The GOV.UK pattern uses visually hidden text to add context. Each change link should look like this:</p>
 <div class="code-block"><code>&lt;a href="/issue-type" class="govuk-link"&gt;Change&lt;span class="govuk-visually-hidden"&gt; type of issue&lt;/span&gt;&lt;/a&gt;</code></div>
 <p>Sighted users see "Change". Screen reader users hear "Change type of issue". Ask Gemini to check all change links follow this pattern.</p>
 </div>
 </details>

 <h2>Understanding what Gemini built</h2>

 <details>
 <summary>Why the answers are hardcoded</summary>
 <div class="details-body">
 <p>In this prototype, the check answers page shows hardcoded answers – they are written directly into the HTML. A real service would pull the user's actual answers from the session (the server-side store of what the user entered). The Prototype Kit can do this using session data, but for a basic prototype the hardcoded values are enough to test the layout and flow with users.</p>
 <p>If you want dynamic values from your form inputs, ask Gemini: <em>"Update app/views/check-answers.html to show the values from the session data, using {{ data['issue-type'] }}, {{ data['issue-floor'] }}, and {{ data['issue-description'] }}."</em></p>
 </div>
 </details>

 <details>
 <summary>What govuk-visually-hidden does</summary>
 <div class="details-body">
 <p>The <code>govuk-visually-hidden</code> class hides text from sighted users but keeps it readable for screen readers. It uses a CSS technique that moves the element off-screen without using <code>display: none</code> (which would hide it from screen readers too). It is used whenever you need to add context that is already visually implied on screen – like change links, or icons that only make sense with a text label.</p>
 </div>
 </details>

 <nav class="pagination" aria-label="Pagination">
 <a href="create-a-second-question.html" class="pagination__link pagination__link--prev">
 <span class="pagination__direction">Previous</span>
 <span class="pagination__page-title">A second question page</span>
 </a>
 <a href="create-a-confirmation-page.html" class="pagination__link pagination__link--next">
 <span class="pagination__direction">Next</span>
 <span class="pagination__page-title">Confirmation page</span>
 </a>
 </nav>