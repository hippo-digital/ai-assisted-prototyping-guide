---
layout: base.njk
title: "What you'll need"
part: "Part 1: Get set up"
---

<span class="caption">Part 1: Get set up</span>
 <h1>What you'll need</h1>

Before you start building prototypes with AI, you need to install a few tools on your computer. This page explains what each one does and why you need it.

Do not worry if these are unfamiliar – the next few pages will walk you through installing each one, step by step.

## The tools

### A code editor (Kiro)
A code editor is a program for viewing and editing the files that make up your prototype. Think of it like Microsoft Word, but for code.

<details>
  <summary>I already use a different code editor</summary>
  <div class="details-body">
    <p>If you are comfortable with another editor like VS Code or WebStorm, you can use that instead. The guide references Kiro in its instructions, but the steps work the same way in any editor.</p>
  </div>
</details>

### Node.js
Node.js is a program that runs in the background and powers both the GOV.UK Prototype Kit and Gemini CLI. You will not interact with Node.js directly – it just needs to be installed for the other tools to work.

### The GOV.UK Prototype Kit
The GOV.UK Prototype Kit lets you make realistic HTML prototypes that look and behave like real GOV.UK services. It comes with all the styles, components, and patterns from the [GOV.UK Design System](https://design-system.service.gov.uk/).

The Prototype Kit runs on your computer. You view your prototype in a web browser, just like a real website, but only you can see it.

### Gemini CLI
Gemini CLI is a free AI tool made by Google that runs in your terminal (the text-based interface on your computer). You type instructions in plain English, and it writes code for you – directly into your prototype files.

This is the key difference from traditional prototyping: instead of writing HTML by hand, you describe what you want and Gemini creates it.

<div class="inset-text">
  <p><strong>Kiro has its own built-in AI — this guide does not use it.</strong> You will be using Gemini CLI in the terminal instead. The two work differently, so it is important to use the right one. When this guide says "type a prompt", it always means in the Gemini CLI terminal, not the Kiro chat panel.</p>
</div>

<details>
  <summary>What a terminal is</summary>
  <div class="details-body">
    <p>A terminal (also called a command line or command prompt) is a text-based way of talking to your computer. Instead of clicking icons, you type commands.</p>
    <p>On a Mac, the terminal app is called Terminal. On Windows, you can use Command Prompt or PowerShell. Kiro also has a built-in terminal, which we will use in this guide – so you do not need to open a separate one.</p>
    <p>You do not need to memorise terminal commands. We will tell you exactly what to type at each step.</p>
  </div>
</details>

## What you need to know

You do not need to know how to code. Gemini writes the code for you.

It helps if you are familiar with:
* the [GOV.UK Design System](https://design-system.service.gov.uk/) – so you know which components and patterns to ask for
* what a GOV.UK service looks like – so you can check whether Gemini's output looks right

Some experience with HTML and CSS makes it easier to review what Gemini produces. It is not required.

## How long this will take
Setting up all the tools takes about 30 minutes, depending on your internet connection. You only need to do this once.

<nav class="pagination" aria-label="Pagination">
  <a href="../install-a-code-editor/" class="pagination__link pagination__link--next">
    <span class="pagination__direction">Next</span>
    <span class="pagination__page-title">Install a code editor</span>
  </a>
</nav>