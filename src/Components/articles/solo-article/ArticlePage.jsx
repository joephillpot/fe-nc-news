import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../../utils/api';
import { Error } from '../../Error';
import { Loading } from '../../Loading';
import { CommentSection } from '../../comments/CommentSection';
import { Article } from './Article';

export const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <section className="article">
        <Article article={article} />
      </section>
      <section className="article-comments">
        <CommentSection article_id={article_id} />
      </section>
    </>
  );
};
