import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Post from '../components/PostsComponents/Post';
import getRoutes from '../routes/routes';
import { getImages, addImages } from '../slices/imagesSlice';
import { fetchPosts, getPosts } from '../slices/postsSlice';
import { getUsers, addUsers } from '../slices/usersSlice';

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
  const allUsers = useSelector(getUsers);
  const usersId = allUsers.map((user) => user.id);
  const allPosts = useSelector(getPosts);
  const allImages = useSelector(getImages);
  const needData = usersId.map((id) => {
    const [user] = allUsers.filter((actualUser) => actualUser.id === id);
    const userPost = allPosts.filter((post) => post.userId === id);
    const [image] = allImages.filter((img) => img.albumId === id);
    const { name, company } = user;
    return {
      post: userPost[0], name, companyName: company.name, image,
    };
  });
  useEffect(() => {
    const res = axios.get(getRoutes.usersPath()).then((response) => response.data)
      .then((users) => {
        dispatch(addUsers(users));
        dispatch(fetchPosts());
        const usersIds = users.map((user) => user.id);
        Promise.all(usersIds.map((id) => axios.get(getRoutes.imagesPath(id))
          .then((req) => req.data[0])))
          .then((images) => dispatch(addImages(images)));
      });
    res.then();
  }, [dispatch]);
  return (
    <PostsContainer>
      {
        needData.length === 0 ? 'Loading ...' : needData.map((post) => <Post key={post.name} post={post} />)
      }
    </PostsContainer>
  );
};

export default PostsPage;
