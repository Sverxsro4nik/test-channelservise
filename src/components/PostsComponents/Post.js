/* eslint-disable arrow-body-style */
// import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
// import getRoutes from '../../routes/routes';

const PostContainer = styled.div`
  border: 5px solid #27569C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 467px;
  height: auto;
`;

const Post = ({ post, activeUser }) => {
  const {
    body, title,
  } = post;
  const {
    name, company,
  } = activeUser;
  return (
    <PostContainer>
      <p>{name}</p>
      <p>{company.name}</p>
      <p>{body}</p>
      <p>{title}</p>
    </PostContainer>
  );
};

export default Post;
