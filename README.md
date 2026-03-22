# 📰 News Reader

A responsive news aggregator that fetches and displays articles from multiple RSS sources in real time.

**Live Demo:** https://news-reader-sepia.vercel.app

---

## Features

- 📡 Fetches live news from multiple RSS sources (BBC, NASA, NPR, Ars Technica, Wired, Defence24)
- 🌙 Dark / Light theme toggle
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🖼️ Article cards with thumbnails, descriptions, and publish dates

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **CSS Modules** — scoped component styles
- **Bootstrap Icons**
- [rss2json API](https://rss2json.com) — RSS to JSON proxy

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Hromatin0/news-reader.git
cd news-reader

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/       # NewsCard, NewsFeed
├── hooks/            # useNews (data fetching)
├── services/         # rssService (API calls)
└── types/            # TypeScript interfaces
