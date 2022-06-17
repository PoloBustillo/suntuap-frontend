export const MENUITEMS = [
   {
      title: 'SUNTUAP', type: 'sub', children: [
         {
            path: '/mision-suntuap', title: 'Misión', type: 'link'
         },
         {
            path: '/vision-suntuap', title: 'Visión', type: 'link'
         },
         {
            path: '/historia-suntuap', title: 'Historia', type: 'link'
         },
         {
            path: '/organigrama', title: 'Organigrama', type: 'link'
         },
         {
            path: '/padron', title: 'Padrón', type: 'link'
         },
      ],
   },
   {
      title: 'Afiliación', type: 'sub', tag: "new", children: [
         { path: '/page/collection', title: 'Padrón', tag: "new", type: 'link' },
         { path: '/page/collection', title: 'Miembros activos', tag: "new", type: 'link' },
         { path: '/page/collection', title: 'Jubilados', type: 'link' },
         { path: '/page/lookbook', title: 'Adjudicatarios', type: 'link' },
         { path: '/page/site-map', title: 'Afilaciones', type: 'link' },
      ]
   },
   {
      title: 'Noticias/Comunicados', type: 'sub', children: [
         { path: '/blogs/blog_left_sidebar', title: 'Blog 1', type: 'link' },
         { path: '/blogs/blog_right_sidebar', title: 'Blog 2', type: 'link' },
         { path: '/blogs/no_sidebar', title: 'Blog 3', type: 'link' },
         { path: '/blogs/blog_detail', title: 'Blog 4', type: 'link' },
      ]
   },
   {
      title: 'Proyecto de vivienda', type: 'sub', children: [
         {
            path: '/shop/left_sidebar', title: 'Sección 1', type: 'sub',
            children: [{ path: '/shop/sidebar_popup', title: 'Noticias', type: 'link' },]
         },
         {
            path: '/shop/left_sidebar', title: 'Sección 2', type: 'sub',
            children: [{ path: '/shop/sidebar_popup', title: 'Noticias', type: 'link' },]
         },
         {
            path: '/shop/left_sidebar', title: 'Sección 3', type: 'sub',
            children: [{ path: '/shop/sidebar_popup', title: 'Noticias', type: 'link' },]
         },
         {
            path: '/shop/left_sidebar', title: 'Sección 4', type: 'sub',
            children: [{ path: '/shop/sidebar_popup', title: 'Noticias', type: 'link' },]
         },
         {
            path: '/shop/left_sidebar', title: 'Sección 5', type: 'sub',
            children: [{ path: '/shop/sidebar_popup', title: 'Noticias', type: 'link' },]
         },
      ]
   },
]

