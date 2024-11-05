import { useState, useEffect } from 'react';
import { getArticles } from '../utils/api';
import { Error } from './Error';
import { Loading } from './Loading';
import { ArticlesList } from './articles/ArticlesList';

export const Home = () => {
  const [articleFeed, setArticleFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((articles) => {
        setArticleFeed(articles);
        setIsLoading(false);
        setIsError(null);
      })
      .catch((err) => {
        setIsError(err);
        setIsLoading(false);
      });
  }, []);

  if(isLoading){
    return (
      <Loading />
    )
  }

  if(isError){
    return (
      <Error err={err}/>
    )
  }

  return (
    <section>
      <h1>Home Feed</h1>
      <ArticlesList articleFeed={articleFeed} />
    </section>
  );
};
