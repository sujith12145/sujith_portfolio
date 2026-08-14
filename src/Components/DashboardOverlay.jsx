import React, { useState } from "react";
import { profile } from "../data/profile.js";
import { projects } from "../data/projects.js";
import { skillsCategories } from "../data/skills.js";
import { experience, education, achievements } from "../data/experience.js";

export default function DashboardOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  const toggleDashboard = () => {
    setIsOpen(!isOpen);
  };

  const tabs = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Internship" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" }
  ];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Floating Toggle Button */}
      <button
        onClick={toggleDashboard}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 9999,
          padding: "12px 24px",
          background: "rgba(30, 41, 59, 0.7)",
          backdropFilter: "blur(12px)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "30px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "14px",
          letterSpacing: "1px",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "all 0.3s ease",
          outline: "none"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(59, 130, 246, 0.8)";
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(59, 130, 246, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(30, 41, 59, 0.7)";
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(0, 0, 0, 0.3)";
        }}
      >
        {isOpen ? (
          <>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
            CLOSE MENU
          </>
        ) : (
          <>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-7v2h16V6H4z"/>
            </svg>
            VIEW DASHBOARD
          </>
        )}
      </button>

      {/* Main Dashboard Container */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          maxWidth: "600px",
          height: "100%",
          zIndex: 9998,
          background: "rgba(10, 15, 30, 0.82)",
          backdropFilter: "blur(20px)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.5)",
          color: "#f1f5f9",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "40px 30px 20px 30px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            background: "linear-gradient(180deg, rgba(59, 130, 246, 0.08) 0%, rgba(0,0,0,0) 100%)"
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "800",
              margin: 0,
              letterSpacing: "-0.5px",
              background: "linear-gradient(90deg, #60a5fa, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            {profile.name}
          </h1>
          <p style={{ fontSize: "14px", color: "#94a3b8", margin: "8px 0 0 0", fontWeight: "500" }}>
            {profile.title}
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "15px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              {profile.location}
            </span>
            <span style={{ fontSize: "12px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <a href={`mailto:${profile.email}`} style={{ color: "inherit", textDecoration: "none" }}>{profile.email}</a>
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            background: "rgba(15, 23, 42, 0.3)",
            padding: "0 10px",
            scrollbarWidth: "none"
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "16px 20px",
                background: "none",
                border: "none",
                color: activeTab === tab.id ? "#60a5fa" : "#94a3b8",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "14px",
                position: "relative",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
                outline: "none"
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "20px",
                    right: "20px",
                    height: "2px",
                    backgroundColor: "#3b82f6",
                    boxShadow: "0 0 8px #3b82f6"
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div style={{ flex: 1, overflowY: "auto", padding: "30px", boxSizing: "border-box" }}>
          {/* TAB: ABOUT */}
          {activeTab === "about" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "700", borderLeft: "3px solid #3b82f6", paddingLeft: "10px", margin: "0 0 15px 0" }}>
                Professional Summary
              </h2>
              <p style={{ lineHeight: "1.7", fontSize: "14.5px", color: "#cbd5e1", margin: 0 }}>
                {profile.summary}
              </p>

              <h2 style={{ fontSize: "18px", fontWeight: "700", borderLeft: "3px solid #3b82f6", paddingLeft: "10px", margin: "30px 0 15px 0" }}>
                Education
              </h2>
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "20px",
                    borderRadius: "12px",
                    background: "rgba(30, 41, 59, 0.4)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    marginBottom: "15px"
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "15px", fontWeight: "700", color: "#f8fafc" }}>
                    {edu.degree}
                  </h3>
                  <p style={{ margin: "5px 0 0 0", fontSize: "13.5px", color: "#94a3b8" }}>
                    {edu.institution}, {edu.location}
                  </p>
                  <p style={{ margin: "10px 0 0 0", fontSize: "12px", color: "#60a5fa", fontWeight: "600" }}>
                    {edu.duration}
                  </p>
                </div>
              ))}

              <h2 style={{ fontSize: "18px", fontWeight: "700", borderLeft: "3px solid #3b82f6", paddingLeft: "10px", margin: "30px 0 15px 0" }}>
                Connect With Me
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px",
                    borderRadius: "10px",
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    color: "#f1f5f9",
                    textDecoration: "none",
                    fontSize: "13.5px",
                    fontWeight: "600",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.border = "1px solid #3b82f6")}
                  onMouseLeave={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.05)")}
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
                  GitHub Profile
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px",
                    borderRadius: "10px",
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    color: "#f1f5f9",
                    textDecoration: "none",
                    fontSize: "13.5px",
                    fontWeight: "600",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.border = "1px solid #3b82f6")}
                  onMouseLeave={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.05)")}
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  LinkedIn Profile
                </a>
              </div>
              <a
                href="./resume/Sujith_Rachagulla_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "16px",
                  borderRadius: "10px",
                  background: "linear-gradient(90deg, #3b82f6, #2563eb)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  marginTop: "20px",
                  textAlign: "center",
                  boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
                  letterSpacing: "1px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(59, 130, 246, 0.4)";
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
                DOWNLOAD RESUME
              </a>
            </div>
          )}

          {/* TAB: PROJECTS */}
          {activeTab === "projects" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "24px",
                    borderRadius: "16px",
                    background: "rgba(30, 41, 59, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    marginBottom: "20px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(30, 41, 59, 0.6)";
                    e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(30, 41, 59, 0.4)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", flexWrap: "wrap" }}>
                    <h3 style={{ margin: 0, fontSize: "17px", fontWeight: "800", color: "#f8fafc" }}>
                      {proj.fullTitle}
                    </h3>
                  </div>

                  {proj.achievement && (
                    <div
                      style={{
                        marginTop: "10px",
                        fontSize: "12.5px",
                        color: "#fbbf24",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      <span>🏆</span> {proj.achievement}
                    </div>
                  )}

                  <p style={{ margin: "12px 0", fontSize: "13.5px", lineHeight: "1.6", color: "#cbd5e1" }}>
                    {proj.description}
                  </p>

                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", margin: "15px 0" }}>
                    {proj.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        style={{
                          fontSize: "11px",
                          padding: "4px 10px",
                          borderRadius: "15px",
                          background: "rgba(59, 130, 246, 0.12)",
                          color: "#93c5fd",
                          fontWeight: "500",
                          border: "1px solid rgba(59, 130, 246, 0.2)"
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "15px" }}>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: "12.5px",
                          color: "#60a5fa",
                          textDecoration: "none",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px"
                        }}
                      >
                        GitHub <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-3.16 19.49c.5.1.68-.21.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5A10 10 0 0012 2z"/></svg>
                      </a>
                    )}
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: "12.5px",
                          color: "#34d399",
                          textDecoration: "none",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px"
                        }}
                      >
                        Live Demo <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: EXPERIENCE */}
          {activeTab === "experience" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "24px",
                    borderRadius: "16px",
                    background: "rgba(30, 41, 59, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    marginBottom: "20px"
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "800", color: "#f8fafc" }}>
                    {exp.role}
                  </h3>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#94a3b8", fontSize: "13.5px", marginTop: "6px", flexWrap: "wrap", gap: "10px" }}>
                    <span style={{ color: "#60a5fa", fontWeight: "600" }}>
                      {exp.company} <span style={{ color: "#64748b", fontWeight: "400" }}>(formerly {exp.formerCompany})</span>
                    </span>
                    <span>{exp.duration}</span>
                  </div>
                  <p style={{ margin: "5px 0 15px 0", fontSize: "12px", color: "#64748b" }}>
                    📍 {exp.location}
                  </p>

                  <ul style={{ margin: 0, paddingLeft: "20px", color: "#cbd5e1", fontSize: "13.5px", lineHeight: "1.7" }}>
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} style={{ marginBottom: "10px" }}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* TAB: SKILLS */}
          {activeTab === "skills" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              {skillsCategories.map((cat, idx) => (
                <div key={idx} style={{ marginBottom: "25px" }}>
                  <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#60a5fa", margin: "0 0 12px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {cat.name}
                  </h3>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {cat.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        style={{
                          fontSize: "13px",
                          padding: "8px 14px",
                          borderRadius: "8px",
                          background: "rgba(30, 41, 59, 0.6)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                          color: "#cbd5e1",
                          fontWeight: "500",
                          transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
                          e.currentTarget.style.color = "#f8fafc";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                          e.currentTarget.style.color = "#cbd5e1";
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: ACHIEVEMENTS */}
          {activeTab === "achievements" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "20px",
                    borderRadius: "12px",
                    background: "rgba(30, 41, 59, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    marginBottom: "15px"
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "800", color: "#f8fafc", display: "flex", alignItems: "center", gap: "8px" }}>
                    {ach.title.includes("1st Place") ? "🏆" : "⚡"} {ach.title}
                  </h3>
                  <p style={{ margin: "10px 0 0 0", fontSize: "13.5px", lineHeight: "1.6", color: "#cbd5e1" }}>
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "20px 30px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            background: "rgba(10, 15, 30, 0.6)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "12px",
            color: "#64748b"
          }}
        >
          <span>&copy; {new Date().getFullYear()} Sujith Rachagulla</span>
          <span style={{ fontStyle: "italic" }}>Let's build something intelligent.</span>
        </div>
      </div>

      {/* Embedded CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
