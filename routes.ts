/* 
    -All public routes visible to everyone
    -Type {string[]}
*/
export const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/faqs",
  "/features",
  "/pricing",
  "/privacy",
  "/support",
  "/terms",
];

/* 
    -Authentication routes;
    -They'll redirect users to the dashboard
    -type {string[]}
*/

export const authRoutes = ["/login"];

/* 
    -The prefix for API authentication routes
    -Routes that start with this prefix are used for API authentication purposes
    -type {string}
*/

export const apiRoutePrefix = "/api/auth";

/* 
    -default login rediract after logging in
    -type {string}
*/

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
