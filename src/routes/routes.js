const apiPath = 'https://jsonplaceholder.typicode.com/';

const getRoutes = {
  dataPath: () => [apiPath, 'posts'].join('/'),
  postsPage: () => '/',
  loginPage: () => '/login',
};

export default getRoutes;
