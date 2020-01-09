import * as actionTypes from '../constants/actionTypes';
import ArticlesApi from '../api/articlesApi';

export const addArticle = (title, content) => {
  return (dispatch) => {
    return ArticlesApi.addArticle(title, content).then(article => {
      return ArticlesApi.getArticles().then(articles => {
        dispatch(successLoadArticles(articles));
      })
    }).catch(error => {
      console.log('error', error)
    });
  }
}

export const editArticle = (id) => {
  return {
    type: actionTypes.EDIT_ARTICLE,
    id: id
  };
}

export const infoArticle = (id) => {
  return (dispatch) => {
    return ArticlesApi.getArticle(id).then(article => {
      dispatch(successShowArticle(article))
    })
      .catch(error => console.log('error', error));
  }
}

export const successShowArticle = (article) => {
  return {
    type: actionTypes.INFO_ARTICLE,
    article
  }
}

export const removeArticle = (id) => {
  return {
    type: actionTypes.REMOVE_ARTICLE,
    id: id
  };
}

export const allArticles = (page, quantityElements) => {
  return (dispatch) => {
    return ArticlesApi.getArticles(page, quantityElements).then(infoArticles => {
      dispatch(successLoadArticles(infoArticles));
    }).catch(error => {
      console.log('error', error)
    });
  }
}

export const successLoadArticles = (infoArticles) => {
  return {
    type: actionTypes.ALL_ARTICLES,
    infoArticles
  };
}