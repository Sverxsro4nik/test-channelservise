const apiPath = 'https://jsonplaceholder.typicode.com';

const getRoutes = {
  postsPath: (id) => [apiPath, 'users', id, 'posts'].join('/'),
  usersPath: () => [apiPath, 'users'].join('/'),
  imagesPath: (id) => [apiPath, 'users', id, 'albums'].join('/'),
  postsPage: () => '/',
  loginPage: () => '/login',
};

export default getRoutes;
