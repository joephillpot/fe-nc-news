import { TopicCard } from './TopicCard';

export const TopicsList = ({ topics }) => {
  return (
    <ul className="topic-list">
      {topics.map((topic) => {
        return <TopicCard topic={topic} key={topic.slug} />;
      })}
    </ul>
  );
};
