const routes = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', component: '../pages/index' },
      { path: '/list', component: '../pages/list/index'},
      { path: '/count', component: '../pages/count/index'}
    ]
  },
];

export default routes;
