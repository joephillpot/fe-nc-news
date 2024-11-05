import { useState, useEffect } from 'react';
import { getCommentsByArticleId } from '../../utils/api';
import { Loading } from '../Loading';
import { Error } from '../Error';
import { CommentList } from './CommentList';

export const CommentSection = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [article_id]);

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
      <CommentList comments={comments} />
    </section>
  )
};
