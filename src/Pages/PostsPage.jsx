import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchPosts, getPosts } from '../slices/postsSlice';
import Post from '../components/PostsComponents/Post';
// import { getDefaultUserId } from '../slices/usersSlice';

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PostsPage = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(getPosts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <PostsContainer>
      {
        allPosts.map((post) => <Post key={post.id} post={post}/>)
      }
    </PostsContainer>
  );
};

export default PostsPage;
