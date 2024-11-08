import { useParams } from 'react-router-dom';
import { getArticles } from '../../utils/api';
import { useState, useEffect } from 'react';
import { Loading } from '../Loading';
import { Error } from '../Error';
import { ArticlesList } from '../articles/ArticlesList';

export const TopicPage = () => {
  const { topic_slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articlesByTopic, setArticlesByTopic] = useState([]);

  useEffect(() => {
    getArticles(topic_slug)
      .then((articles) => {
        setIsLoading(false);
        setError(null);
        setArticlesByTopic(articles);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <ArticlesList articleFeed={articlesByTopic} />;
};
