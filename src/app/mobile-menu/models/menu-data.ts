// menu-data.ts
export const MENU_ITEMS = [
    { 
      title: 'Home', 
      route: '/home', 
      subMenu: [] 
    },
    { 
      title: 'About', 
      route: '/about', 
      subMenu: [] 
    },
    { 
      title: 'Product', 
      route: '/product', 
      subMenu: [
        { title: 'Product 1', route: '/product/1' },
        { title: 'Product 2', route: '/product/2' },
        { title: 'Product 3', route: '/product/3' },
      ] 
    },
    { 
      title: 'Service', 
      route: '/service', 
      subMenu: [
        { title: 'Service 1', route: '/service/1' },
        { title: 'Service 2', route: '/service/2' },
        { title: 'Service 3', route: '/service/3' },
      ] 
    },
    { 
      title: 'Contact', 
      route: '/contact', 
      subMenu: [] 
    },
  ];
  