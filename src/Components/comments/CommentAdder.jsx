import { useContext, useEffect, useState } from 'react';
import { Loading } from '../Loading';
import { Error } from '../Error';
import { UserContext } from '../../context/user';
import { postComment } from '../../utils/api';

export const CommentAdder = ({ article_id, setCommentChanged }) => {
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    postComment(article_id, user, comment).then((response) => {
      setIsLoading(false);
      setError(null);
      setComment('');
      setCommentChanged(true);
    }).catch((err) => {
      setError(err)
      setIsLoading(false)
    })
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="comment">Post a comment:</label>
        <textarea id="comment" type="text" onChange={handleComment} />
        <button onClick={handleSubmit}>Post</button>
      </form>
      {error ? <p>Error try again</p> : null}
    </section>
  );
};
