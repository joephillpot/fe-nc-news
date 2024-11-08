import { Link } from 'react-router-dom';
import { Votes } from '../votes/Votes';

export const ArticleCard = ({ article }) => {
  return (
    <section className="article-card-container">
      <li className="article-card" key={article.article_id}>
        <h4>posted by {article.author}</h4>
        <Link to={`/topics/${article.topic}`}><h3>{article.topic}</h3></Link>
        <Votes votes={article.votes} id={article.article_id} itemToUpdate="articles" />
        <Link to={`/article/${article.article_id}`}>
          <h2>{article.title}</h2>
          <img className="article-img" src={article.article_img_url} alt={`${article.title} image`} />
          <p>Comments: {article.comment_count}</p>
        </Link>
      </li>
    </section>
  );
};
