import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticlePreviewCardSmall from "../components/ArticlePreviewCardSmall";
import { useParams } from "react-router";
import SortArticlesBy from "../components/SortArticlesBar";

export default function ArticlesByCategory() {
  const requestedCategory = useParams().topic;
  const [articles, setArticles] = useState([]);
  const [sort_by, setSort_by] = useState("created_at");

  function handleState(sort_by) {
    setSort_by(sort_by);
  }

  useEffect(() => {
    getArticles({ requestedCategory, sort_by }).then((result) => {
      setArticles(result);
    });
  }, [sort_by]);

  return (
    <div>
      <h2>{`Recent articles about ${requestedCategory}`}</h2>
      <SortArticlesBy changeChoice={handleState} />

      <div className="article-preview-small-grid">
        {articles.map((article) => {
          return (
            <div key={article.article_id}>
              <ArticlePreviewCardSmall article={article} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
