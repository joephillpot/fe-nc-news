import { useState, useEffect } from 'react';
import { getCommentsByArticleId, postComment } from '../../utils/api';
import { Loading } from '../Loading';
import { Error } from '../Error';
import { CommentList } from './CommentList';
import { CommentAdder } from './CommentAdder';

export const CommentSection = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [commentChanged, setCommentChanged] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
        setError(null);
        setCommentChanged(false)
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [article_id, commentChanged]);

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
      <CommentAdder article_id={article_id} setCommentChanged={setCommentChanged} />
      <CommentList comments={comments} setCommentChanged={setCommentChanged}/>
    </section>
  )
};
