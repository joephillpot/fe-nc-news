import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../../utils/api';
import { Error } from '../../Error';
import { Loading } from '../../Loading';

export const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
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
      <Error err={err} />
    )
  }

  return (
    <>
    <div className='article'>
      <h4>posted by {article.author}</h4>
      <h3>{article.topic}</h3>
      <h3>posted on {article.created_at}</h3>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <img src={article.article_img_url} alt={`${article.title} image`} />
      <p>Votes: {article.votes}</p>
    </div>
    <div className='article-comments'>
      <p>Insert comments here</p>
    </div>
    </>
  )
};