"use client";

import ReactDOM from "react-dom";

export default function Portal({ handleClosePortal, children }) {
  if (typeof window === "undefined") return null;

  const portalRoot = document.getElementById("portal");

  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div className="portal-container">
      <div
        onClick={handleClosePortal}
        className="portal-underlay"
      />
      {children}
    </div>,
    portalRoot
  );
}
