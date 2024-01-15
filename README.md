# Prescriptions Demo

## How to Run
To run the project, run
```yarn dev```.

To run tests, run ```yarn test```.

## Technologies
### React
This project uses React without any frameworks for simplicity. For production projects, I would recommend NextJS for its benefits in SEO, its control over where and when to render and its simple solutions for routing and data fetching.

###  Vite and Vitest
This project uses Vite and Vitest for speed of builds and tests, hot reloading and smaller bundle sizes. The speed speed seems to win over Webpack up to a project size of around 500 files. At that size, I find the smaller bundle sizes to be even more important.

### React Router
React Router was chosen for its decoupling of data fetching and rendering, making the writing of easily testible components easier. Its functionality with nested and dynamic routes was also used in this project for a snappy user experience, over loading an entire page with an anchor tag.

### Yarn
Yarn is used for its better speed and security compared to npm.

### CSS Modules
CSS Modules (styles.module.css) are used in this demo to solve specificity issues in a simple way with no external packages needed. The usage in the component files is also similar to that of many CSS-in-JS libraries (like Emotion or Styled Components), so refactoring should be easy if the need arises. It can also coexist with other solutions during the refactoring process.

## File Structure
### General
Components live inside their own folders. The component folders include a main component file with a name corresponding to the component, an index file and several optional files. The most basic optional files are a CSS module file and a `components` folder, containing sub-components meant to be abstractions of parts of the main component. In general, the main component will handle the necessary logic and the sub-components will receive the results through props and stay as free from logic as possible. Components should only import what is exported from the index file of other components. If the need to use another component's sub-component arises, move the sub-component to the `components` folder directly under `src`.

Files should be kept small to enhance readability.

### assets
This contains all files that are not part of the code themselves, but are used by the app and are not meant to be public.

### components
These are reusable components. Keep them generic with as little logic as possible to maintain reusability.

### loaders
This folder contains loader functions, designed to utilize utility functions with an input coming from the router.

### utils
These are generally single function files that help solve a recurring task in the app. Keep them small and simple with as few responsibilities as possible per function for ease of testing.

### views
Views are components connected to routes and will fetch all necessary data and pass it to the components used in the view.

### types.ts
This file includes reusable types in an easy to reach place. Import and export with the `type` keyword to reduce bundle size, as this file is only relevant during development.

### main.tsx
This file creates the React app and registers all of its routes with included loaders and error handling (error handling not included in this demo). It is not a place to define logic, but to import and insert the logic into the router. In the case of a complex router, moving the router definition out of this file might be pertinent to help readability.

## Extended functionality
Possible addons to functionality could be
- A search function to filter prescriptions in the prescription list.
- More information about the medication and instructions in the prescription detail view.
- Links to more information about prescribers.
