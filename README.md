# tominflux-cv

## Introduction

`tominflux-cv` is a minimalist CV generator.

Primarily this project is serving as an open portfolio piece to demonstrate my programming and engineering skills, whilst also being a handy tool for writing up and rendering my CV/resume.

## Core Tech Stack

The fundamental libraries/frameworks/languages in use are the following:

- React
- NextJS
- Tailwind
- MongoDB
- TypeScript

## UI

### Component Library
I've built a small component library using `tailwind` and adapting JSX snippets from [`Mamba UI`](https://mambaui.com/), and icons have been imported from [`heroicons`](https://heroicons.com/)

### Component/Container Pattern

I've implemented my React components using the "Component/Container" pattern to separate presentational code from data-drive/logical code. [(Read more about that here.)](https://www.patterns.dev/react/presentational-container-pattern/)

There are some pros and some cons to following this pattern. I wouldn't suggest that it is entirely necessary but I thought I'd try it out to see if it results in more organised and maintainable code.

In conclusion, I think it can easily spiral into bringing in unnecessary complexity. Perhaps it's worth using for components that are taking on very abstract roles such as the CV Sections and Content in this project, but I also think this could be solved by handling API/state/data processing logic inside custom hooks instead of "container" components, in which case I believe the codebase would feel a bit more intuitive.

## State Management & API Fetching

[`zustand`](`https://zustand-demo.pmnd.rs/`) is used to handle global state on the front-end. It's the first time I've used it (moving away from `redux` and `React Context`) and I've found it to be a very pleasant, clean and simple solution for state management.

I have 2 separate stores, one for UI state and the other for holding and editing the CV document structure.

### UI State

This store is mainly for opening/closing/manipulating dialogs.

### CV Store

This store holds the work-in-progress CV document structure. Edits to sections and content are made here, and all the dependant components will reactively update when the store's CV document is updated.

It essentially acts as a local cache, reducing the frequency of required reads & updates to the API.
