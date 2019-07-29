const tripRoutes = [
  {
    path: '/trip',
    name: 'trip',
    component: () => import('@/views/trip/trip'),
    // 窗口上面的名字 类似于 html文件的title
    meta: {
      title: '出行'
    },
    children: [
      {
        path: 'map',
        name: 'Map',
        component: () => import('@/components/MapLocaltion/index'),
        meta: {
          title: '地图'
        }
      }
    ]
  }
]
export default tripRoutes