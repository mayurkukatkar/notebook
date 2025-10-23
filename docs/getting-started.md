---
id: getting-started
title: Getting Started
description: Quick start guide to set up Mayur's Notebook locally.
---

# Getting Started

Welcome to Mayur's Notebook. This guide helps you run the docs site locally.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn
- Git

## Install dependencies

Copy and run:

```bash
# From project root
npm install
```

## Run locally

```bash
# Start development server
npm run start
```

Then open http://localhost:3000 (Docusaurus will print the actual URL).

## Build for production

```bash
npm run build
```

This generates static files in the `build/` directory.

## Contributing

- Use `docs/` to add new pages.
- Sidebars live in `sidebars.js`.
- For changes to the navbar or site config, edit `docusaurus.config.js`.
