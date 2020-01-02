import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addArticle, allArticles } from '../../actions/articles';

const ArticleList = (props) => {
  useEffect(() => {
    props.listArticles();
  }, [])

  return (
    <div>
      {
        props.articles.map((article) => {
          return (
            <div key={article.id}>
              <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              {article.content}
              <hr />
            </div>
          );
        })
      }
      <button className="btn btn-outline-primary"><Link to={`/articles/new`}>New</Link></button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    articles: state.articlesReducer.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (title, content) => dispatch(addArticle(title, content)),
    listArticles: () => dispatch(allArticles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);