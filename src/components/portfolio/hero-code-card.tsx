"use client";

import { HERO_CODE_CONNECTIVITY, PERSON } from "@/data/portfolio";

const kw = "text-[#82aaff]";
const key = "text-[#c792ea]";
const str = "text-[#c3e88d]";
const num = "text-[#f78c6c]";
const punct = "text-[#89ddff]";
const white = "text-[#eeffff]";
const yellow = "text-[#ffcb6b]";
const dim = "text-[#5a5b6e]";

export function HeroCodeCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-port-border2 bg-port-surface shadow-[0_24px_60px_rgba(15,17,24,0.12)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(91,106,240,0.08)]">
      <div className="flex items-center gap-2 border-b border-port-border bg-port-bg3 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className={`ml-auto font-mono text-[0.7rem] ${dim}`}>
          parash.config.ts
        </span>
      </div>
      <div className="bg-[#0e1016] px-6 py-5 font-mono text-[0.78rem] leading-[1.85]">
        <div>
          <span className={kw}>const</span> <span className={white}>dev</span>{" "}
          <span className={punct}>=</span> <span className={yellow}>{"{"}</span>
        </div>
        <div className="pl-6">
          <span className={key}>name</span>
          <span className={punct}>:</span>{" "}
          <span className={str}>&quot;{PERSON.name}&quot;</span>
          <span className={dim}>,</span>
        </div>
        <div className="pl-6">
          <span className={key}>base</span>
          <span className={punct}>:</span>{" "}
          <span className={str}>&quot;{PERSON.location}&quot;</span>
          <span className={dim}>,</span>
        </div>
        <div className="pl-6">
          <span className={key}>since</span>
          <span className={punct}>:</span>{" "}
          <span className={num}>{PERSON.experienceSince}</span>
          <span className={dim}>,</span>
        </div>
        <div className="pl-6">
          <span className={key}>mobile</span>
          <span className={punct}>:</span> <span className={yellow}>[</span>
          <span className={str}>&quot;iOS&quot;</span>
          <span className={dim}>, </span>
          <span className={str}>&quot;Android&quot;</span>
          <span className={yellow}>]</span>
          <span className={dim}>,</span>
        </div>
        <div className="pl-6">
          <span className={key}>connectivity</span>
          <span className={punct}>:</span> <span className={yellow}>[</span>
        </div>
        {HERO_CODE_CONNECTIVITY.map((c, i) => (
          <div key={c} className="pl-12">
            <span className={str}>&quot;{c}&quot;</span>
            <span className={dim}>
              {i < HERO_CODE_CONNECTIVITY.length - 1 ? "," : ""}
            </span>
          </div>
        ))}
        <div className="pl-6">
          <span className={yellow}>]</span>
          <span className={dim}>,</span>
        </div>
        <div className="pl-6">
          <span className={key}>msc</span>
          <span className={punct}>:</span>{" "}
          <span className={str}>&quot;Distinction&quot;</span>
          <span className={dim}>,</span>
        </div>
        <div className="pl-6">
          <span className={key}>openToWork</span>
          <span className={punct}>:</span> <span className={num}>true</span>
        </div>
        <div>
          <span className={yellow}>{"}"}</span>
        </div>
        <br />
        <div>
          <span className={kw}>const</span> <span className={white}>stack</span>{" "}
          <span className={punct}>=</span> <span className={yellow}>[</span>
        </div>
        <div className="pl-12">
          <span className={str}>&quot;React Native&quot;</span>
          <span className={dim}>, </span>
          <span className={str}>&quot;Next.js&quot;</span>
          <span className={dim}>,</span>
        </div>
        <div className="pl-12">
          <span className={str}>&quot;AWS&quot;</span>
          <span className={dim}>, </span>
          <span className={str}>&quot;TypeScript&quot;</span>
          <span className={dim}>,</span>
        </div>
        <div className="pl-12">
          <span className={str}>&quot;Docker&quot;</span>
          <span className={dim}>, </span>
          <span className={str}>&quot;Terraform&quot;</span>
        </div>
        <div>
          <span className={yellow}>]</span>{" "}
          <span className={dim}>{"// @ Faraday Battery Ltd"}</span>
        </div>
      </div>
    </div>
  );
}
