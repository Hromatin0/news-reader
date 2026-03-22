import { useState, useEffect } from "react";
import type { NewsItem, RssSource } from "../types/news";
import { fetchNews } from "../services/rssService";

interface UseNewsReturn {
  news: NewsItem[];
  loading: boolean;
  error: string | null;
}

export function useNews(source: RssSource): UseNewsReturn {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      setNews([]);

      try {
        const items = await fetchNews(source);
        if (!cancelled) {
          setNews(items);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(String(err));
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [source]);

  return { news, loading, error };
}
