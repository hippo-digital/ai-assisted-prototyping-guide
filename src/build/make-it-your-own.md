---
layout: base.njk
title: "Make it your own"
part: "Part 2: Build a prototype"
---

<span class="caption">Part 2: Build a prototype</span>

# Make it your own

You have built a working 5-page GOV.UK prototype using only plain English prompts. The skills you have used here – writing clear prompts, checking output, and iterating – apply to any project.

This page gives you prompts to take the prototype further, adapt it to your own service, and go deeper with Gemini CLI.

Work through the sections below in order. Get everything working with the "Report a building issue" content first, then swap in your own service content at the end — that way each prompt runs against the known prototype and the results are predictable.

## Add another question

Real services often need more information. Try adding a page that asks for contact details. Run these two prompts in order:

First, create the page:

```
Create a new GOV.UK question page that asks for the user's contact details. The page should have the heading "Your contact details" and include two fields: one for their full name, and one for their email address with the hint text "We'll only use this to contact you about your report". Include a back link to the previous page and a Continue button. Follow GOV.UK Frontend patterns throughout.
```

Then add it to the journey:

```
Update the prototype journey so the contact details page sits between the issue location page and the check answers page.
```

<div class="inset-text">
<p>If you add the contact details page, also run the updated prompts below for error handling, session data, and change mode – each one includes contact details as well as the other question pages.</p>
</div>

## Add error handling

A prototype that shows error states is more useful for research – it lets you test how users respond to mistakes. This prompt adds validation to all pages that require user input. If you have added the contact details page, it covers that too:

```
Add error handling to the "Report a building issue" prototype so that users see a clear error message if they try to continue without completing a required field. The validation must happen in the browser — the page should not submit if required fields are empty.

On the issue type page: if the user clicks Continue without selecting a radio button, stop the form from submitting and show an error on that same page. Do not redirect to another page.

On the issue location page: if the user clicks Continue with either field left empty, stop the form from submitting and show an error for each empty field on that same page.

If there is a contact details page: if the user clicks Continue with either field left empty, stop the form from submitting and show an error for each empty field on that same page.

Use the GOV.UK error message pattern throughout: show an error summary at the top of the page listing all the errors, and show an inline error message next to each field that has a problem. Error messages for radio buttons should start with "Select". Error messages for empty text fields should start with "Enter".
```

## Show session data on the check answers page

Make the check answers page show what the user actually entered, rather than hardcoded placeholder values. If you have added the contact details page, include those fields too:

```
Update the check answers page at app/views/check-answers.html so that the summary list shows the actual answers the user entered during the journey, rather than the hardcoded placeholder text currently in the page.

If you have added a contact details page, also add two new rows to the summary list for full name and email address, with Change links that go back to the contact details page.
```

## Return to check answers after making a change

At the moment, if a user clicks "Change" on the check answers page and updates their answer, they are sent back through the full journey rather than straight back to check answers. This prompt fixes that. If you have added the contact details page, it covers that too:

```
Update the prototype so that when a user clicks a "Change" link on the check answers page and updates their answer, they are taken straight back to the check answers page rather than continuing through the rest of the journey.

When a user arrives at a question page via a Change link, pre-fill the form fields with whatever they entered previously, so they can see and edit their existing answer rather than starting from a blank form.

If the user changes their type of issue, take them through the issue location page first before returning to check answers, in case they also need to update their location or description.

If the user changes their location, description, or contact details, take them straight back to check answers after they submit the updated answer.

Do not remove any existing routes.
```

### Create a GEMINI.md file for standing instructions

You can give Gemini a set of standing instructions so you do not have to repeat them every time. Create a file called `GEMINI.md` in your project root and Gemini will read it at the start of every session.

```
Create a file called GEMINI.md in the project root with the following content:

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
- Content must be in plain English, sentence case, no jargon
```

After creating this file, Gemini will apply these rules automatically to every prompt in that project.

### Ask Gemini to explain what it built

If you want to understand what was built, ask Gemini to explain it. This is a good way to build your knowledge gradually:

```
Explain the HTML you just wrote for the check answers page. What does each GOV.UK class do, and why is the summary list structured the way it is?
```

### Use Gemini to review your work

Gemini can review your prototype against GOV.UK standards and flag things worth discussing with your team before you move into build:

```
Review all the pages in app/views and give me feedback in three areas:

1. GOV.UK Design System compliance — check for correct heading hierarchy, proper use of fieldsets for radio groups, presence of back links on all question pages, correct button classes, and any accessibility issues you can identify.

2. Content design — check the page content against GOV.UK service manual guidance. Flag any language that is not plain English, any labels or hint text that could be clearer, any error messages that do not follow the recommended pattern, and anything that does not match the GOV.UK style guide.

3. Engineering considerations — identify anything in the prototype that an engineer would need to think about before building this for real. For example: any validation that is only handled client-side and would need server-side equivalents, any session data assumptions, any routing logic that could break under edge cases, and any patterns that may need discussion before they are implemented.

Present the findings as a list under each heading so they are easy to share with a delivery team.
```

## Create a prototype index page

As a service evolves, you will build multiple versions of your prototype — each one tested, refined, and iterated on. An index page gives your team a single place to see every version, understand what changed and why, and launch the right prototype for a research session.

Run this prompt to create one:

```
Create or update the index.html page in app/views so it works as a prototype index — a page that lists versions of the prototype with key information about each one.

Use the following dummy content for three versions:

Version 3 — progress: In research
Description: Simplified the issue type question into two steps based on round 2 findings. Removed the "Something else" option after it caused confusion in 4 out of 6 sessions.
Research: Link to Maze report (use # as the href)
Analytics: Link to GA4 dashboard (use # as the href)
Launch button: links to /start

Version 2 — progress: Research complete
Description: Added a contact details page and moved confirmation reference number above the fold. Tested with 6 participants in round 2.
Research: Link to Maze report (use # as the href)
Analytics: Link to GA4 dashboard (use # as the href)
Launch button: links to /start

Version 1 — progress: Research complete
Description: First prototype of the end-to-end journey. Covered issue type, location, check answers, and confirmation. Tested with 5 participants in round 1.
Research: Link to Maze report (use # as the href)
Analytics: not available
Launch button: links to /start

Show the most recent version first. Use GOV.UK Frontend components and classes throughout — tags for the progress state, a summary list or card layout for the details, and a button for the launch link. Do not write custom CSS.
```

<hr class="section-break section-break--thick">

## You've finished the guide

You now have a working GOV.UK prototype and a workflow you can apply to any project. The prompts in this guide are yours to adapt – change the content, the questions, the service name, and the journey structure to fit whatever you are designing.

Share what you build with the Design Community of Practice. If you find prompts that work particularly well, or patterns that Gemini consistently gets wrong, document them for the rest of the community.

<div class="inset-text">
<p>Questions or feedback on this guide? Reach out to <strong>Suly Khan</strong> on Slack.</p>
</div>

<nav class="pagination" aria-label="Pagination">
<a href="../link-your-pages/" class="pagination__link pagination__link--prev">
<span class="pagination__direction">Previous</span>
<span class="pagination__page-title">Link your pages</span>
</a>
</nav>
