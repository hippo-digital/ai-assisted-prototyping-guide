---
layout: base.njk
title: "Install Node.js"
part: "Part 1: Get set up"
---

<span class="caption">Part 1: Get set up</span>
 <h1>Install Node.js</h1>

 <p>Node.js powers both the GOV.UK Prototype Kit and Gemini CLI. You need to install it before either of those tools will work.</p>
 <p>You will not use Node.js directly – it runs in the background.</p>

 <h2>Step 1: Check if you already have Node.js</h2>
 <p>In the VS Code terminal, type the following and press Enter:</p>
 <div class="code-block"><code>node --version</code></div>
 <p>If you see a version number starting with <strong>v20</strong> or higher (for example, <code>v20.11.0</code>), you already have a compatible version. Skip to the <a href="install-the-prototype-kit.html">next page</a>.</p>
 <p>If you see an error like <code>command not found</code>, or a version lower than 20, continue below.</p>

 <h2>Step 2: Download Node.js</h2>
 <p>Go to <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a> and download the <strong>LTS</strong> (Long Term Support) version. This is the version on the left – it will say "Recommended for most users".</p>
 <div class="warning-text">
 <span class="warning-text__icon" aria-hidden="true">!</span>
 <p>Make sure you download version 20 or higher. The GOV.UK Prototype Kit and Gemini CLI both need at least version 20.</p>
 </div>

 <h2>Step 3: Install Node.js</h2>
 <p>Open the downloaded file and follow the installer. Accept all the default settings.</p>

 <h2>Step 4: Restart VS Code</h2>
 <p>After installing Node.js, close VS Code completely and reopen it. This makes sure VS Code can find the newly installed Node.js.</p>

 <h2>Step 5: Check it worked</h2>
 <p>Open the terminal in VS Code again and type:</p>
 <div class="code-block"><code>node --version</code></div>

 <div class="inset-text">
 <p><strong>Checkpoint:</strong> You should see a version number like <code>v20.11.0</code> or higher. If you do, Node.js is installed and working.</p>
 </div>

 <details>
 <summary>I still get 'command not found' after installing</summary>
 <div class="details-body">
 <p>Try these things:</p>
 <ul>
 <li>Make sure you fully closed and reopened VS Code (not just the tab – the whole application).</li>
 <li>On Windows, try opening a new terminal via <strong>Terminal</strong> → <strong>New Terminal</strong>.</li>
 <li>On Mac with Homebrew, open a new terminal window for the changes to take effect.</li>
 <li>Try restarting your computer.</li>
 </ul>
 <p>If none of these work, ask a developer on your team. It is a common setup issue and they will likely know the fix for your specific computer.</p>
 </div>
 </details>

 <details>
 <summary>What Node.js does in the background</summary>
 <div class="details-body">
 <p>Node.js is a runtime – a program that can run JavaScript code outside of a web browser. The Prototype Kit is built with JavaScript, so it needs Node.js to run. Gemini CLI is also a JavaScript application, so it needs Node.js too.</p>
 <p>Node.js also comes with a tool called <strong>npm</strong> (Node Package Manager), which is how you install things like the Prototype Kit and Gemini CLI. Think of npm as an app store for developer tools.</p>
 </div>
 </details>

 <nav class="pagination" aria-label="Pagination">
 <a href="../install-a-code-editor/" class="pagination__link pagination__link--prev">
 <span class="pagination__direction">Previous</span>
 <span class="pagination__page-title">Install a code editor</span>
 </a>
 <a href="../install-the-prototype-kit/" class="pagination__link pagination__link--next">
 <span class="pagination__direction">Next</span>
 <span class="pagination__page-title">Install the GOV.UK Prototype Kit</span>
 </a>
 </nav>