export interface OldGuardPerson {
  id: string;
  name: string;
  peakRole: string;
  party: string;
  status: string;
  allegations: string[];
  initials: string;
  detail: string;
}

export const oldGuardList: OldGuardPerson[] = [
  { id: "og-1", name: "KP Sharma Oli", peakRole: "PM (4x): 2015–16, 2018–21, 2022, 2024–25", party: "CPN-UML", status: "ARRESTED", allegations: ["Criminal negligence — 77 deaths", "Money laundering", "Wide-body aircraft procurement", "Lalita Niwas land"], initials: "KO", detail: "Arrested March 28, 2026. Faces up to 10 years." },
  { id: "og-2", name: "Sher Bahadur Deuba", peakRole: "PM (5x): 1995–97, 2001–02, 2004–05, 2017–18, 2021–22", party: "Nepali Congress", status: "Under investigation", allegations: ["Money laundering", "Asset irregularities", "Burnt currency at residence"], initials: "SD", detail: "Assaulted during protests. Under intense financial scrutiny." },
  { id: "og-3", name: "Pushpa Kamal Dahal (Prachanda)", peakRole: "PM (3x): 2008–09, 2016–17, 2022–24", party: "CPN-MC (Maoist)", status: "Under investigation", allegations: ["Money laundering", "Maoist combatant fund embezzlement", "War crimes (potential)"], initials: "PD", detail: "Khumaltar residence burned in Sept protests." },
  { id: "og-4", name: "Ramesh Lekhak", peakRole: "Home Minister 2024–25", party: "Nepali Congress", status: "ARRESTED", allegations: ["Criminal negligence in Sept 2025 crackdowns"], initials: "RL", detail: "Arrested March 28, 2026." },
  { id: "og-5", name: "Arzu Rana Deuba", peakRole: "Foreign Minister 2024–25", party: "Nepali Congress", status: "Under investigation", allegations: ["Money laundering", "Ministerial misuse"], initials: "AD", detail: "Removed from post after uprising." },
  { id: "og-6", name: "Deepak Khadka", peakRole: "Energy Minister", party: "CPN-UML", status: "ARRESTED", allegations: ["Money laundering"], initials: "DK", detail: "Arrested March 29, 2026." },
  { id: "og-7", name: "Rabi Lamichhane", peakRole: "Deputy PM & Home Minister 2022–23", party: "RSP (founder)", status: "Previously arrested", allegations: ["Cooperative fraud", "Organized crime"], initials: "RaL", detail: "Arrested Oct 2024 by Oli government. Case ongoing." },
  { id: "og-8", name: "Gyanendra Shah", peakRole: "Deposed King (2001–08)", party: "RPP-aligned", status: "Free", allegations: ["Campaigning for constitutional monarchy restoration"], initials: "GS", detail: "Held rallies Feb 2026. Actively seeking political comeback." },
  { id: "og-9", name: "Chandra Kuber Khapung", peakRole: "Former IGP (Police Chief)", party: "Police", status: "Named for prosecution", allegations: ["Criminal negligence in protest crackdowns"], initials: "CK", detail: "Karki Commission recommendation pending." },
];

export const corruptionCases = [
  { name: "Pokhara Airport", amount: "NPR 14 billion", period: "2015–2022", status: "Investigation active" },
  { name: "Teramocs telecom", amount: "NPR 3.2 billion", period: "2020–2024", status: "CIAA probe, 4 suspended" },
  { name: "Cooperative fraud", amount: "NPR tens of billions", period: "2015–2025", status: "12 firms frozen" },
  { name: "Visit visa racket", amount: "NPR 50K–300K/person", period: "2018–2025", status: "Arrested 2026" },
  { name: "Bhutanese refugee scam", amount: "NPR unknown", period: "2022–2024", status: "2 charged" },
  { name: "Wide-body aircraft", amount: "NPR billions", period: "2018–2020", status: "Case active" },
  { name: "Lalita Niwas / land", amount: "NPR billions", period: "2010–2024", status: "Under review" },
  { name: "Maoist combatant funds", amount: "NPR billions", period: "2008–2012", status: "Under investigation" },
];
