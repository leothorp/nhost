# @nhost/react-apollo

## 4.2.8

### Patch Changes

- Updated dependencies [7c8f0926]
- Updated dependencies [7c8f0926]
  - @nhost/react@0.7.8
  - @nhost/apollo@0.5.7

## 4.2.7

### Patch Changes

- @nhost/react@0.7.7
- @nhost/apollo@0.5.6

## 4.2.6

### Patch Changes

- @nhost/react@0.7.6
- @nhost/apollo@0.5.5

## 4.2.5

### Patch Changes

- Updated dependencies [9d32314]
- Updated dependencies [236ce72]
- Updated dependencies [236ce72]
  - @nhost/react@0.7.5
  - @nhost/apollo@0.5.4

## 4.2.4

### Patch Changes

- Updated dependencies [2887ce0]
  - @nhost/react@0.7.4

## 4.2.3

### Patch Changes

- 584976d: - publishable directory structure changes (ESM, CJS and UMD included in the output)
  - build system improvements
  - fixed some bundling concerns (https://github.com/nhost/nhost/issues/428)
- Updated dependencies [584976d]
  - @nhost/apollo@0.5.3
  - @nhost/react@0.7.3

## 4.2.2

### Patch Changes

- @nhost/apollo@0.5.2
- @nhost/react@0.7.2

## 4.2.1

### Patch Changes

- Updated dependencies [58fa2a2]
- Updated dependencies [58fa2a2]
  - @nhost/react@0.7.1
  - @nhost/apollo@0.5.1

## 4.2.0

### Minor Changes

- 42edb74: Adapt to React 18
- 42edb74: Bump to Apollo client 3.6.2

### Patch Changes

- 54e1873: Fix: add authentication headers to GraphQL operations when authenticated
- Updated dependencies [42edb74]
  - @nhost/react@0.7.0
  - @nhost/apollo@0.5.0

## 4.1.1

### Patch Changes

- @nhost/apollo@0.4.5
- @nhost/react@0.6.1

## 4.1.0

### Patch Changes

- Updated dependencies [b52b4fc]
  - @nhost/react@0.6.0
  - @nhost/apollo@0.4.4

## 4.0.17

### Patch Changes

- @nhost/react@0.5.7
- @nhost/apollo@0.4.3

## 4.0.16

### Patch Changes

- Updated dependencies [5ee395e]
  - @nhost/react@0.5.6
  - @nhost/apollo@0.4.3

## 4.0.15

### Patch Changes

- @nhost/apollo@0.4.2
- @nhost/react@0.5.5

## 4.0.14

### Patch Changes

- @nhost/apollo@0.4.1
- @nhost/react@0.5.4

## 4.0.13

### Patch Changes

- f6093a6: Introduce useAuthSubscription
- Updated dependencies [f6093a6]
  - @nhost/apollo@0.4.0
  - @nhost/react@0.5.3

## 4.0.12

### Patch Changes

- @nhost/react@0.5.2
- @nhost/apollo@0.3.9

## 4.0.11

### Patch Changes

- 8583af8: correct documentation link in readme
  - @nhost/apollo@0.3.8
  - @nhost/react@0.5.1

## 4.0.10

### Patch Changes

- Updated dependencies [587eaff]
  - @nhost/react@0.5.0
  - @nhost/apollo@0.3.7

## 4.0.9

### Patch Changes

- @nhost/react@0.4.7
- @nhost/apollo@0.3.6

## 4.0.8

### Patch Changes

- @nhost/apollo@0.3.4
- @nhost/react@0.4.4

## 4.0.5

### Patch Changes

- correct dependencies

  See this related issues:

  - [nhost](https://github.com/nhost/nhost/issues/326)
  - [pnpm](https://github.com/pnpm/pnpm/issues/4348)

- Updated dependencies
  - @nhost/apollo@0.3.2
  - @nhost/react@0.4.2

## 4.0.3

### Patch Changes

- Updated dependencies [113beed]
  - @nhost/apollo@0.3.1
  - @nhost/react@0.4.1

## 4.0.2

### Patch Changes

- Updated dependencies [39df4d5]
  - @nhost/react@0.4.0

## 4.0.1

### Patch Changes

- @nhost/react@0.3.1
- @nhost/apollo@0.3.0

## 4.0.0

### Minor Changes

- 744fd69: Unify vanilla, react and next APIs so they can work together
  React and NextJS libraries now works together with `@nhost/nhost-js`. It also means the Nhost client needs to be initiated before passing it to the React provider.
  See the [React](https://docs.nhost.io/reference/react#configuration) and [NextJS](https://docs.nhost.io/reference/nextjs/configuration) configuration documentation for additional information.

### Patch Changes

- Updated dependencies [744fd69]
  - @nhost/react@0.3.0
  - @nhost/apollo@0.3.0

## 3.1.0

### Minor Changes

- 0d8afde: Use `@nhost/react` as a peer dependency
  `@nhost/react` was bundled where it shouldn't. As a result, `@nhost/react-apollo` did not have access to the Nhost React context, leading to errors

### Patch Changes

- Updated dependencies [0d8afde]
  - @nhost/apollo@0.2.1
  - @nhost/react@0.2.1

## 3.0.0

### Major Changes

- 207ae38: Rewrite of the Apollo GraphQL client

  - Introducing a new `@nhost/apollo` that will be reusable by other frameworks than React e.g. Vue
  - The new package works together with the `@nhost/client` and its new state management system
  - **BREAKING CHANGE** The react client `@nhost/react-apollo` is set to use the new `@nhost/client` package and won't work anymore with `@nhost/nhost-js`. See the [documentation](https://docs.nhost.io/reference/react/apollo) for further information.

  Closes [#8](https://github.com/nhost/nhost/issues/8)

### Patch Changes

- Updated dependencies [207ae38]
  - @nhost/apollo@0.2.0
  - @nhost/react@0.2.0

## 2.1.6

### Patch Changes

- Updated dependencies [721e138c]
  - @nhost/nhost-js@0.3.13

## 2.1.4

### Patch Changes

- c8f2488: optimize npm packages: only include the `dist` directory, and introduce the `exports` field in package.json as per Vite's recommendations.
- Updated dependencies [c8f2488]
  - @nhost/nhost-js@0.3.10

## 2.1.3

### Patch Changes

- Updated dependencies [2e1c055]
  - @nhost/nhost-js@0.3.9

## 2.1.2

### Patch Changes

- 03562af: Build in CommonJS and ESM instead of UMD and ESM as the UMD bundle generated by the default Vite lib build mode doesn't work with NodeJS
- Updated dependencies [03562af]
  - @nhost/nhost-js@0.3.8

## 2.1.1

### Patch Changes

- @nhost/nhost-js@0.3.7
