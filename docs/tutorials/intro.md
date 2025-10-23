---
id: tutorials-intro
title: Tutorials - Introduction
description: Introductory tutorial to the site and documentation structure.
---

# Tutorials — Introduction

This tutorial section contains step-by-step guides.

## Create your first note

Here's a sample snippet showing how you might save a note in JavaScript (example only):

```js
// saveNote.js
function saveNote(title, content) {
  return fetch('/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content }),
  }).then((r) => r.json());
}
```

## Next steps

- Explore the API Reference.
- Add examples under `docs/examples` and the sidebar will pick them up.
