"use client";

import { useState } from "react";

type CodeBlockProps = {
  code: string; // ✅ RAW STRING
  language?: string;
  children: React.ReactNode;
};

export default function CodeBlock({
  code,
  language,
  children,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="relative my-6 overflow-hidden  border border-zinc-800">
      {/* Header */}
      <div
        className="flex items-center justify-between bg-zinc-800 text-xs text-zinc-300"
        style={{ padding: "9px" }}>
        <span>{language ?? ""}</span>
        <button
          onClick={copyToClipboard}
          className="rounded px-2 py-1 hover:bg-zinc-800">
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Code (KEEP highlighted markup) */}
      <div className="bg-zinc-950 p-4 text-sm overflow-x-auto">{children}</div>
    </div>
  );
}
