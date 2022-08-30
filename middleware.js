import { NextResponse } from "next/server";

export default function middleware(req) {
  let SITE_URL = "http://localhost:3000";

  let verify = req.cookies.get("token");
  let user = req.cookies.get("user");
  let role = req.cookies.get("role");
  let roleType = req.cookies.get("roleType");

  let url = req.url;

  //When Not Logged In
  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("");
  }
  if (!verify && url.includes("/admin")) {
    return NextResponse.redirect(SITE_URL);
  }

  //===== When Logged In =====
  //Hiding SignIn & SignUp Pages
  if (
    (verify && url.includes("/signin")) ||
    (verify && url.includes("/signup"))
  ) {
    return NextResponse.redirect(SITE_URL);
  }

  //===== ROLE BASE =====
  //Admin Routes
  //...
//   if (verify && roleType === "admin" && url.includes("/dashboard")) {
//     return NextResponse.redirect(`${SITE_URL}/admin`);
//   }

  //Monitor Routes
  //...
  if (verify && roleType === "monitor" && url.includes("/dashboard")) {
    return NextResponse.redirect(`${SITE_URL}/admin`);
  }

  //User Routes
  //...
  if (verify && roleType === "user" && url.includes("/admin")) {
    return NextResponse.redirect(`${SITE_URL}/dashboard`);
  }
}
