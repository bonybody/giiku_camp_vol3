export default function ({ $auth, redirect, error }) {
  if (!$auth.loggedIn()) {
    error({ statusCode: 403 })
  }
}
