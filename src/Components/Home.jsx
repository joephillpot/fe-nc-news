import { useState, useEffect } from 'react';
import { getArticles } from '../utils/api';
import { Error } from './Error';
import { Loading } from './Loading';
import { ArticlesList } from './articles/ArticlesList';

export const Home = () => {
  const [articleFeed, setArticleFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((articles) => {
        setArticleFeed(articles);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if(isLoading){
    return (
      <Loading />
    )
  }

  if(error){
    return (
      <Error error={error}/>
    )
  }

  return (
    <section>
      <h1>Home Feed</h1>
      <ArticlesList articleFeed={articleFeed} />
    </section>
  );
};
