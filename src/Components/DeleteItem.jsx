import { useState } from 'react';
import { deleteItem } from '../utils/api';
import { Loading } from './Loading';

export const DeleteItem = ({ id, itemToDelete, setCommentChanged }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    deleteItem(id, itemToDelete)
      .then(() => {
        setIsLoading(false);
        setError(null);
        setCommentChanged(true);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="delete-button">
      <button onClick={handleDelete}>Delete</button>
      {error ? <p>Error try again</p> : null}
    </div>
  );
};
