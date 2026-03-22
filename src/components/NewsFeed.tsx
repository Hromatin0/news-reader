import type { RssSource } from "../types/news";
import { useNews } from "../hooks/useNews";
import { NewsCard } from "./NewsCard";
import styles from "./NewsFeed.module.css";

interface NewsFeedProps {
  source: RssSource;
}

export function NewsFeed({ source }: NewsFeedProps) {
  const { news, loading, error } = useNews(source);

  if (loading) {
    return (
      <div className={styles.statusWrapper}>
        <p className={styles.statusText}>Loading…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.statusWrapper}>
        <p className={styles.errorText}>{error}</p>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className={styles.statusWrapper}>
        <p className={styles.statusText}>No news</p>
      </div>
    );
  }

  return (
    <div className={styles.feed}>
      {news.map((item, index) => (
        <NewsCard key={`${item.link}-${index}`} item={item} />
      ))}
    </div>
  );
}
