# SvelteKit Todo App

A classic, feature poor, todo app to test out a new framework, SvelteKit. Self hosted on a node server using their adapter.

## Resources

### [Svelte Interactive Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte)

### [@sveltejs/adapter-node Docs](https://github.com/sveltejs/kit/tree/master/packages/adapter-node#environment-variables)

<br/>

## Road Map

- [x] Scaffold UI
- [x] Create interactivity
- [x] Submit form data to a local db file.
- [x] Deploy using node adapter
- [ ] Dockerize app
- [ ] Submit data to real db

<br/>

## Deploy

> You will need node.js installed

<strong>Install deps</strong>

```bash
npm install
```

<strong>Run build && start</strong>

```bash
npm run preview
```

## Report

<strong>Pros</strong>

- The dev experience was superb, as everyone knows by now Svelte alone is a joy to work with. State management built in and works great. No need for a CSS library and all CSS is scoped to the component.

- Never felt boxed in by the framework, there was always an escape hatch to features and patterns.

- I did not need to rely on external resources every step. A lot of the tools were intuitive.

- Deploying this to node was a breeze. Very surprised that it worked out of the box.

- The app is lightning fast to build and is super snappy in the browser.
- Really enjoyed the push to create a "javascript-less" version of the forms as an opt in or out.

- Virtually dependency free.

<strong>Cons</strong>

- The folder structure is hard to navigate after you get going. Only had one page to manage and a lib, and constantly had to stop and think too often about where something was being done. Could have done better with my abstractions, maybe.

- The docs are still fresh, so I did have trouble figuring out how to fetch data from my server if I wasn't using their form architecture.

- The relationship between server and client is muddled. Being new to this meta-framework architecture could be to blame.

## Conclusion

Wonderful meta-framework, will probably use this as my main tool for medium-large scale projects. There is a bit of distaste for the folder architecture, but I think it can be overcome once the familiarity sets in.
