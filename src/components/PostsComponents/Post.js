import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import getRoutes from '../../routes/routes';

const PostContainer = styled.div`
  border: 5px solid #27569C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 467px;
  height: auto;
`;

const Post = async (props) => {
  const {
    userId, id, body, title,
  } = props.post;
  const { data } = await axios.get(getRoutes.usersPath(userId));
  console.log(data);
  return (
    <PostContainer>
      <p>{userId}</p>
      <p>{id}</p>
      <p>{body}</p>
      <p>{title}</p>
    </PostContainer>
  );
};

export default Post;
