---
layout: base.njk
title: "Make it your own"
part: "Part 2: Build a prototype"
---

<span class="caption">Part 2: Build a prototype</span>
 <h1>Make it your own</h1>

 <p>You have built a working 5-page GOV.UK prototype using only plain English prompts. The skills you have used here – writing clear prompts, checking output, and iterating – apply to any project.</p>

 <p>This page gives you prompts to take the prototype further, adapt it to your own service, and go deeper with Gemini CLI.</p>

 <h2>Change the service content</h2>

 <p>The quickest way to adapt this prototype to your own work is to change the service name, questions, and answers. Describe what you want in plain English:</p>

 <div class="code-block"><code>Rename the service throughout the prototype from "Report a building issue" to "Request a parking permit". Update the start page heading, the service name in the config, and all page titles accordingly.</code></div>

 <div class="code-block"><code>Replace the radio button options on app/views/issue-type.html with: "Resident permit", "Visitor permit", "Business permit", "Disabled bay permit".</code></div>

 <h2>Add another question</h2>

 <p>Real services often need more information. Try adding a page that asks for contact details. Run these two prompts in order:</p>

 <p>First, create the page:</p>

 <div class="code-block"><code>Create a new question page at app/views/contact-details.html.

The page should extend "layouts/main.html".

Include:
- A back link pointing to /issue-location using the govuk-back-link class
- A form with method="post" action="/contact-details"
- An h1 heading: "Your contact details"
- A text input for full name (label: "Full name", name="full-name", id="full-name")
- An email input for email address (label: "Email address", hint: "We'll only use this to contact you about your report", name="email-address", id="email-address", type="email")
- A "Continue" button using the govuk-button class

Wrap each input in a govuk-form-group div. Use govuk-input for both inputs. Include govuk-hint for the hint text.</code></div>

 <p>Then add it to the journey:</p>

 <div class="code-block"><code>Update app/routes.js to insert /contact-details between /issue-location and /check-answers.

Change the POST /issue-location route to redirect to /contact-details instead of /check-answers.

Add a new POST route for /contact-details that redirects to /check-answers.</code></div>

 <div class="inset-text">
 <p>If you add the contact details page, also run the updated prompts below for error handling, session data, and change mode – each one includes contact details as well as the other question pages.</p>
 </div>

 <h2>Add error handling</h2>

 <p>A prototype that shows error states is more useful for research – it lets you test how users respond to mistakes. This prompt adds validation to all pages that require user input. If you have added the contact details page, it covers that too:</p>

 <div class="code-block"><code>Add validation to the "Report a building issue" prototype for all pages that require user input.

For app/routes.js, update the POST routes as follows:

POST /issue-type: if no radio button is selected (req.body['issue-type'] is empty), redirect back to /issue-type with an error. Otherwise redirect to /issue-location as normal.

POST /issue-location: if either the issue-floor or issue-description fields are empty, redirect back to /issue-location with errors for each empty field. Otherwise redirect to the next page as normal.

POST /contact-details (if you have added this page): if either the full-name or email-address fields are empty, redirect back to /contact-details with errors for each empty field. Otherwise redirect to /check-answers.

Pass errors back to the page using the session: req.session.errors = { fieldName: 'Error message' } before redirecting.

For each HTML page, update the template to conditionally show errors when they are present:

On app/views/issue-type.html:
- Show a govuk-error-summary at the top of the content block if an error is present
- Add govuk-form-group--error to the form group wrapper
- Add a govuk-error-message element between the fieldset legend and the radios

On app/views/issue-location.html:
- Show a govuk-error-summary at the top of the content block if any errors are present
- For each field with an error, add govuk-form-group--error to its wrapper and a govuk-error-message below its label

On app/views/contact-details.html (if it exists):
- Show a govuk-error-summary at the top of the content block if any errors are present
- For each field with an error, add govuk-form-group--error to its wrapper and a govuk-error-message below its label

Follow GOV.UK Frontend error patterns exactly. Error messages should start with "Select" for radio buttons and "Enter" for text inputs.</code></div>

 <h2>Show session data on the check answers page</h2>

 <p>Make the check answers page show what the user actually entered, rather than hardcoded values. If you have added the contact details page, include those fields too:</p>

 <div class="code-block"><code>Update app/views/check-answers.html to show the real values from session data.

Replace the hardcoded answers with these session values in the summary list:
- Type of issue: {{ data['issue-type'] }}
- Floor or area: {{ data['issue-floor'] }}
- Description: {{ data['issue-description'] }}

If you have added a contact details page, also add two new rows to the summary list:
- Full name: {{ data['full-name'] }}, with a Change link to /contact-details?change=true
- Email address: {{ data['email-address'] }}, with a Change link to /contact-details?change=true</code></div>

 <h2>Return to check answers after making a change</h2>

 <p>At the moment, if a user clicks "Change" on the check answers page and updates their answer, they are sent back through the full journey rather than straight back to check answers. This prompt fixes that. If you have added the contact details page, it covers that too:</p>

 <p>Note that changing the type of issue is handled differently – because the location and description may need updating too if the issue type changes, the user is routed through the location page before returning to check answers. Changing location or contact details returns directly to check answers.</p>

 <div class="code-block"><code>Implement a "change mode" pattern so that when a user clicks a Change link on the check answers page, they return to check answers after updating their answer.

Step 1 — Update app/views/check-answers.html:
Add ?change=true to each Change link href. For example:
&lt;a href="/issue-type?change=true"&gt;Change&lt;span class="govuk-visually-hidden"&gt; type of issue&lt;/span&gt;&lt;/a&gt;
&lt;a href="/issue-location?change=true"&gt;Change&lt;span class="govuk-visually-hidden"&gt; floor or area&lt;/span&gt;&lt;/a&gt;

Step 2 — Update app/routes.js with GET and POST routes for each question page.

For /issue-type, changing the issue type should route through /issue-location first so the user can update their location and description if needed, before returning to check answers. Use a separate session flag for this:

router.get('/issue-type', function(req, res) {
  if (req.query.change) {
    req.session.data['changeViaLocation'] = true
  }
  res.render('issue-type')
})

router.post('/issue-type', function(req, res) {
  if (req.session.data['changeViaLocation']) {
    res.redirect('/issue-location')
  } else {
    res.redirect('/issue-location')
  }
})

For /issue-location, if the user arrived via a change to issue-type, clear the flag and redirect to check-answers after. If they arrived directly from the check answers Change link, also redirect to check-answers:

router.get('/issue-location', function(req, res) {
  if (req.query.change) {
    req.session.data['change'] = true
  }
  res.render('issue-location')
})

router.post('/issue-location', function(req, res) {
  if (req.session.data['changeViaLocation']) {
    req.session.data['changeViaLocation'] = false
    res.redirect('/check-answers')
  } else if (req.session.data['change']) {
    req.session.data['change'] = false
    res.redirect('/check-answers')
  } else {
    res.redirect('/check-answers')
  }
})

If you have added a contact details page, apply the standard direct-return pattern for /contact-details:

router.get('/contact-details', function(req, res) {
  if (req.query.change) {
    req.session.data['change'] = true
  }
  res.render('contact-details')
})

router.post('/contact-details', function(req, res) {
  if (req.session.data['change']) {
    req.session.data['change'] = false
    res.redirect('/check-answers')
  } else {
    res.redirect('/check-answers')
  }
})

Do not remove the existing POST routes — replace them with these updated versions.</code></div>

 <h3>Create a GEMINI.md file for standing instructions</h3>

 <p>You can give Gemini a set of standing instructions so you do not have to repeat them every time. Create a file called <code>GEMINI.md</code> in your project root and Gemini will read it at the start of every session.</p>

 <div class="code-block"><code>Create a file called GEMINI.md in the project root with the following content:

# Project conventions

This is a GOV.UK Prototype Kit project for a service called "Report a building issue".

## Rules
- All pages must extend "layouts/main.html"
- Use GOV.UK Frontend classes throughout — do not write custom CSS
- Follow the one-thing-per-page pattern: each page asks one question only
- Labels should be above their inputs, never inline
- Radio and checkbox labels should not be bold
- All form pages must have a back link and a Continue button
- Error messages must follow the GOV.UK error message pattern
- Content must be in plain English, sentence case, no jargon</code></div>

 <p>After creating this file, Gemini will apply these rules automatically to every prompt in that project.</p>

 <h3>Ask Gemini to explain what it built</h3>

 <p>If you want to understand what was built, ask Gemini to explain it. This is a good way to build your knowledge gradually:</p>

 <div class="code-block"><code>Explain the HTML you just wrote for the check answers page. What does each GOV.UK class do, and why is the summary list structured the way it is?</code></div>

 <h3>Use Gemini to review your work</h3>

 <p>Gemini can critique its own output against GOV.UK standards:</p>

 <div class="code-block"><code>Review all the pages in app/views for GOV.UK Design System compliance. Check for: correct heading hierarchy, proper use of fieldsets for radio groups, presence of back links on all question pages, correct button classes, and any accessibility issues you can identify.</code></div>

 <hr class="section-break section-break--thick">

 <h2>You've finished the guide</h2>

 <p>You now have a working GOV.UK prototype and a workflow you can apply to any project. The prompts in this guide are yours to adapt – change the content, the questions, the service name, and the journey structure to fit whatever you are designing.</p>

 <p>Share what you build with the Design Community of Practice. If you find prompts that work particularly well, or patterns that Gemini consistently gets wrong, document them for the rest of the community.</p>

 <div class="inset-text">
 <p>Questions or feedback on this guide? Reach out to <strong>Suly Khan</strong> on Slack.</p>
 </div>

 <nav class="pagination" aria-label="Pagination">
 <a href="link-your-pages.html" class="pagination__link pagination__link--prev">
 <span class="pagination__direction">Previous</span>
 <span class="pagination__page-title">Link your pages</span>
 </a>
 </nav>