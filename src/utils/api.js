import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-nc-news-377j.onrender.com/api',
});

export const getArticles = () => {
  return api.get('/articles').then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const setVotes = (id, itemToUpdate, votes) => {
  return api.patch(`/${itemToUpdate}/${id}`, { inc_votes: votes }).then(({ data }) => {
    if (itemToUpdate === 'articles') {
      return data.article.votes;
    }
    if (itemToUpdate === 'comments') {
      return data.comment.votes;
    }
  });
};
