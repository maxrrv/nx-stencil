# NXStencil

This repo contains the code for reproducing two issues with the `@stencil/react-output-target` package in an NX workspace.

## Issue 1: `@stencil/react-output-target` somehow passes populates form data if built with nx instead of lerna.

1. Clone the repo.
2. Run `npm ci`.
3. Build the stencil core library by running `npx nx run core-react:build` (this will build the stencil core library and the react output target).
4. Run the `react-demo` app by running `npx nx run react-demo:serve`.
5. Open the browser and go to `http://localhost:4200/`. Fill out the form and submit. You should see the payload in the network tab (search for something).

In contrast with the other example, the formData is present as payload on the request. At least that's what I was able to reproduce.

I am confused.

> [!NOTE]
> You can check the code in the `packages/core/src/components/my-input/my-input.tsx` file.
