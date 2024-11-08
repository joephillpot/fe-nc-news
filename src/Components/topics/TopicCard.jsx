import { Link } from 'react-router-dom';

export const TopicCard = ({ topic }) => {
  return (
    <ul className="topic-card">
      <Link to={`/topics/${topic.slug}`}>
        <h2>{topic.slug}</h2>
        <p>{topic.description}</p>
      </Link>
    </ul>
  );
};
