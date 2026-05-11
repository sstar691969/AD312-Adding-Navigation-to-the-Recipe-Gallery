# AD312-Adding-Navigation-to-the-Recipe-Gallery
Adding Navigation to the Recipe Gallery using Remix React router


William Anderson

AD312

# 🍽️ Recipe Gallery – React Router Assignment

## 📝 Overview
In this assignment, the Recipe Gallery is transformed from a single-page, state-based React component into a modern multi-page application using **React Router (Remix framework)**.

The goal is to implement **server-aware client-side routing** that allows users to navigate between:
- A Home dashboard
- A full recipe gallery
- Individual recipe detail pages



> ⚠️ Note: This assignment can also be completed using Vite, but the instructions are designed for React Router (Remix).

---

Objectives
- Implement file-based routing for navigation
- Create dynamic routes for recipe detail pages
- Use `useParams` to extract URL parameters
- Build a global layout with persistent navigation

---

Setup Instructions
1. Create the Project
```bash
npx create-react-router@latest recipe-router-app
cd recipe-router-app
npm install
npm run dev
