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
      title: 'Afiliación', path: '/page/collection', type: 'link', tag: "new", children: [
         { path: 'https://docs.google.com/forms/d/1iV5h7hGOkdRkai9777qJAEUIg35RKHYoQ1aCGHheH2w/prefill', title: 'Proceso', tag: "new", type: 'link' },
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

