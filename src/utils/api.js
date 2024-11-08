import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-nc-news-377j.onrender.com/api',
});

export const getArticles = (topic) => {
  return api
    .get('/articles', {
      params: {
        topic: topic,
      },
    })
    .then(({ data }) => {
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
      return data.updatedComment.votes;
    }
  });
};

export const postComment = (article_id, user, comment) => {
  return api.post(`/articles/${article_id}/comments`, { author: user, body: comment })
};

export const deleteItem = (id, itemToDelete) => {
  console.log(id, itemToDelete);
  return api.delete(`/${itemToDelete}/${id}`);
};

export const getTopics = () => {
  return api.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
};
