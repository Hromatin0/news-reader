import type { NewsItem, RssSource } from "../types/news";

const PROXY_URL = "https://api.rss2json.com/v1/api.json?rss_url=";

export const RSS_SOURCES: RssSource[] = [
  { name: "BBC", url: "https://feeds.bbci.co.uk/news/rss.xml" },
  { name: "NASA", url: "https://www.nasa.gov/rss/dyn/breaking_news.rss" },
  { name: "NPR", url: "https://feeds.npr.org/1001/rss.xml" },
  { name: "Ars Technica", url: "https://feeds.arstechnica.com/arstechnica/index" },
  { name: "Wired", url: "https://www.wired.com/feed/rss" },
  { name: "Defence24", url: "https://defence24.pl/_rss" }
];

function extractThumbnail(item: NewsItem): string {
  return (
    item.thumbnail ||
    extractFirstImage(item.content) ||
    ""
  );
}

function extractFirstImage(img: string): string {
  const match = img.match(/src=["']([^"']+)["']/);
  if(match) return match[1];
  return "";
}

export async function fetchNews(source: RssSource): Promise<NewsItem[]> {
  const response = await fetch(
    `${PROXY_URL}${encodeURIComponent(source.url)}`
  );

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  const data = await response.json();

  return data.items.map((item: NewsItem) => ({
    title: item.title ?? "",
    description: item.description ?? "",
    link: item.link ?? "",
    pubDate: item.pubDate ?? "",
    thumbnail: extractThumbnail(item),
    source: source.name,
  }));
}
