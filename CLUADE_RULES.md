# Focus Pet Website - Claude Rules

## Purpose

This repository contains the official Focus Pet marketing website.

It is **not** the desktop application.

Its purpose is to:
- introduce Focus Pet
- showcase screenshots
- explain features
- encourage downloads
- build trust

It is not a web version of Focus Pet.

---

# Workflow

Before making changes:

- Read PROJECT_CONTEXT.md completely.
- Understand the existing architecture.
- Reuse existing components whenever possible.
- Prefer small incremental changes.
- Preserve consistency across the website.

Do not introduce unnecessary complexity.

---

# Design Philosophy

The website should feel:

- cozy
- relaxing
- minimal
- warm
- premium

Avoid:

- corporate styling
- clutter
- loud animations
- excessive gradients
- dark themes
- flashy effects

Less is almost always better.

---

# Code Philosophy

Prefer:

- reusable components
- clean folder structure
- readable code
- descriptive names

Avoid:

- duplicate components
- duplicate styling
- unnecessary abstractions

---

# Styling

Use Tailwind CSS.

Maintain a consistent spacing scale.

Prefer rounded corners.

Prefer generous whitespace.

Animations should remain subtle.

Use CSS transitions instead of animation libraries unless explicitly requested.

---

# Components

Build small reusable components.

Examples:

- Button
- Section
- FeatureCard
- ScreenshotCard
- FAQItem

Avoid giant page components.

---

# Images

Screenshots are one of the most important parts of the website.

Prefer showcasing the application rather than describing it.

Use large screenshots with breathing room.

Do not heavily crop screenshots unless necessary.

---

# Copy

Write naturally.

Avoid marketing buzzwords.

Avoid exaggerated claims.

Write like you're introducing a cozy game to a friend.

Prefer:

"Build a cozy space while you focus."

Instead of:

"Revolutionize your productivity."

---

# Architecture

Do not create placeholder pages.

Build pages only when requested.

Do not create features that do not yet exist in the application.

The website should always accurately represent the current application.

---

# Git

Do not create commits.

Do not create branches.

Do not modify GitHub workflows unless explicitly requested.

---

# Documentation

Do not update PROJECT_CONTEXT.md unless explicitly asked.

Do not create additional documentation unless requested.

---

# If unsure

Ask before making major architectural decisions.

Prefer discussing large changes before implementing them.

Never redesign an existing section unless explicitly requested.

Prefer extending or refining the current implementation over replacing it.