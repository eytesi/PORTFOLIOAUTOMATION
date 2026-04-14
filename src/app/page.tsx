"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "I-9 Communication Automation (Stakeholder)",
    impact: "Improved onboarding follow-ups through automation",
    description:
      "Worked as part of the I-9 team stakeholder group to support the automation of employee communications for Section 1 and Section 2 completion. Provided process insights, system knowledge, and workflow logic to help design automated email flows replacing manual follow-ups.",
  },
  {
  title: "Re-Verification Reminder Automation",
  impact: "Saved ~10 hours per month through automated follow-ups",
  description:
    "Built a self-initiated reminder flow based on weekly refreshed re-verification reports from Perfect Compliance. It automatically sends weekly email reminders to employees with 50 days or less before their work authorization documents expire, replacing a repetitive manual process.",
},
  {
    title: "Operational Alert Systems (Internal Tools)",
    impact: "Improved team awareness across multi-location operations",
    description:
      "Created lightweight automated reminders including holiday coverage alerts and payroll deadlines. Designed to support team coordination and reduce missed actions in distributed environments.",
  },
];

const tools = [
  {
    category: "Systems",
    items: ["Workflow design", "Process mapping", "Stakeholder alignment", "Documentation"],
  },
  {
    category: "Data & Analytics",
    items: ["Excel (advanced)", "SQL", "Power BI", "Reporting"],
  },
  {
    category: "Engineering",
    items: ["Python", "JavaScript", "Git", "Automation tools"],
  },
  {
    category: "Collaboration",
    items: ["Cross-functional work", "Visual communication", "Figma", "Presentations"],
  },
];

const timeline = [
  {
    year: "Now",
    title: "QA Automation",
    subtitle: "Python, Selenium, Pytest · Building the next layer.",
  },
  {
    year: "2025",
    title: "Associate Degree in Programming",
    subtitle: "National University of Hurlingham",
  },
  {
    year: "2023 — Present",
    title: "People Experience Center Associate · Assurant",
    subtitle:
      "HR operations support for 11,500+ employees, Workday transactions, I-9 compliance, global mobility, and process improvement initiatives.",
  },
  {
    year: "2023",
    title: "Customer Care Specialist · Assurant",
    subtitle:
      "Customer support, claims resolution, QA analysis, and service process improvement.",
  },
  {
    year: "2020 — 2023",
    title: "HR Administrative Specialist · Hotel Rivadavia",
    subtitle:
      "Onboarding, staff scheduling, HR records, documentation, and recruitment support.",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeTrack, setActiveTrack] = useState(0);
  const [openCase, setOpenCase] = useState<string | null>(null);

  function goSec(id: string) {
    setActiveSection(id);
  }

  function goTrack(i: number) {
    setActiveTrack(i);
    setOpenCase(null);
  }

  function toggleC(id: string) {
    setOpenCase(prev => prev === id ? null : id);
  }

  return (
    <>
      <h2 style={{position:'absolute',width:'1px',height:'1px',overflow:'hidden',clip:'rect(0,0,0,0)'}}>Ivo Vieytes — portfolio de Process Improvement y QA Automation</h2>

      <nav className="nav">
        <div className="nav-logo">IV<span>.</span></div>
        <div className="nav-links">
          <button className={`nbtn${activeSection==='home'?' active':''}`} onClick={()=>goSec('home')}>Home</button>
          <button className={`nbtn${activeSection==='work'?' active':''}`} onClick={()=>goSec('work')}>Work</button>
          <button className={`nbtn${activeSection==='about'?' active':''}`} onClick={()=>goSec('about')}>About</button>
        </div>
      </nav>

      {/* HOME SECTION */}
      <div className={`section${activeSection==='home'?' visible':''}`}>
        <div className="hero">
          <div className="hero-blob"></div>
          <div className="hero-blob2"></div>
          <div>
            <div className="hero-eyebrow">Buenos Aires · Process &amp; Automation</div>
            <h1 className="hero-name">Ivo<br/><em>Vieytes</em></h1>
            <p className="hero-desc">I find friction in systems and remove it. From HR compliance workflows to automated test suites — I build the thing that makes things better.</p>
            <div className="hero-contact">ivo.vieytes@assurant.com</div>
          </div>
          <div className="hero-right">
            <div className="hcard">
              <div className="hcard-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="6" height="6" rx="2" fill="#ff2d78"/><rect x="12" y="2" width="6" height="6" rx="2" fill="#ff2d78" opacity="0.4"/><rect x="2" y="12" width="6" height="6" rx="2" fill="#ff2d78" opacity="0.4"/><rect x="12" y="12" width="6" height="6" rx="2" fill="#ff2d78" opacity="0.7"/></svg>
              </div>
              <div><div className="hcard-num">4</div><div className="hcard-label">Process improvements shipped</div></div>
            </div>
            <div className="hcard">
              <div className="hcard-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="#ff2d78" strokeWidth="2"/><path d="M7 10l2.5 2.5 4-4" stroke="#ff2d78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div><div className="hcard-num">0</div><div className="hcard-label">Manual follow-ups after automation</div></div>
            </div>
            <div className="hcard">
              <div className="hcard-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l2.4 5 5.6.8-4 3.9.9 5.5L10 14.5l-4.9 2.7.9-5.5L2 7.8l5.6-.8L10 2z" fill="#ff2d78" opacity="0.7"/></svg>
              </div>
              <div><div className="hcard-num">QA</div><div className="hcard-label">Automation track — building now</div></div>
            </div>
          </div>
        </div>

        <div className="tracks">
          <div className={`track${activeTrack===0?' active':''}`} onClick={()=>goTrack(0)}>
            <div className="track-orb"></div>
            <div className="track-num">01 — Track</div>
            <div className="track-title">Process Improvement</div>
            <div className="track-sub">HR Ops · Automation · Workflow design</div>
            <span className="track-badge">4 cases →</span>
          </div>
          <div className={`track${activeTrack===1?' active':''}`} onClick={()=>goTrack(1)}>
            <div className="track-orb"></div>
            <div className="track-num">02 — Track</div>
            <div className="track-title">QA Automation</div>
            <div className="track-sub">Testing · Python · In progress</div>
            <span className="track-badge">Building now →</span>
          </div>
        </div>

        {/* Track 0: Process Improvement Cases */}
        <div className={`tc${activeTrack===0?' visible':''}`}>
          <div className="cases-wrap">

            <div onClick={()=>toggleC('0')}>
              <div className={`crow${openCase==='0'?' open':''}`}><div className="cn">01</div>
                <div><div className="ctitle">I-9 Verification Process Redesign</div><div className="csub">End-to-end automation via stakeholder insight</div>
                  <div className="cpills"><span className="cpill hot">Automation</span><span className="cpill hot">Compliance</span><span className="cpill">Stakeholder</span></div>
                </div><div className="carrow">›</div>
              </div>
            </div>
            <div className={`cdetail${openCase==='0'?' visible':''}`}>
              <div className="d3col">
                <div><div className="dlabel">Problem</div><div className="dtext">Manual I-9 process was slow and inconsistent. No centralized tracking, no automated triggers — compliance risk at every step.</div></div>
                <div><div className="dlabel">My role</div><div className="dtext">Primary stakeholder mapping friction into requirements. Translated real-world pain into specs for the technical team.</div></div>
                <div><div className="dlabel">Outcome</div><div className="dtext">Automated I-9 workflow shipped. Manual touchpoints reduced, process standardized across all teams.</div></div>
              </div>
              <div className="flow">
                <div className="fs"><div className="fd"></div><div className="fl">New hire<br/>trigger</div></div><div className="fa">→</div>
                <div className="fs"><div className="fd on"></div><div className="fl on">Insights<br/>mapped</div></div><div className="fa">→</div>
                <div className="fs"><div className="fd on"></div><div className="fl on">Requirements<br/>defined</div></div><div className="fa">→</div>
                <div className="fs"><div className="fd"></div><div className="fl">Automation<br/>built</div></div><div className="fa">→</div>
                <div className="fs"><div className="fd"></div><div className="fl">Compliance<br/>verified</div></div>
              </div>
              <div className="stats">
                <div className="scard"><div className="sgfx"><svg width="56" height="36" viewBox="0 0 56 36"><rect x="2" y="26" width="8" height="8" rx="2" fill="#ff2d78" opacity="0.2"/><rect x="14" y="18" width="8" height="16" rx="2" fill="#ff2d78" opacity="0.4"/><rect x="26" y="10" width="8" height="24" rx="2" fill="#ff2d78" opacity="0.6"/><rect x="38" y="4" width="8" height="30" rx="2" fill="#ff2d78" opacity="0.9"/><line x1="2" y1="34" x2="54" y2="34" stroke="#333" strokeWidth="1"/></svg></div><div className="slabel">Touchpoints ↓</div></div>
                <div className="scard"><div className="sgfx"><svg width="56" height="36" viewBox="0 0 56 36"><circle cx="28" cy="18" r="14" fill="none" stroke="#2a2a2a" strokeWidth="5"/><circle cx="28" cy="18" r="14" fill="none" stroke="#ff2d78" strokeWidth="5" strokeDasharray="88" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 28 18)"/><text x="28" y="21" textAnchor="middle" fontFamily="Figtree" fontSize="8" fontWeight="900" fill="#ff2d78">100%</text></svg></div><div className="slabel">Standardized</div></div>
                <div className="scard"><div className="sgfx"><svg width="56" height="36" viewBox="0 0 56 36"><circle cx="28" cy="18" r="13" fill="rgba(255,45,120,0.08)" stroke="#ff2d78" strokeWidth="1.5"/><path d="M20 18l5.5 5.5 10-10" stroke="#ff2d78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><div className="slabel">Risk mitigated</div></div>
              </div>
            </div>

            <div onClick={()=>toggleC('1')}>
              <div className={`crow${openCase==='1'?' open':''}`}><div className="cn">02</div>
                <div><div className="ctitle">Work Authorization Reverification System</div><div className="csub">Automated outreach for expiring documents</div>
                  <div className="cpills"><span className="cpill hot">Email Automation</span><span className="cpill hot">Compliance</span><span className="cpill">Risk Reduction</span></div>
                </div><div className="carrow">›</div>
              </div>
            </div>
            <div className={`cdetail${openCase==='1'?' visible':''}`}>
  <div className="d3col">
    <div>
      <div className="dlabel">Problem</div>
      <div className="dtext">
        Re-verifications required manually checking expiring work authorization
        documents in Perfect Compliance and sending reminder emails to employees
        at least every 7 days. The process was repetitive, time-consuming, and
        easy to delay during busy periods.
      </div>
    </div>

    <div>
      <div className="dlabel">My role</div>
      <div className="dtext">
        I owned the re-verification process and turned a manual workflow into an
        automated reminder system. I used the weekly re-verification report as
        the source table and built a flow that sends reminder emails
        automatically once documents are within 50 days of expiration.
      </div>
    </div>

    <div>
      <div className="dlabel">Outcome</div>
      <div className="dtext">
        The process now runs through a weekly refreshed table and sends
        recurring reminders automatically, reducing manual effort by at least
        10 hours per month while improving consistency and visibility.
      </div>
    </div>
  </div>

  <div className="flow">
    <div className="fs">
      <div className="fd"></div>
      <div className="fl">Weekly<br />report</div>
    </div>
    <div className="fa">→</div>

    <div className="fs">
      <div className="fd on"></div>
      <div className="fl on">Table<br />refreshed</div>
    </div>
    <div className="fa">→</div>

    <div className="fs">
      <div className="fd on"></div>
      <div className="fl on">50-day<br />filter</div>
    </div>
    <div className="fa">→</div>

    <div className="fs">
      <div className="fd on"></div>
      <div className="fl on">Weekly email<br />sent</div>
    </div>
    <div className="fa">→</div>

    <div className="fs">
      <div className="fd"></div>
      <div className="fl">Follow-up<br />tracked</div>
    </div>
  </div>

  <div className="stats">
    <div className="scard">
      <div className="sgfx">
        <svg width="56" height="36" viewBox="0 0 56 36">
          <text
            x="28"
            y="24"
            textAnchor="middle"
            fontFamily="Figtree"
            fontSize="16"
            fontWeight="900"
            fill="#ff2d78"
          >
            10h+
          </text>
        </svg>
      </div>
      <div className="slabel">Saved monthly</div>
    </div>

    <div className="scard">
      <div className="sgfx">
        <svg width="56" height="36" viewBox="0 0 56 36">
          <path
            d="M6 28 L18 22 L28 18 L40 10 L50 6"
            stroke="#ff2d78"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="6" r="2.5" fill="#ff2d78" />
        </svg>
      </div>
      <div className="slabel">Proactive follow-up</div>
    </div>

    <div className="scard">
      <div className="sgfx">
        <svg width="56" height="36" viewBox="0 0 56 36">
          <rect x="4" y="22" width="8" height="12" rx="2" fill="#ff2d78" opacity="0.2" />
          <rect x="16" y="16" width="8" height="18" rx="2" fill="#ff2d78" opacity="0.4" />
          <rect x="28" y="10" width="8" height="24" rx="2" fill="#ff2d78" opacity="0.6" />
          <rect x="40" y="4" width="8" height="30" rx="2" fill="#ff2d78" opacity="0.9" />
        </svg>
      </div>
      <div className="slabel">Consistency ↑</div>
    </div>
  </div>
</div>
              <div className="flow">
                <div className="fs"><div className="fd"></div><div className="fl">Document<br/>DB</div></div><div className="fa">→</div>
                <div className="fs"><div className="fd on"></div><div className="fl on">Expiry<br/>monitor</div></div><div className="fa">→</div>
                <div className="fs"><div className="fd on"></div><div className="fl on">Email<br/>triggered</div></div><div className="fa">→</div>
                <div className="fs"><div className="fd"></div><div className="fl">Employee<br/>renewal</div></div><div className="fa">→</div>
                <div className="fs"><div className="fd"></div><div className="fl">Record<br/>updated</div></div>
              </div>
              <div className="stats">
                <div className="scard"><div className="sgfx"><svg width="56" height="36" viewBox="0 0 56 36"><text x="28" y="26" textAnchor="middle" fontFamily="Figtree" fontSize="26" fontWeight="900" fill="#ff2d78">0</text></svg></div><div className="slabel">Manual follow-ups</div></div>
                <div className="scard"><div className="sgfx"><svg width="56" height="36" viewBox="0 0 56 36"><path d="M4 32 Q14 10 28 16 Q40 22 52 4" stroke="#ff2d78" strokeWidth="2" fill="none" strokeLinecap="round"/><circle cx="52" cy="4" r="2.5" fill="#ff2d78"/><path d="M4 32 Q14 10 28 16 Q40 22 52 4 L52 36 L4 36Z" fill="rgba(255,45,120,0.06)"/></svg></div><div className="slabel">Proactive outreach</div></div>
                <div className="scard"><div className="sgfx"><svg width="56" height="36" viewBox="0 0 56 36"><rect x="2" y="4" width="8" height="30" rx="2" fill="#ff2d78" opacity="0.8"/><rect x="14" y="12" width="8" height="22" rx="2" fill="#ff2d78" opacity="0.5"/><rect x="26" y="20" width="8" height="14" rx="2" fill="#ff2d78" opacity="0.3"/><rect x="38" y="27" width="8" height="7" rx="2" fill="#ff2d78" opacity="0.15"/></svg></div><div className="slabel">Risk exposure ↓</div></div>
              </div>
            </div>

            <div onClick={()=>toggleC('2')}>
              <div className={`crow${openCase==='2'?' open':''}`}><div className="cn">03</div>
                <div><div className="ctitle">Holiday Staffing Alert System</div><div className="csub">Proactive multi-location coverage reminders</div>
                  <div className="cpills"><span className="cpill hot">Workforce Planning</span><span className="cpill hot">Ops Efficiency</span><span className="cpill">Multi-location</span></div>
                </div><div className="carrow">›</div>
              </div>
            </div>
            <div className={`cdetail${openCase==='2'?' visible':''}`}>
              <div className="d3col">
                <div><div className="dlabel">Problem</div><div className="dtext">Teams caught off guard by holidays across locations with different calendars. Last-minute understaffing, no warning system.</div></div>
                <div><div className="dlabel">My role</div><div className="dtext">Identified the gap. Built a multi-calendar reminder system sending proactive alerts to managers ahead of every holiday.</div></div>
                <div><div className="dlabel">Outcome</div><div className="dtext">Managers plan in advance. Day-of disruptions dropped across all locations.</div></div>
              </div>
              <div className="flow">
                <div className="fs"><div className="fd"></div><div className="fl">Multi-loc<br/>calendars</div></div><div className="fa">→</div>
                <div className="fs"><div className="fd on"></div><div className="fl on">Holiday<br/>detected</div></div><div className="fa">→</div>
                <div className="fs"><div className="fd on"></div><div className="fl on">Alert<br/>sent</div></div><div className="fa">→</div>
                <div className="fs"><div className="fd"></div><div className="fl">Coverage<br/>planned</div></div>
              </div>
              <div className="stats">
                <div className="scard"><div className="sgfx"><svg width="56" height="36" viewBox="0 0 56 36"><rect x="6" y="8" width="10" height="10" rx="3" fill="#ff2d78" opacity="0.6"/><rect x="22" y="8" width="10" height="10" rx="3" fill="#ff2d78" opacity="0.3"/><rect x="6" y="22" width="10" height="10" rx="3" fill="#ff2d78" opacity="0.3"/><rect x="22" y="22" width="10" height="10" rx="3" fill="#ff2d78" opacity="0.15"/><text x="44" y="24" textAnchor="middle" fontFamily="Figtree" fontSize="18" fontWeight="900" fill="#ff2d78">+</text></svg></div><div className="slabel">All locations</div></div>
                <div className="scard"><div className="sgfx"><svg width="56" height="36" viewBox="0 0 56 36"><path d="M4 28 Q18 22 30 26 Q42 30 52 8" stroke="#ff2d78" strokeWidth="2" fill="none" strokeLinecap="round"/><path d="M4 28 Q18 22 30 26 Q42 30 52 8 L52 36 L4 36Z" fill="rgba(255,45,120,0.06)"/></svg></div><div className="slabel">Planning rate ↑</div></div>
                <div className="scard"><div className="sgfx"><svg width="56" height="36" viewBox="0 0 56 36"><rect x="2" y="4" width="8" height="30" rx="2" fill="#ff2d78" opacity="0.5"/><rect x="14" y="12" width="8" height="22" rx="2" fill="#ff2d78" opacity="0.35"/><rect x="26" y="22" width="8" height="12" rx="2" fill="#ff2d78" opacity="0.2"/><rect x="38" y="28" width="8" height="6" rx="2" fill="#ff2d78" opacity="0.1"/></svg></div><div className="slabel">Disruptions ↓</div></div>
              </div>
            </div>

<div onClick={()=>toggleC('3')}>
  <div className={`crow${openCase==='3'?' open':''}`}><div className="cn">04</div>
    <div>
      <div className="ctitle">Operational Reminder Systems</div>
      <div className="csub">Lightweight automations for payroll and team coordination</div>
      <div className="cpills">
        <span className="cpill hot">Internal Automation</span>
        <span className="cpill">Ops Efficiency</span>
        <span className="cpill">Team Coordination</span>
      </div>
    </div><div className="carrow">›</div>
  </div>
</div>
<div className={`cdetail${openCase==='3'?' visible':''}`}>
  <div className="d3col">
    <div>
      <div className="dlabel">Problem</div>
      <div className="dtext">
        Teams relied on manual reminders for recurring operational deadlines and
        events, which made it easier to miss key actions during busy periods.
      </div>
    </div>

    <div>
      <div className="dlabel">My role</div>
      <div className="dtext">
        Built lightweight automated reminders for operational needs such as
        payroll deadlines and internal team coordination, reducing the need for
        repetitive manual follow-up.
      </div>
    </div>

    <div>
      <div className="dlabel">Outcome</div>
      <div className="dtext">
        Improved visibility of recurring deadlines, supported team alignment,
        and made small but high-friction operational tasks more consistent.
      </div>
    </div>
  </div>

  <div className="flow">
    <div className="fs"><div className="fd"></div><div className="fl">Recurring<br/>event</div></div><div className="fa">→</div>
    <div className="fs"><div className="fd on"></div><div className="fl on">Reminder<br/>logic</div></div><div className="fa">→</div>
    <div className="fs"><div className="fd on"></div><div className="fl on">Alert<br/>sent</div></div><div className="fa">→</div>
    <div className="fs"><div className="fd"></div><div className="fl">Team<br/>action</div></div>
  </div>

  <div className="stats">
    <div className="scard">
      <div className="sgfx">
        <svg width="56" height="36" viewBox="0 0 56 36">
          <path d="M6 28 L18 20 L30 22 L42 12 L50 8" stroke="#ff2d78" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="50" cy="8" r="2.5" fill="#ff2d78"/>
        </svg>
      </div>
      <div className="slabel">Visibility ↑</div>
    </div>

    <div className="scard">
      <div className="sgfx">
        <svg width="56" height="36" viewBox="0 0 56 36">
          <circle cx="28" cy="18" r="13" fill="rgba(255,45,120,0.08)" stroke="#ff2d78" strokeWidth="1.5"/>
          <path d="M20 18l5.5 5.5 10-10" stroke="#ff2d78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="slabel">Consistency</div>
    </div>

    <div className="scard">
      <div className="sgfx">
        <svg width="56" height="36" viewBox="0 0 56 36">
          <rect x="6" y="22" width="8" height="12" rx="2" fill="#ff2d78" opacity="0.3"/>
          <rect x="18" y="14" width="8" height="20" rx="2" fill="#ff2d78" opacity="0.5"/>
          <rect x="30" y="8" width="8" height="26" rx="2" fill="#ff2d78" opacity="0.7"/>
          <rect x="42" y="3" width="8" height="31" rx="2" fill="#ff2d78" opacity="0.9"/>
        </svg>
      </div>
      <div className="slabel">Manual effort ↓</div>
    </div>
  </div>
</div>

          </div>
        </div>

        {/* Track 1: QA Automation */}
        <div className={`tc${activeTrack===1?' visible':''}`}>
          <div className="qa-wrap">
            <div>
              <div className="dlabel" style={{marginBottom:'1rem'}}>Currently building</div>
              <p className="qdesc">Transitioning into QA Automation Engineering. The instinct is the same: if a process can break, it should be tested.</p>
              <p className="qdesc" style={{fontSize:'0.82rem',color:'#555'}}>Studying test automation frameworks, building projects with Python and Selenium, mapping a 9-month roadmap toward a QA role.</p>
            </div>
            <div>
              <div className="dlabel" style={{marginBottom:'1.2rem'}}>Skills in progress</div>
              <div className="sbars">
                <div className="srow"><div className="sname">Python</div><div className="strack"><div className="sfill" style={{width:'65%'}}></div></div><div className="spct">65%</div></div>
                <div className="srow"><div className="sname">SQL</div><div className="strack"><div className="sfill" style={{width:'70%'}}></div></div><div className="spct">70%</div></div>
                <div className="srow"><div className="sname">Git</div><div className="strack"><div className="sfill" style={{width:'60%'}}></div></div><div className="spct">60%</div></div>
                <div className="srow"><div className="sname">Selenium</div><div className="strack"><div className="sfill" style={{width:'35%'}}></div></div><div className="spct">35%</div></div>
                <div className="srow"><div className="sname">Pytest</div><div className="strack"><div className="sfill" style={{width:'30%'}}></div></div><div className="spct">30%</div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="easter" title="☽ ✦ ☾">· · ✦ · ·</div>
        <div className="footer">
          <div className="flogo">IV<span>.</span></div>
          <div className="fnote">ivo.vieytes@assurant.com · Buenos Aires</div>
        </div>
<div>
      {/* WORK SECTION */}
      <div className={`section${activeSection==='work'?' visible':''}`}>
        <div className="work-wrap">
          <h2 className="whead">Selected work &amp;<br/>systems I&apos;ve built</h2>
          <p className="csub" style={{marginBottom:'2rem',fontSize:'0.9rem'}}>Process improvements, automation initiatives, and operational systems designed to reduce friction and improve reliability at scale.</p>

          <div className="cases-wrap">
            {caseStudies.map((item, i) => (
              <motion.div key={i} whileHover={{y:-4}} style={{marginBottom:'0.6rem'}}>
                <div className="crow" style={{cursor:'default'}}>
                  <div className="cn">{String(i+1).padStart(2,'0')}</div>
                  <div>
                    <div className="ctitle">{item.title}</div>
                    <div className="csub" style={{color:'var(--fucsia)',marginBottom:'0.4rem'}}>{item.impact}</div>
                    <div className="csub">{item.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <h2 className="whead" style={{marginTop:'2.5rem'}}>Capabilities</h2>
          <div className="sgrid">
            {tools.map((group, i) => (
              <div className="skcrd" key={i}>
                <div className="skcat">{group.category}</div>
                {group.items.map((item, idx) => (
                  <div className="skitem" key={idx}>{item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="easter" title="☽ ✦ ☾">· · ✦ · ·</div>
        <div className="footer"><div className="flogo">IV<span>.</span></div><div className="fnote">ivo.vieytes@assurant.com · Buenos Aires</div></div>
      </div>

      {/* ABOUT SECTION */}
      <div className={`section${activeSection==='about'?' visible':''}`}>
        <div className="about-wrap">
          <div className="agrid">
            <div>
              <h2 className="ahead">Operations,<br/>systems,<br/><em>and scale.</em></h2>
              <p className="abody">I&apos;m an HR Operations professional based in <strong>Buenos Aires</strong>, working at the intersection of people systems, compliance, and process design.<br/><br/>My background combines operational execution with systems thinking: from Workday transactions and I-9 compliance to global mobility support and workflow improvement across high-volume environments.<br/><br/>I&apos;m now expanding that foundation into automation and QA, using tools like <strong>Python, SQL, Power BI</strong>, and AI-assisted workflows to make processes more reliable, scalable, and easier to maintain.<br/><br/>I work best where complexity needs structure — translating messy workflows into systems that are clear, documented, and built to hold up under pressure.</p>
            </div>
            <div>
              <div className="dlabel" style={{marginBottom:'1.2rem'}}>Timeline</div>
              <div className="tl">
                {timeline.map((item, index) => (
                  <div className="tli" key={index}><div className="tlyear">{item.year}</div><div><div className="tltitle">{item.title}</div><div className="tldesc">{item.subtitle}</div></div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="easter" title="☽ ✦ ☾">· · ✦ · ·</div>
        <div className="footer"><div className="flogo">IV<span>.</span></div><div className="fnote">ivo.vieytes@assurant.com · Buenos Aires</div></div>
      </div>
    </div>
  );
}
