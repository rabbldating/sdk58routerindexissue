# sdk58routerindexissue

1. `npm install`
1. `npm run web`

Expected behavior: As in SDK 57, since `isMainLogicalHost = true` and `loggedIn = false`, then `src/app/(stateful)/(contextful)/(maindomain-loggedinorout-tabs)` should be mounted which has `index.tsx` inside and this should be rendered.

Actual behavior: `src/app/(stateful)/(contextful)/(universal-loggedout-stack)/nonindex.tsx` is shown which is not even an `index.tsx`

