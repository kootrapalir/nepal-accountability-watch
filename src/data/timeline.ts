export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  body: string;
  category: 'Election' | 'Governance' | 'Justice' | 'Politics' | 'Security' | 'Policy';
  significance: 'Historic' | 'Major' | 'Policy' | 'Developing';
}

export const timelineEvents: TimelineEvent[] = [
  { id: "t1", date: "2026-03-05", title: "RSP wins 182/275 seats", body: "Balen defeats Oli in Jhapa-5 by 49,614 votes — highest individual tally in Nepal's parliamentary history.", category: "Election", significance: "Historic" },
  { id: "t2", date: "2026-03-07", title: "Balen officially declared winner from Jhapa-5", body: "68,348 votes — highest ever in Nepal's parliamentary history.", category: "Election", significance: "Historic" },
  { id: "t3", date: "2026-03-27", title: "Balendra Shah sworn in as PM", body: "Sworn in at 12:34pm at Shital Niwas — Nepal's youngest ever PM at 35.", category: "Governance", significance: "Historic" },
  { id: "t4", date: "2026-03-27", title: "First Cabinet meeting — 100-point work plan approved", body: "Comprehensive reform agenda approved at inaugural Cabinet meeting.", category: "Governance", significance: "Major" },
  { id: "t5", date: "2026-03-27", title: "Social media ban officially repealed", body: "Sept 2025 ban on 26 social media platforms lifted.", category: "Governance", significance: "Policy" },
  { id: "t6", date: "2026-03-27", title: "Karki Commission report endorsed by Cabinet", body: "Full endorsement of the 907-page inquiry into Sept 2025 killings.", category: "Justice", significance: "Major" },
  { id: "t7", date: "2026-03-27", title: "Party union ban from government offices", body: "Party-affiliated trade and student unions banned from government offices.", category: "Policy", significance: "Policy" },
  { id: "t8", date: "2026-03-28", title: "KP Sharma Oli arrested", body: "Arrested from Bhaktapur residence — culpable homicide under NPC Sections 181 & 182.", category: "Justice", significance: "Historic" },
  { id: "t9", date: "2026-03-28", title: "Ramesh Lekhak arrested", body: "Former Home Minister arrested — criminal negligence in protest crackdowns.", category: "Justice", significance: "Major" },
  { id: "t10", date: "2026-03-28", title: "Deepak Khadka arrested", body: "Former Energy Minister arrested for money laundering.", category: "Justice", significance: "Major" },
  { id: "t11", date: "2026-03-29", title: "Oli hospitalized after arrest", body: "Heart/kidney conditions cited. Detained under medical supervision.", category: "Justice", significance: "Developing" },
  { id: "t12", date: "2026-03-29", title: "UML emergency meeting — calls arrests 'political revenge'", body: "Party begins district-level protest programme.", category: "Politics", significance: "Developing" },
  { id: "t13", date: "2026-03-29", title: "100+ UML supporters clash with police", body: "Protests near Kathmandu court; batons used.", category: "Security", significance: "Developing" },
  { id: "t14", date: "2026-03-30", title: "DMLI launches probes against Deuba, Oli, Dahal", body: "Money laundering probes against former PMs and ministers. Arzu Rana Deuba and Khadka also named.", category: "Justice", significance: "Major" },
  { id: "t15", date: "2026-03-30", title: "100-point work plan published", body: "Government releases full 20-page plan publicly.", category: "Governance", significance: "Policy" },
  { id: "t16", date: "2026-03-31", title: "Day 3 of UML protests", body: "~300 march from Maitighar to New Baneshwar. Slogans: 'Release KP Oli'.", category: "Politics", significance: "Developing" },
];

export const timelineCategories = [...new Set(timelineEvents.map(e => e.category))];
