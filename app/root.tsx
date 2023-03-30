import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "../app/styles/index.css"
import bootstrapCSS from "bootstrap/dist/css/bootstrap.min.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Galicia Api Market",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet, },
  { rel: "stylesheet", href: bootstrapCSS, }

];
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
