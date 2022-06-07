export const MENUITEMS = [
   {
      title: 'Eventos', type: 'sub', children: [
         {
            path: '/shop/left_sidebar', title: 'Culturales', type: 'sub',
            children: [{ path: '/shop/sidebar_popup', title: 'Proyecciones', type: 'link' },]
         },
         {
            path: '/shop/right_sidebar', title: 'Políticos', type: 'sub',
            children: [{ path: '/shop/sidebar_popup', title: 'Evento 1', type: 'link' },]
         },
         {
            path: '/shop/no_sidebar', title: 'Sociales', type: 'sub',
            children: [{ path: '/shop/sidebar_popup', title: 'Evento 1', type: 'link' },]
         },
      ],
   },
   {
      title: 'Secretarías', megaMenu: true, megaMenuType: 'small', type: 'sub', children: [
         {
            title: 'Finanzas', type: 'sub', children: [
               { path: '/portfolio/grid-2', title: 'Integrantes', type: 'link', icon: 'alert' },
               { path: '/portfolio/grid-3', title: 'Documentos', type: 'link', icon: 'layout-accordion-merged' },
               { path: '/portfolio/grid-4', title: 'Informes', type: 'link', icon: 'layers' },
            ]
         },
         {
            title: 'Relaciones Exteriores', type: 'sub', children: [
               { path: '/portfolio/grid-2', title: 'Integrantes', type: 'link', icon: 'alert' },
               { path: '/portfolio/grid-3', title: 'Documentos', type: 'link', icon: 'layout-accordion-merged' },
               { path: '/portfolio/grid-4', title: 'Informes', type: 'link', icon: 'layers' },
            ]
         },
         {
            title: 'Prensa y propaganda', type: 'sub', children: [
               { path: '/portfolio/grid-2', title: 'Integrantes', type: 'link', icon: 'alert' },
               { path: '/portfolio/grid-3', title: 'Documentos', type: 'link', icon: 'layout-accordion-merged' },
               { path: '/portfolio/grid-4', title: 'Informes', type: 'link', icon: 'layers' },
            ]
         },
         {
            title: 'Formación Política', type: 'sub', children: [
               { path: '/portfolio/grid-2', title: 'Integrantes', type: 'link', icon: 'alert' },
               { path: '/portfolio/grid-3', title: 'Documentos', type: 'link', icon: 'layout-accordion-merged' },
               { path: '/portfolio/grid-4', title: 'Informes', type: 'link', icon: 'layers' },
            ]
         },
         {
            title: 'Vivienda', type: 'sub', children: [
               { path: '/portfolio/grid-2', title: 'Integrantes', type: 'link', icon: 'alert' },
               { path: '/portfolio/grid-3', title: 'Documentos', type: 'link', icon: 'layout-accordion-merged' },
               { path: '/portfolio/grid-4', title: 'Informes', type: 'link', icon: 'layers' },
            ]
         }
      ]
   },
   {
      title: 'Afiliación', type: 'sub', tag: "new", children: [
         { path: '/page/collection', title: 'proceso', tag: "new", type: 'link' },
         { path: '/page/lookbook', title: 'documentos', tag: "new", type: 'link' },
         { path: '/page/site-map', title: 'eventos', tag: "new", type: 'link' },
      ]
   },
   {
      title: 'Vaquerias', type: 'sub', children: [
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
   {
      title: 'Otros', type: 'sub', children: [
         { path: '/blogs/blog_left_sidebar', title: 'Blog 1', type: 'link' },
         { path: '/blogs/blog_right_sidebar', title: 'Blog 2', type: 'link' },
         { path: '/blogs/no_sidebar', title: 'Blog 3', type: 'link' },
         { path: '/blogs/blog_detail', title: 'Blog 4', type: 'link' },
      ]
   },
]

