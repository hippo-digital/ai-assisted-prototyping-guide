---
layout: base.njk
title: "Link your pages"
part: "Part 2: Build a prototype"
---

<span class="caption">Part 2: Build a prototype</span>

# Link your pages

You have built all five pages. Right now they are separate – clicking Continue on a form shows an error because nothing is handling the form submission. This step connects everything together so someone can click through the full journey from start to confirmation.

In the Prototype Kit, a file called `app/routes.js` handles page routing. The pattern works like this: each form posts to its own URL, and the router intercepts that submission and decides where to send the user next. This means the form action on each page points back to itself – not to the next page.

For example: the issue-type form posts to `/issue-type`, the router catches that POST and redirects to `/issue-location`, where the user sees the next question.

## Step 1: Check your form actions first

Before adding any routing, it is worth asking Gemini to check that all your pages are set up correctly. A mismatch is the most common reason a journey skips pages or ends up in the wrong place.

```
Check that all the forms and buttons across the pages in app/views are pointing to the correct URLs for this prototype journey. Fix anything that looks wrong and tell me what you changed.
```

Once Gemini confirms everything looks correct, move on to adding the routes.

## Step 2: Add the routes

In Gemini CLI, paste this prompt:

```
Update app/routes.js to connect the pages in the "Report a building issue" prototype so the journey flows in this order:

1. The issue type page submits and goes to the issue location page
2. The issue location page submits and goes to the check answers page
3. The check answers page submits and goes to the confirmation page

Do not remove any existing code.
```

Gemini will show you the changes it wants to make and ask for your permission. Use the **arrow keys** to select **Allow once**, then press **Enter** to confirm.

## Test the full journey

Go to `http://localhost:3000/start` and click "Start now". Check the URL in your browser's address bar at each step – it should follow this exact sequence:

1. `/start` → click "Start now" → should land on `/issue-type`
2. `/issue-type` → select an option, click "Continue" → should land on `/issue-location`
3. `/issue-location` → fill in both fields, click "Continue" → should land on `/check-answers`
4. `/check-answers` → click "Accept and send" → should land on `/confirmation`

<div class="inset-text">
<p><strong>Checkpoint:</strong> Watch the URL bar at each step. Every page in the list above should appear in order, with no pages skipped. If a page is being skipped – for example, going from <code>/issue-type</code> straight to <code>/check-answers</code> – see the troubleshooting below.</p>
</div>

<details>
<summary>A page is being skipped – the journey jumps to the wrong page</summary>
<div class="details-body">
<p>Ask Gemini to check your form pages for common issues that cause pages to be skipped:</p>
<div class="code-block"><code>Check all the HTML files in app/views for anything that might cause form submissions to skip pages. Look for any hidden inputs that should not be there, and check that each form is pointing to the correct URL. Fix anything that looks wrong.</code><button class="code-copy-btn" aria-label="Copy to clipboard">Copy</button></div>
</div>
</details>

<details>
<summary>I still get a "Cannot POST" error on one of the pages</summary>
<div class="details-body">
<p>Check which URL the error shows. For example, if you see <code>Cannot POST /issue-location</code>, it means the POST route for <code>/issue-location</code> is missing or has a typo. Ask Gemini:</p>
<div class="code-block"><code>I am getting a "Cannot POST /issue-location" error. Check app/routes.js and make sure there is a POST route for /issue-location that redirects to /check-answers.</code><button class="code-copy-btn" aria-label="Copy to clipboard">Copy</button></div>
</div>
</details>

<details>
<summary>The routes file looks wrong or the prototype crashed</summary>
<div class="details-body">
<p>If the prototype stopped working after Gemini edited routes.js, it may have introduced a syntax error. Look at the terminal running <code>npm run dev</code> – it will show the error. Ask Gemini:</p>
<div class="code-block"><code>The prototype has stopped working after editing app/routes.js. The terminal shows this error: [paste the error here]. Please fix the routes file.</code><button class="code-copy-btn" aria-label="Copy to clipboard">Copy</button></div>
<p>You can also press <strong>Cmd + Z</strong> (Mac) or <strong>Ctrl + Z</strong> (Windows) in Kiro with routes.js open to undo Gemini's changes, then restart with a more specific prompt.</p>
</div>
</details>

## Understanding routing

<details>
<summary>The difference between GET and POST routes</summary>
<div class="details-body">
<p>A GET request happens when a browser loads a page – like typing a URL in the address bar. A POST request happens when a form is submitted. Your question pages have forms that POST to a URL, and the routes.js POST routes catch those submissions and redirect to the next page.</p>
<p>GET routes display a page. POST routes handle form submissions and redirect the user. Most pages need both.</p>
</div>
</details>

<details>
<summary>Adding branching based on a user's answer</summary>
<div class="details-body">
<p>You can read the submitted form data from <code>req.body</code> inside a POST route. Ask Gemini:</p>
<div class="code-block"><code>Update the POST /issue-type route in app/routes.js so that if the user selects "Something else", they are redirected to /something-else instead of /issue-location. For all other selections, redirect to /issue-location as before.</code><button class="code-copy-btn" aria-label="Copy to clipboard">Copy</button></div>
<p>Gemini will write the conditional logic using an if statement that checks <code>req.body['issue-type']</code>.</p>
</div>
</details>

<details>
<summary>Saving user answers and showing them on check answers</summary>
<div class="details-body">
<p>The Prototype Kit stores form data in the session automatically – any field submitted via a form is available as <code>{{ data['field-name'] }}</code> in your Nunjucks templates. To show the actual user answers on the check answers page, update that page to reference session data:</p>
<div class="code-block"><code>Update app/views/check-answers.html so the summary list shows the actual values from session data: use {{ data['issue-type'] }}, {{ data['issue-floor'] }}, and {{ data['issue-description'] }} instead of the hardcoded placeholder values.</code><button class="code-copy-btn" aria-label="Copy to clipboard">Copy</button></div>
</div>
</details>

<nav class="pagination" aria-label="Pagination">
<a href="../create-a-confirmation-page/" class="pagination__link pagination__link--prev">
<span class="pagination__direction">Previous</span>
<span class="pagination__page-title">Confirmation page</span>
</a>
<a href="../make-it-your-own/" class="pagination__link pagination__link--next">
<span class="pagination__direction">Next</span>
<span class="pagination__page-title">Make it your own</span>
</a>
</nav>
