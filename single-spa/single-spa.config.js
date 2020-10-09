import { registerApplication, start } from "single-spa";

registerApplication(
  "navBar",
  () => import("./src/navBar/navBar.app.js").then(module => module.navBar),
  () => true
);

registerApplication(
  // Name of our single-spa application
  "home",
  // Our loading function
  () => import("./src/home/home.app.js"), // Our activity function
  () =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/home")
);

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(prefix);
  };
}

registerApplication(
  // Name of our single-spa application
  "welcome",
  // Our loading function
  () => import("./src/welcome/welcome.app.js"), // Our activity function
  pathPrefix("/welcome")
);

start();
