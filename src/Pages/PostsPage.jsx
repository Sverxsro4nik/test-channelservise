/* eslint-disable array-callback-return */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import getRoutes from '../routes/routes';
// import { getPosts } from '../slices/postsSlice';
// import Post from '../components/PostsComponents/Post';
import { getUsers, fetchUsers } from '../slices/usersSlice';
// import { fetchImages } from '../slices/imagesSlice';
// import { postAPI } from '../servise/PostServise';
// getImages, fetchPosts
const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 950px;
  margin: 0 auto;
  margin-top: 20px;
  column-gap: 13px;
  row-gap: 20px;
`;

const getData = (users) => {
  const result = users.map((user) => {
    const res1 = axios.get(getRoutes.postsPath(user.id))
      .then((response) => response.data);
    return res1.then((response) => console.log(response));
  });
  return result;
};

const PostsPage = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(getUsers);
  const res = getData(allUsers);
  console.log(res);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, fetchUsers]);
  return (
    <PostsContainer>
    </PostsContainer>
  );
};

export default PostsPage;
