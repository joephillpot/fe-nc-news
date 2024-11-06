import { Votes } from "../votes/Votes";

export const CommentCard = ({ comment }) => {
  return (
    <li className="comment">
      <h3>posted by {comment.author}</h3>
      <p>{comment.created_at}</p>
      <p>{comment.body}</p>
      <Votes votes={comment.votes} id={comment.comment_id} itemToUpdate='comments' />
    </li>
  );
};
