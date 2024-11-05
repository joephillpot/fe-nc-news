import { CommentCard } from './CommentCard';

export const CommentList = ({ comments }) => {
  return (
    <ul className="comment-list">
      {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.comment_id} />;
      })}
    </ul>
  );
};
