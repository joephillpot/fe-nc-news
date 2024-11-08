import { useState, useEffect } from 'react';
import { Error } from '../Error';
import { Loading } from '../Loading';
import { getTopics } from '../../utils/api';
import { TopicsList } from './TopicsList';


export const TopicSection = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTopics()
      .then((topics) => {
        setIsLoading(false);
        setError(null);
        setTopics(topics);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <section>
      <TopicsList topics={topics} />
    </section>
  );
};
