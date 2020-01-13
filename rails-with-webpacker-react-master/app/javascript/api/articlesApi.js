import axios from 'axios';

class ArticlesApi {
  static getArticles(page = null, perPage = null) {
    return axios.get('api/articles', {
      params: {
        page: page,
        quantityElements: perPage
      }
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }

  static addArticle(title, content) {
    return axios.post('api/articles', {
      title: title,
      content: content
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }

  static getArticle(id) {
    return axios.get(`api/articles/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      })
  }
}

export default ArticlesApi;