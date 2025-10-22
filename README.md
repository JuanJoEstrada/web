# Project Overview

This project is a React application that displays character information using the **Rick and Morty GraphQL API**.  
It includes a **debounced search**, **pagination**, **state management with zustand**, and **error handling** through Apollo Client and a custom Error Boundary.

## Setup Instructions

### 1. Clone the repository and run it locally

```bash
git clone https://github.com/JuanJoEstrada/web
cd web
npm i
npm run dev
```

### 2. You can visit the live version of this project
[Rick & Morty project](https://rick-navy.vercel.app/)

## Technology decisions or trade-offs you made
- Needed to change the library from `@fontsource-variable/inter` to `@fontsource/inter`. It could not find the types declaration for the first one.
- Zustand was the new tool which represented a challenge at the beginning. 
- Not sure if `useFetchCharacters(value, page)` can be used in nested components with same parameters `value` and `page` to avoid prop drilling.

## Time spent on the challenge
Time: ~12h