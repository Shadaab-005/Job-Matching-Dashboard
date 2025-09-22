// Mock data for the Job Matching Dashboard

export const overviewData = {
  leftColumn: [
    { label: "SAP TM Functional", value: "Strong", variant: "strong" },
    { label: "S/4 HANA On Premise", value: "Strong", variant: "strong" },
    { label: "Key Business Process", value: "Partial", variant: "partial" },
    { label: "Key Project Phases", value: "Strong", variant: "strong" },
  ],
  rightColumn: [
    { label: "E2E Implementation", value: "Strong", variant: "strong" },
    { label: "SAP TM Functional", value: "Partial", variant: "partial" },
    { label: "Key Integration Experience", value: "Strong", variant: "strong" },
  ],
};

export const matchSummaryData = {
  table: [
    {
      category: "Module",
      requirement: "SAP TM",
      criticality: "Must Have",
      criticalityVariant: "must-have",
      match: "Strong",
      matchVariant: "strong",
    },
    {
      category: "Role Type",
      requirement: "Functional Consultant",
      criticality: "Must Have",
      criticalityVariant: "must-have",
      match: "Strong",
      matchVariant: "strong",
    },
    {
      category: "Project Type",
      requirement: "Implementation (5+ yrs)",
      criticality: "Must Have",
      criticalityVariant: "must-have",
      match: "Partial",
      matchVariant: "partial",
    },
    {
      category: "System & Deployment",
      requirement: "S/4HANA Cloud",
      criticality: "Must Have",
      criticalityVariant: "must-have",
      match: "Partial",
      matchVariant: "partial",
    },
    {
      category: "Project Phases",
      requirement: "Full lifecycle involvement",
      criticality: "Must Have",
      criticalityVariant: "must-have",
      match: "Partial",
      matchVariant: "partial",
    },
    {
      category: "Business Processes",
      requirement: "FOTlu Config, Change Mgmt, Center Selection",
      criticality: "Must Have",
      criticalityVariant: "must-have",
      match: "Strong",
      matchVariant: "strong",
    },
    {
      category: "Integration Exp",
      requirement: "Integration with SD, MM EWM",
      criticality: "Must Have",
      criticalityVariant: "must-have",
      match: "Strong",
      matchVariant: "strong",
    },
    {
      category: "Development Exp",
      requirement: "WRICEF development (SAPUI and change mgmt)",
      criticality: "Nice to Have",
      criticalityVariant: "nice-to-have",
      match: "Partial",
      matchVariant: "partial",
    },
  ],
  strengths: [
    "Strong SAP TM functional expertise with FOTlu configuration and change management.",
    "Hands-on S/4HANA exposure with multiple integrations (SD/MM/EWM).",
  ],
  gaps: [
    "Limited end-to-end implementation experience compared to JD requirement.",
    "Lower S/4HANA duration than expected (2.5 yrs vs 5+ yrs required).",
  ],
  mismatches: [
    "No explicit BTP or BOIP logic implementation mentioned.",
    "Only partial WRICEF development experience relevant to FOTlu change management.",
  ],
};

export const experienceMatchData = {
  projects: [
    {
      name: "TM Implementation A",
      client: "DHL",
      duration: "2",
      role: "SAP TM Lead",
    },
    {
      name: "TM Rollout B",
      client: "Maersk",
      duration: "1.5",
      role: "SAP TM Consultant",
    },
    {
      name: "TM Upgrade C",
      client: "FedEx",
      duration: "0.8",
      role: "SAP TM Architect",
    },
    {
      name: "TM Support D",
      client: "UPS",
      duration: "1",
      role: "SAP TM Consultant",
    },
  ],
};

export const granularDetailsData = {
  skills: [
    {
      category: "TM – Planning",
      object: "Z_FO_ST[11][AM]: REPORT",
      required: "Expert",
      requiredVariant: "expert",
      resume: "Expert",
      resumeVariant: "expert",
    },
    {
      category: "TM – Execution",
      object: "TM_EWM_DOC_INT",
      required: "Expert",
      requiredVariant: "expert",
      resume: "Expert",
      resumeVariant: "expert",
    },
    {
      category: "EWM",
      object: "Z_DELIVERY_NOTE_FORM",
      required: "Advanced",
      requiredVariant: "advanced",
      resume: "Advanced",
      resumeVariant: "advanced",
    },
  ],
};

export const additionalRequirementsData = {
  requirements: [
    {
      requirement: "Ability to lead workshops and train users",
      match: "Strong",
      matchVariant: "strong",
      category: "SAP TM",
    },
    {
      requirement: "Experience with SAP CP for integrations",
      match: "Missing",
      matchVariant: "missing",
      category: "Functional Consultant",
    },
    {
      requirement: "Stakeholder communication and documentation skills",
      match: "Strong",
      matchVariant: "strong",
      category: "Implementation (5+ yrs)",
    },
  ],
};
