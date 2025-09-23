import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "4rem 1rem", textAlign: "center" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>Page not found</h1>
      <p style={{ marginTop: 12 }}>
        The page you are looking for does not exist.
      </p>
      <p style={{ marginTop: 20 }}>
        <Link href="/">Go back home</Link>
      </p>
    </main>
  );
}
