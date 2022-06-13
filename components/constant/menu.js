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
      title: 'Secretarías', megaMenu: true, megaMenuType: 'small', type: 'sub', children: [
         {
            title: 'Finanzas', type: 'sub', children: [
               { path: '/page/about-us', title: 'Integrantes', type: 'link', icon: 'alert' },
               { path: '/page/about-us', title: 'Documentos', type: 'link', icon: 'layout-accordion-merged' },
               { path: '/page/about-us', title: 'Informes', type: 'link', icon: 'layers' },
            ]
         },
         {
            title: 'Relaciones Exteriores', type: 'sub', children: [
               { path: '/page/about-us', title: 'Integrantes', type: 'link', icon: 'alert' },
               { path: '/page/about-us', title: 'Documentos', type: 'link', icon: 'layout-accordion-merged' },
               { path: '/page/about-us', title: 'Informes', type: 'link', icon: 'layers' },
            ]
         },
         {
            title: 'Prensa y propaganda', type: 'sub', children: [
               { path: '/page/about-us', title: 'Integrantes', type: 'link', icon: 'alert' },
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
         { path: '/page/collection', title: 'registro', tag: "new", type: 'link' },
         { path: '/page/collection', title: 'comparación', tag: "new", type: 'link' },
         { path: '/page/collection', title: 'proceso', type: 'link' },
         { path: '/page/lookbook', title: 'documentos', type: 'link' },
         { path: '/page/site-map', title: 'eventos', type: 'link' },
      ]
   },
   {
      title: 'Documentos Basicos', type: 'sub', tag: "new", children: [
         { path: '/page/collection', title: 'Contrato', type: 'link' },
         { path: '/page/collection', title: 'Estatutos', type: 'link' },
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

