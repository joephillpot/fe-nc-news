import { ArticleCard } from './ArticleCard';

export const ArticlesList = ({ articleFeed }) => {
  return (
    <section className="article-list-container">
      <ul className="article-list">
        {articleFeed.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </section>
  );
};
