"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="btn-primary"
      data-print-hide
    >
      <span>Print This Page</span>
    </button>
  );
}
