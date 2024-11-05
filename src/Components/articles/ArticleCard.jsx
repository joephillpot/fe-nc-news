import { Link } from 'react-router-dom';

export const ArticleCard = ({ article }) => {
  return (
    <div className="article-card-container">
      <li className="article-card" key={article.article_id}>
        <h4>posted by {article.author}</h4>
        <h3>{article.topic}</h3>
        <p>TempVoteCount: {article.votes}</p>
        <Link to={`/article/${article.article_id}`}>
          <h2>{article.title}</h2>
          <img className="article-img" src={article.article_img_url} alt={`${article.title} image`} />
          <p>Comments: {article.comment_count}</p>
        </Link>
      </li>
    </div>
  );
};
