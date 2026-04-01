export type ArrestStatus = 'arrested' | 'investigating' | 'charged' | 'acquitted' | 'free';

export interface ArrestPerson {
  id: string;
  name: string;
  role: string;
  party: string;
  status: ArrestStatus;
  charges: string[];
  arrestDate?: string;
  arrestingAuthority: string;
  legalBasis: string;
  detail: string;
  initials: string;
  caseUpdates: string[];
}

export const arrestedPersons: ArrestPerson[] = [
  {
    id: "rbb-1",
    name: "KP Sharma Oli",
    role: "Former Prime Minister (4x)",
    party: "CPN-UML",
    status: "arrested",
    charges: ["Culpable homicide — Sept 2025 protest crackdowns (77 dead)", "Criminal negligence"],
    arrestDate: "2026-03-28",
    arrestingAuthority: "Nepal Police, Kathmandu District Police Office",
    legalBasis: "NPC Sections 181 & 182; Karki Commission recommendations",
    detail: "Arrested from Bhaktapur residence. Hospitalized due to heart/kidney conditions. Faces up to 10 years imprisonment if convicted.",
    initials: "KO",
    caseUpdates: ["March 28: Arrested from Gundu, Bhaktapur", "March 29: Hospitalized — heart/kidney conditions", "March 30: DMLI money laundering probe launched"],
  },
  {
    id: "rbb-2",
    name: "Ramesh Lekhak",
    role: "Former Home Minister",
    party: "Nepali Congress",
    status: "arrested",
    charges: ["Culpable homicide — criminal negligence in protest crackdowns"],
    arrestDate: "2026-03-28",
    arrestingAuthority: "Nepal Police",
    legalBasis: "NPC Sections 181 & 182; Karki Commission recommendations",
    detail: "Arrested from residence in Suryabinayak, Bhaktapur. Faces up to 10 years imprisonment if convicted.",
    initials: "RL",
    caseUpdates: ["March 28: Arrested from Suryabinayak, Bhaktapur"],
  },
  {
    id: "rbb-3",
    name: "Deepak Khadka",
    role: "Former Energy Minister",
    party: "CPN-UML",
    status: "arrested",
    charges: ["Money laundering"],
    arrestDate: "2026-03-29",
    arrestingAuthority: "CIB (Central Investigation Bureau)",
    legalBasis: "Anti-Money Laundering Act",
    detail: "Arrested for money laundering related to energy sector contracts.",
    initials: "DK",
    caseUpdates: ["March 29: Arrested by CIB"],
  },
  {
    id: "rbb-4",
    name: "Sher Bahadur Deuba",
    role: "Former Prime Minister (5x)",
    party: "Nepali Congress",
    status: "investigating",
    charges: ["Money laundering", "Asset irregularities"],
    arrestingAuthority: "DMLI + CIB",
    legalBasis: "Anti-Money Laundering Act",
    detail: "Abroad in Oct 2025 post-assault; returned to Nepal. Forensic reports confirmed burnt currency at residence.",
    initials: "SD",
    caseUpdates: ["March 30: DMLI launches money laundering probe"],
  },
  {
    id: "rbb-5",
    name: "Pushpa Kamal Dahal (Prachanda)",
    role: "Former Prime Minister (3x), Maoist Centre",
    party: "CPN-MC (Maoist)",
    status: "investigating",
    charges: ["Money laundering", "Embezzlement of Maoist combatant funds", "War crimes (potential)"],
    arrestingAuthority: "DMLI + CIB",
    legalBasis: "Anti-Money Laundering Act",
    detail: "Khumaltar residence set on fire during Sept protests. Investigation into decades of alleged financial crimes.",
    initials: "PD",
    caseUpdates: ["March 30: DMLI money laundering probe launched"],
  },
  {
    id: "rbb-6",
    name: "Arzu Rana Deuba",
    role: "Former Foreign Minister",
    party: "Nepali Congress",
    status: "investigating",
    charges: ["Money laundering", "Asset irregularities"],
    arrestingAuthority: "DMLI",
    legalBasis: "Anti-Money Laundering Act",
    detail: "Removed from post after uprising. Under financial scrutiny alongside Sher Bahadur Deuba.",
    initials: "AD",
    caseUpdates: ["March 30: Named in DMLI probe"],
  },
  {
    id: "rbb-7",
    name: "Chandra Kuber Khapung",
    role: "Former Inspector General of Police",
    party: "Police",
    status: "investigating",
    charges: ["Criminal negligence — protest crackdowns"],
    arrestingAuthority: "Karki Commission recommendation",
    legalBasis: "NPC Sections 181 & 182, up to 10 years",
    detail: "Named alongside Oli/Lekhak for ordering lethal force without authorization.",
    initials: "CK",
    caseUpdates: ["Warrant pending execution"],
  },
  {
    id: "rbb-8",
    name: "Gokarna Mani Dawadi",
    role: "Former Home Secretary",
    party: "Bureaucracy",
    status: "investigating",
    charges: ["Criminal negligence"],
    arrestingAuthority: "Karki Commission recommendation",
    legalBasis: "NPC Section 182",
    detail: "Tacit approval of excessive force; failure to coordinate de-escalation.",
    initials: "GD",
    caseUpdates: ["Prosecution under NPC Section 182 recommended"],
  },
];

export function getArrestStats() {
  const total = arrestedPersons.length;
  const arrested = arrestedPersons.filter(p => p.status === 'arrested').length;
  const investigating = arrestedPersons.filter(p => p.status === 'investigating').length;
  return { total, arrested, investigating };
}
