import store from "../store/store";
export default function requireAuth(to, from, next) {
  if (!store.getters.isAuthenticated) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
}
