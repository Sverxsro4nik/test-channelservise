const apiPath = 'https://jsonplaceholder.typicode.com';

const getRoutes = {
  postsPath: () => [apiPath, 'posts'].join('/'),
  imagesPath: (id) => [apiPath, 'albums', id, 'photos'].join('/'),
  usersPath: () => [apiPath, 'users'].join('/'),
  postsPage: () => '/',
  loginPage: () => '/login',
};

export default getRoutes;
