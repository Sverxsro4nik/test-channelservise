const apiPath = 'https://jsonplaceholder.typicode.com';

const getRoutes = {
  postsPath: () => [apiPath, 'posts'].join('/'),
  usersPath: (id) => [apiPath, `?userId=${id}`].join('/'),
  imagesPath: (id) => [apiPath, `users?userId=${id}`].join('/'),
  postsPage: () => '/',
  loginPage: () => '/login',
};

export default getRoutes;
