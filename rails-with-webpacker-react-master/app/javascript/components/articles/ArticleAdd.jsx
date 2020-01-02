import React, { useState } from 'react';
import Form from './Form';
import axios from 'axios';

const ArticleAdd = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('api/articles', {
      title: title,
      content: content
    })
      .then(response => response.data)
      .then(data => {
        props.history.push(`/articles/${data.id}`);
      })
      .catch(error => {
        return error;
      });
  }

  const handleChange = (event) => {
    if (event.target.name == 'title') return setTitle(event.target.value);
    if (event.target.name == 'content') return setContent(event.target.value);
  }

  const handleCancel = () => {
    props.history.push("/articles");
  }

  const article = {
    title: title,
    content: content
  };

  const settings = {
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    handleCancel: handleCancel,
    actionLabel: 'Create'
  };

  return (
    <div>
      <h1>{title}</h1>
      <Form article={article} settings={settings} />
    </div>
  );
}

export default ArticleAdd;