"use client";

import { useParams } from "next/navigation";

export default function PathCalculator() {
  const params = useParams<{ a: string; b: string; c: string }>();
  const aRaw = params.a;
  const bRaw = params.b;
  const cRaw = params.c;
  const a = parseFloat(aRaw);
  const b = parseFloat(bRaw);
  const c = parseFloat(cRaw);
  const sum = a + b + c;
  return (
    <div id="wd-path-calculator">
      <h1>Calculator – Path Parameters</h1>
      <p>Raw path segments (already decoded by Next.js):</p>
      <p>
        a = <code>{aRaw}</code>
      </p>
      <p>
        b = <code>{bRaw}</code>
      </p>
      <p>
        c = <code>{cRaw}</code>
      </p>
      <h2 className="text-green-700">Sum = {sum}</h2>
    </div>
  );
}
