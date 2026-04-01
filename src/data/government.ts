export interface GovBranch {
  title: string;
  description: string;
  members: { name: string; role: string; status?: string }[];
}

export const governmentStructure: GovBranch[] = [
  {
    title: "Executive Branch",
    description: "The head of state and government, the Cabinet, and federal ministries.",
    members: [
      { name: "Ram Chandra Poudel", role: "President (ceremonial)" },
      { name: "Balendra Shah", role: "Prime Minister — Nepal's youngest ever PM at 35", status: "In post" },
      { name: "Sudan Gurung", role: "Home Minister", status: "In post" },
      { name: "Sobita Gautam", role: "Law Minister", status: "In post" },
      { name: "Swarnim Wagle", role: "Cabinet (Economics)", status: "In post" },
      { name: "Sishir Khanal", role: "Cabinet", status: "In post" },
    ],
  },
  {
    title: "Legislature — Parliament",
    description: "Bicameral: House of Representatives (275 seats) + National Assembly (59 seats).",
    members: [
      { name: "RSP", role: "182 seats (ruling — supermajority)" },
      { name: "Nepali Congress", role: "38 seats (primary opposition)" },
      { name: "CPN-UML", role: "25 seats (opposition)" },
      { name: "Maoist Centre", role: "17 seats (opposition)" },
      { name: "Shram Sanskriti Party", role: "7 seats" },
      { name: "RPP", role: "5 seats" },
    ],
  },
  {
    title: "Judiciary",
    description: "Independent judiciary under the 2015 Constitution.",
    members: [
      { name: "Supreme Court", role: "Highest court — Sushila Karki was former Chief Justice" },
      { name: "High Courts", role: "7 (one per province)" },
      { name: "District Courts", role: "77 (one per district)" },
    ],
  },
  {
    title: "Federal Structure — 3 Tiers",
    description: "Nepal operates a 3-tier federal system.",
    members: [
      { name: "Federal Government", role: "Defense, foreign affairs, central bank, federal taxation" },
      { name: "Provincial Governments", role: "7 provinces, each with elected assembly" },
      { name: "Local Governments", role: "753 units — municipalities + rural municipalities" },
    ],
  },
  {
    title: "Key Oversight Bodies",
    description: "Anti-corruption and regulatory institutions.",
    members: [
      { name: "CIAA", role: "Commission for Investigation of Abuse of Authority" },
      { name: "DMLI", role: "Department of Money Laundering Investigation" },
      { name: "CIB", role: "Central Investigation Bureau — serious crime" },
      { name: "Nepal Rastra Bank", role: "Central bank; overseeing cooperative sector" },
      { name: "Election Commission", role: "Elections management" },
    ],
  },
];

export const electionResults = {
  date: "March 5, 2026",
  totalSeats: 275,
  voterTurnout: "~60%",
  parties: [
    { name: "RSP", leader: "Balendra Shah", seats: 182, change: "+162", fptpShare: "44.17%" },
    { name: "Nepali Congress", leader: "Gagan Thapa", seats: 38, change: "-51", fptpShare: "19.08%" },
    { name: "CPN-UML", leader: "K.P. Sharma Oli", seats: 25, change: "-53", fptpShare: "15.42%" },
    { name: "Maoist Centre", leader: "Pushpa Kamal Dahal", seats: 17, change: "-15", fptpShare: "6.10%" },
    { name: "SSP", leader: "Harka Sampang", seats: 7, change: "+7", fptpShare: "N/A" },
    { name: "RPP", leader: "Rajendra Lingden", seats: 5, change: "-9", fptpShare: "N/A" },
  ],
};
