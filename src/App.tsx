import { useState, useEffect } from "react";
import { NewsFeed } from "./components/NewsFeed";
import { RSS_SOURCES } from "./services/rssService";
import type { RssSource } from "./types/news";
import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const [activeSource, setActiveSource] = useState<RssSource>(RSS_SOURCES[0]);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="app">
        <header className="header">
          <h1 className="logo">NEWS</h1>
          <nav className="nav">
            {RSS_SOURCES.map((source) => (
              <button
                key={source.name}
                className={`navBtn ${activeSource.name === source.name ? "navBtnActive" : ""}`}
                onClick={() => setActiveSource(source)}
              >
                {source.name}
              </button>
            ))}
          </nav>
          <button
            className="themeBtn"
            onClick={toggleTheme}
            >
            {theme === "dark" ? <i className="bi bi-brightness-high"></i> : <i className="bi bi-moon"></i>}
          </button>
        </header>

      <main className="main">
        <NewsFeed source={activeSource} />
      </main>
    </div>
  );
}

export default App;
