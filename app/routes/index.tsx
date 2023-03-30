import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", margin: "auto", height: ("100vh") }}>
      <h2 style={{ textAlign: "center", }}>Galicia Api Market</h2>
      <Link prefetch="intent" to="/dashboard" style={{ textDecoration: "none", color: "#000", textAlign: "center" }}>
        <h3>Ingresar</h3>
      </Link>
    </div>
  );
}
