/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  border: 5px solid #27569C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 467px;
  height: auto;
  padding: 25px 21px;
  font-weight: 800;
  line-height: 19px;
`;
const AboutPostContainer = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  display: inline-block;
  margin-right: 30px;
  margin-bottom: 11px;
`;
const PostTitle = styled.p`
  margin-bottom: 24px;
`;

const Post = ({ post, activeUser, src }) => {
  const {
    body, title,
  } = post;
  const {
    name, company,
  } = activeUser;
  return (
    <PostContainer>
      <AboutPostContainer>
        <Image src={src.url} alt={src.title}/>
        <div>
          <p>Author: {name}</p>
          <p> Company: {company.name}</p>
        </div>
      </AboutPostContainer>
      <PostTitle>Title: {title}</PostTitle>
      <p>{body}</p>
    </PostContainer>
  );
};

export default Post;
