const MainView = () =>
  import(/* webpackChunkName: "main-view" */ '@/views/MainView.vue');

const routes = [
  {
    path: '*',
    component: MainView,
  },
];

export default routes;
