
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/cryptocola',
    component: () => import('layouts/DbcolaLayout.vue'),
    children: [
      { path: ''        , component: () => import('pages/Index.vue') },
      //{ path: 'position', component: () => import('pages/cryptocola/position.vue') , props: (route) => ({ reqTime: route.query.reqTime }) },
      { path: 'position/:reqtime', component: () => import('pages/cryptocola/position.vue') ,  name: 'Params', props: true},
      { path: 'candle'  , component: () => import('pages/cryptocola/candle.vue') }
    ]
  },

  {
    path: '/dbcola',
    component: () => import('layouts/DbcolaLayout.vue'),
    children: [
      { path: ''        , component: () => import('pages/dbcola/index.vue') },
      { path: '2'       , component: () => import('pages/dbcola/index2.vue') },
      { path: 'simple'  , component: () => import('pages/dbcola/simple.vue') },
      { path: 'position', component: () => import('src/pages/cryptocola/position.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
