import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-nc-news-377j.onrender.com',
});

export const getArticles = () => {
  return api.get('/api/articles').then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return api.get(`/api/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return api.get(`/api/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
