---
layout: base.njk
title: "Confirmation page"
part: "Part 2: Build a prototype"
---

<span class="caption">Part 2: Build a prototype</span>
 <h1>Confirmation page</h1>

 <p>The confirmation page is the last page in the journey. It tells users their report has been submitted and gives them any information they need about what happens next.</p>

 <p>GOV.UK confirmation pages use a green panel – the <a href="https://design-system.service.gov.uk/components/panel/" target="_blank" rel="noopener noreferrer">panel component</a> – with a success heading and a reference number. This gives users clear reassurance that something has happened.</p>

 <h2>The prompt</h2>

 <p>In Gemini CLI, paste this prompt:</p>

 <div class="code-block"><code>Create a GOV.UK confirmation page at app/views/confirmation.html.

The page should extend "layouts/main.html".

Include:
- A confirmation panel using the govuk-panel component with:
  Panel title (h1): "Report submitted"
  Panel body text: "Your reference number" followed by a line break and the reference number "RBI-2024-00842" in bold
- Below the panel, a heading: "What happens next"
- A paragraph: "We have sent your report to the facilities team. They aim to respond within 5 working days."
- A paragraph: "We will contact you by email if we need more information."
- A paragraph with a link: "What did you think of this service? (takes 30 seconds)" — link href="/feedback"
- A paragraph with a link back to start: "Report another building issue" — link href="/start"

Use govuk-panel, govuk-panel__title, govuk-panel__body classes. Use govuk-heading-m for the "What happens next" heading. Use govuk-body for paragraphs and govuk-link for links.</code></div>

 <p>Type <strong>yes</strong> when prompted.</p>

 <h2>Check your browser</h2>

 <p>Go to <code>http://localhost:3000/confirmation</code>.</p>

 <div class="inset-text">
 <p><strong>Checkpoint:</strong> You should see a large green panel with white text saying "Report submitted" and a reference number below it. Beneath the panel, a "What happens next" heading followed by two paragraphs, and links to a feedback page and back to the start.</p>
 </div>

 <details>
 <summary>The panel is not green</summary>
 <div class="details-body">
 <p>The green panel comes from the <code>govuk-panel--confirmation</code> class in addition to <code>govuk-panel</code>. Ask Gemini:</p>
 <div class="code-block"><code>The confirmation panel on app/views/confirmation.html is not green. Make sure the panel div has both the govuk-panel and govuk-panel--confirmation classes.</code></div>
 </div>
 </details>

 <details>
 <summary>The reference number is not on its own line</summary>
 <div class="details-body">
 <p>The panel body should include a line break between the label text and the reference number. Ask Gemini:</p>
 <div class="code-block"><code>On the confirmation panel in app/views/confirmation.html, put the reference number on a new line below "Your reference number", with the number in bold. Use a &lt;br&gt; and &lt;strong&gt; tags inside the govuk-panel__body element.</code></div>
 </div>
 </details>

 <h2>Understanding what Gemini built</h2>

 <details>
 <summary>Why the confirmation page has no back link</summary>
 <div class="details-body">
 <p>The GOV.UK Design System guidance is clear: do not put a back link on a confirmation page. Once a user has submitted a form, going back would be confusing – they cannot un-submit. Instead, give them useful next steps: what to expect, how to find out more, and how to start again if needed.</p>
 </div>
 </details>

 <details>
 <summary>Why there is a feedback link</summary>
 <div class="details-body">
 <p>The confirmation page is the natural place for a feedback link because users have just completed the service. GDS guidance recommends collecting feedback at this point. In a real service the link would go to a short survey. In your prototype, the link can go anywhere – even back to the start page – since the feedback page does not need to exist for testing purposes.</p>
 </div>
 </details>

 <details>
 <summary>Reference numbers in real services</summary>
 <div class="details-body">
 <p>Reference numbers should be easy to read, write down, and speak aloud over the phone. Best practice is to use a short alphanumeric format with hyphens to break it up – like <code>RBI-2024-00842</code>. Avoid numbers that could be confused for letters (like 0 and O, or 1 and I). In a real service, the backend system generates the reference number and passes it into the page dynamically.</p>
 </div>
 </details>

 <nav class="pagination" aria-label="Pagination">
 <a href="create-a-check-answers-page.html" class="pagination__link pagination__link--prev">
 <span class="pagination__direction">Previous</span>
 <span class="pagination__page-title">Check answers page</span>
 </a>
 <a href="link-your-pages.html" class="pagination__link pagination__link--next">
 <span class="pagination__direction">Next</span>
 <span class="pagination__page-title">Link your pages</span>
 </a>
 </nav>