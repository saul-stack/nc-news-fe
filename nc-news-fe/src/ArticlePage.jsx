import { getArticleById } from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleCard from "./components/ArticleCard";
import CommentsSection from "./components/CommentsSection";

export default function ArticlePage() {
  const [article, setArticle] = useState([]);
  const requestedArticleId = useParams().article_id;

  useEffect(() => {
    getArticleById(requestedArticleId).then((article) => {
      setArticle(article);
    });
  }, []);

  return (
    <div>
      <ArticleCard article={article} />
      <CommentsSection article={article} />
    </div>
  );
}