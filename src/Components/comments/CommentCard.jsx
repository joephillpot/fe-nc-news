import { Votes } from "../votes/Votes";
import { UserContext } from "../../context/user";
import { useContext } from "react";
import { DeleteItem } from "../DeleteItem";

export const CommentCard = ({ comment, setCommentChanged }) => {

  const { user } = useContext(UserContext)

  return (
    <li className="comment">
      <h3>posted by {comment.author}</h3>
      <p>{comment.created_at}</p>
      <p>{comment.body}</p>
      <Votes votes={comment.votes} id={comment.comment_id} itemToUpdate='comments' />
      {user === comment.author ? <DeleteItem id={comment.comment_id} itemToDelete='comments' setCommentChanged={setCommentChanged} /> : null}
    </li>
  );
};
