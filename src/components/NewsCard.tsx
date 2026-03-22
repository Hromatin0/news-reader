import type { NewsItem } from "../types/news";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  const formattedDate = item.pubDate
    ? new Date(item.pubDate).toLocaleDateString("pl-PL", {
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      {item.thumbnail && (
        <div className={styles.imageWrapper}>
          <img src={item.thumbnail} alt={item.title} className={styles.image} />
        </div>
      )}
      <div className={styles.body}>
        <span className={styles.source}>{item.source}</span>
        <h2 className={styles.title}>{item.title}</h2>
        {item.description && (
          <p className={styles.description}>
            {item.description.slice(0, 200)}
            {item.description.length > 200 ? "…" : ""}
          </p>
        )}
        {formattedDate && (
          <time className={styles.date}>{formattedDate}</time>
        )}
      </div>
    </a>
  );
}
