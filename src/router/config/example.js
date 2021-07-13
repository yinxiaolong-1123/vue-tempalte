export default [
  {
    path: '/example',
    name: 'example',
    component: resolve => require(['views/example'], resolve),
  }
];