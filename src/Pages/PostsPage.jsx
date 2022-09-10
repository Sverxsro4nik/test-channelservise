/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import getRoutes from '../routes/routes';
import { imageAPI } from '../servise/ImagesServise';
import { getImages, setImages } from '../slices/imagesSlice';
import { fetchPosts, getPosts } from '../slices/postsSlice';
import { getUsers, fetchUsers } from '../slices/usersSlice';

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 950px;
  margin: 0 auto;
  margin-top: 20px;
  column-gap: 13px;
  row-gap: 20px;
`;

const PostsPage = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(getPosts);
  const allUsers = useSelector(getUsers);
  const allImages = useSelector(getImages);
  const usersId = allUsers.map((user) => user.id);
  const needPosts = usersId.map((id) => {
    const userPost = allPosts.filter((post) => post.userId === id);
    return { post: userPost[0] };
  });
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
    Promise.all(usersId.map((id) => axios
      .get(getRoutes.imagesPath(id)).then((response) => response.data[0])))
      .then((images) => dispatch(setImages(images)));
  }, [usersId, allImages]);
  return (
    <PostsContainer>
    </PostsContainer>
  );
};

export default PostsPage;
