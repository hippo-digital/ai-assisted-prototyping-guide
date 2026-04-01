---
layout: base.njk
title: "Check everything works"
part: "Part 1: Get set up"
---

<span class="caption">Part 1: Get set up</span>
 <h1>Check everything works</h1>

 <p>Before you start building, let us confirm that all your tools are working together.</p>
 <p>You should have 2 terminals open in VS Code:</p>
 <ul>
 <li><strong>Terminal 1:</strong> running your prototype (<code>npm run dev</code>)</li>
 <li><strong>Terminal 2:</strong> running Gemini CLI (<code>npx @google/gemini-cli</code>)</li>
 </ul>
 <p>And your prototype should be visible in a browser at <code>http://localhost:3000</code>.</p>

 <h2>The final test</h2>
 <p>Let us ask Gemini CLI to make a small change and check it appears in the browser.</p>
 <p>In Gemini CLI (Terminal 2), type:</p>
 <div class="code-block"><code>Change the service name in this prototype to "Report a building issue". The config file is at app/config.json — update the serviceName field.</code></div>
 <p>Gemini will ask permission to edit the file. Type <strong>yes</strong>.</p>
 <p>Now go to your browser and refresh the page at <code>http://localhost:3000</code>.</p>

 <div class="inset-text">
 <p><strong>Checkpoint:</strong> You should see "Report a building issue" in the header of your prototype. If you do, everything is working – Gemini CLI can edit your prototype files, and the changes show up in the browser.</p>
 </div>

 <details>
 <summary>The service name did not change</summary>
 <div class="details-body">
 <ul>
 <li>Check that Gemini confirmed the edit. If it asked permission and you said yes, it should have confirmed the change.</li>
 <li>Try a hard refresh: <strong>Cmd + Shift + R</strong> (Mac) or <strong>Ctrl + Shift + R</strong> (Windows).</li>
 <li>Check manually: open <code>app/config.json</code> in VS Code and look at the <code>serviceName</code> value.</li>
 <li>Make sure your prototype is still running in Terminal 1.</li>
 </ul>
 </div>
 </details>

 <h2>Your setup at a glance</h2>

 <table>
 <thead>
 <tr>
 <th>Tool</th>
 <th>How to check it is working</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>VS Code</td>
 <td>You can see your project files in the sidebar</td>
 </tr>
 <tr>
 <td>Node.js</td>
 <td><code>node --version</code> shows v20 or higher</td>
 </tr>
 <tr>
 <td>Prototype Kit</td>
 <td>Your prototype loads at <code>http://localhost:3000</code></td>
 </tr>
 <tr>
 <td>Gemini CLI</td>
 <td>You can type prompts and Gemini responds</td>
 </tr>
 </tbody>
 </table>

 <h2>Tips for working with Gemini CLI</h2>

 <h3>Always check what Gemini produces</h3>
 <p>Gemini is very good at writing code, but it does not always get things right first time. After each prompt, refresh your browser to see the result. If something looks wrong, tell Gemini what to fix in plain English.</p>

 <h3>Be specific in your prompts</h3>
 <p>The more detail you give, the better the result. Instead of "make a page", try "create a question page that asks the user what type of building issue they want to report, with radio buttons for 'Broken window', 'Heating not working', 'Water leak', and 'Something else'".</p>

 <h3>You can undo any change</h3>
 <p>Press <strong>Ctrl + Z</strong> (or <strong>Cmd + Z</strong> on Mac) in the affected file to undo. You can also ask Gemini to revert the change.</p>

 <h3>Refer to the GOV.UK Design System</h3>
 <p>Reference specific components from the <a href="https://design-system.service.gov.uk/" target="_blank" rel="noopener noreferrer">GOV.UK Design System</a> in your prompts. For example, "use the radios component" or "add a back link". This helps Gemini produce the right markup.</p>

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

 <h2>You are ready to build</h2>
 <p>You have all the tools installed and working. In part 2, you will use Gemini CLI to build a complete 5-page prototype for a fictional 'Report a building issue' service.</p>

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