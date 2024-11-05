export const Article = (props) => {
  const { article } = props;

  return (
    <article>
      <h4>posted by {article.author}</h4>
      <h3>{article.topic}</h3>
      <h3>posted on {article.created_at}</h3>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <img src={article.article_img_url} alt={`${article.title} image`} />
      <p>Votes: {article.votes}</p>
    </article>
  );
};
