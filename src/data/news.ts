export type Sentiment = 'positive' | 'negative' | 'neutral' | 'cautious';

export interface NewsArticle {
  id: string;
  title: string;
  source: string;
  sourceType: 'national' | 'international' | 'regional';
  date: string;
  sentiment: Sentiment;
  summary: string;
  url?: string;
  themes: string[];
}

export const newsArticles: NewsArticle[] = [
  { id: "n1", title: "Nepal's Gen Z Has Reshaped the Political Landscape", source: "Council on Foreign Relations", sourceType: "international", date: "2026-03-28", sentiment: "positive", summary: "Analysis of how Nepal's youth achieved what peers in Thailand and Bangladesh could not — total state power capture.", themes: ["Gen Z mobilization", "Democratic renewal", "Geopolitical shift"] },
  { id: "n2", title: "Balendra Shah: The 35-year-old rapper-turned-PM", source: "TIME Magazine", sourceType: "international", date: "2026-03-11", sentiment: "positive", summary: "Profile of Nepal's youngest PM, from underground rapper and structural engineer to leading a nation.", themes: ["Youth leadership", "Cultural disruption", "TIME100 Next"] },
  { id: "n3", title: "Can the government deliver on its ambitious 100-point roadmap?", source: "The Kathmandu Post", sourceType: "national", date: "2026-03-30", sentiment: "cautious", summary: "Editorial questioning the mechanical ability to execute sweeping reforms against entrenched bureaucracy.", themes: ["Bureaucratic resistance", "Implementation capacity", "Historical precedent"] },
  { id: "n4", title: "NEPSE slides as investors react to reform agenda", source: "Khabarhub", sourceType: "national", date: "2026-03-30", sentiment: "negative", summary: "Stock market drops 47.71 points (1.65%) as all 13 sectors end in red following 100-point plan announcement.", themes: ["Market anxiety", "Regulatory uncertainty", "Asset probe fears"] },
  { id: "n5", title: "PM Shah's bold agenda faces bureaucratic reality", source: "Republica", sourceType: "national", date: "2026-03-31", sentiment: "cautious", summary: "Warns of covert resistance from politicized civil servants against the 100-point plan.", themes: ["Civil service politicization", "Legal hurdles", "Public trust dynamics"] },
  { id: "n6", title: "Delay in Deputy Governor appointments raises concerns", source: "NepseTrading", sourceType: "national", date: "2026-04-01", sentiment: "negative", summary: "Vacancy at Nepal Rastra Bank bottlenecks central bank efficiency during critical transition.", themes: ["Institutional vacuum", "Central bank efficiency", "Macroeconomic anxiety"] },
  { id: "n7", title: "Former PM Oli arrested — first in Nepal's modern history", source: "Al Jazeera", sourceType: "international", date: "2026-03-28", sentiment: "positive", summary: "Historic arrest marks the end of informal immunity for Nepal's top political leaders.", themes: ["Rule of law", "Accountability", "Historic precedent"] },
  { id: "n8", title: "Nepal's new PM takes unprecedented step with Oli arrest", source: "Reuters", sourceType: "international", date: "2026-03-28", sentiment: "neutral", summary: "Factual coverage of the dawn raid arresting former PM from Bhaktapur residence.", themes: ["Justice", "Political transition", "South Asia"] },
];

export function getNewsSentimentStats() {
  const positive = newsArticles.filter(a => a.sentiment === 'positive').length;
  const negative = newsArticles.filter(a => a.sentiment === 'negative').length;
  const neutral = newsArticles.filter(a => a.sentiment === 'neutral').length;
  const cautious = newsArticles.filter(a => a.sentiment === 'cautious').length;
  return { positive, negative, neutral, cautious };
}
