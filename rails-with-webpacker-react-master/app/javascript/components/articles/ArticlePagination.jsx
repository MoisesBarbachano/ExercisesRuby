import React from 'react';
import { allArticles } from '../../actions/articles';
import { connect } from 'react-redux'
import styled from 'styled-components';

const ArticlePagination = (props) => {
  const ButtonStyled = styled.button`
    background-color: ${props.currentColor ? props.currentColor : "white"};
  `;
  
  const changePage = () => {
    props.listArticles(props.number, props.perPage);
  }

  return <ButtonStyled onClick={changePage}>{props.number} </ButtonStyled>
}

const mapStateToProps = (state) => {
  return {
    articles: state.articlesReducer.articles,
    pages : state.articlesReducer.pages,
    perPage : state.articlesReducer.perPage,
    currentPage : state.articlesReducer.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    listArticles: (page, quantityElements) => dispatch(allArticles(page, quantityElements))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePagination);
  