import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addArticle, allArticles } from '../../actions/articles';
import ArticlePagination from './ArticlePagination';

const ArticleList = (props) => {
  useEffect(() => {
    props.listArticles(props.currentPage, props.perPage);
  }, [])  

  const checkPages = () => {
    const plusToPage = 1;

    let clientPage = 0; //currentPage
    let pagination = [];
    let pages = [...Array(props.pages).keys()];
    
    pages.forEach(page => {
      clientPage = page + plusToPage;
      if(props.currentPage == clientPage){
        return pagination.push(<ArticlePagination currentColor="gray" number={clientPage} key={page}/>);
      }
      pagination.push(<ArticlePagination number={clientPage} key={page}/>);
    });
    
    return pagination
  }

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
      {
        checkPages() //initializePagination
      }
      <hr/>
      <button className="btn btn-outline-primary"><Link to={`/articles/new`}>New</Link></button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    articles: state.articlesReducer.articles,
    pages : state.articlesReducer.pages,
    perPage : state.articlesReducer.perPage, //perPage
    currentPage : state.articlesReducer.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (title, content) => dispatch(addArticle(title, content)),
    listArticles: (page, quantityElements) => dispatch(allArticles(page, quantityElements)) //perPage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);