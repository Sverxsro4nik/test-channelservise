import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchPosts, getPosts } from '../slices/postsSlice';
import Post from '../components/PostsComponents/Post';
import { getDefaultUserId, getUsers, fetchUsers } from '../slices/usersSlice';

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PostsPage = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(getPosts);
  const allUsers = useSelector(getUsers);
  const defaultUserId = useSelector(getDefaultUserId);
  const [activeUser] = allUsers.filter((user) => user.id === defaultUserId);
  console.log(activeUser);
  console.log(allPosts);
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts(defaultUserId));
  }, [dispatch]);
  return (
    <PostsContainer>
      {
        allPosts ? allPosts.map((post) => <Post
          key={post.id} post={post} activeUser={activeUser} />) : null
      }
    </PostsContainer>
  );
};

export default PostsPage;
