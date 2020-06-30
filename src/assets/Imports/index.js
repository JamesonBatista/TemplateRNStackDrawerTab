const ICONS = {
  LOGO: require('../logo.png'),
  MENU_HOME: require('../menu.png'),
  HOME: require('../home.png'),
  HOME_OUTLINE: require('../home-outline.png'),
  SETTINGS: require('../settings.png'),
  SETTINGS_OUTLINE: require('../settings-outline.png'),
  EXIT: require('../logout.png'),
  BACK: require('../back.png'),
  USER: require('../user.png'),
  USER_OUTLINE: require('../user-outline.png'),
  CATEGORY: require('../category.png'),
  CATEGORY_OUTLINE: require('../category-outline.png'),
  WALLET: require('../walletBox.png'),
  WALLET_OUTLINE: require('../wallet.png'),
  ADD: require('../add.png'),
  REMOVE: require('../remove.png'),
  CHECKED: require('../checked.png'),
  UNCHECKED: require('../unchecked.png'),
  ARROW: require('../arrow.png'),
  PIZZA: require('../pizza.png'),
};
export {ICONS};

export const DRAWER = [
  {name: 'Home', icon: ICONS.HOME, text: 'Início'},
  {name: 'Usuário', icon: ICONS.USER, text: 'Usuário'},
  {name: 'Categorias', icon: ICONS.CATEGORY, text: 'Categorias'},
  {name: 'Pagamento', icon: ICONS.WALLET, text: 'Pagamento'},
  {name: 'Settings', icon: ICONS.SETTINGS, text: 'Opções'},
];

export const DATA = [
  {
    id: 1,
    name: 'Pizza Mussarela',
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
    price: 40,
    view: false,
    image:
      'https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?cs=srgb&dl=pepperoni-pizza-803290.jpg&fm=jpg',
  },
  {
    id: 2,
    name: 'Pizza Vegana',
    description: 'oregno, alecrim, folhas, alface, tomate, rucula',
    price: 50,
    view: false,

    image:
      'https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?cs=srgb&dl=tomato-pizza-208537.jpg&fm=jpg',
  },
  {
    id: 3,
    name: 'Pizza Portuguesa',
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos, ovos, pimenta',
    price: 58,
    image:
      'https://images.pexels.com/photos/1069449/pexels-photo-1069449.jpeg?cs=srgb&dl=photography-of-pizza-with-olive-toppings-1069449.jpg&fm=jpg',
  },
  {
    id: 4,
    name: 'Pizza Calabresa',
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
    price: 25,
    image:
      'https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?cs=srgb&dl=baked-pepperoni-pizza-774487.jpg&fm=jpg',
  },
  {
    id: 5,
    name: 'Pizza Frango com Catupiry',
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
    price: 35,
    image:
      'https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?cs=srgb&dl=close-up-photography-of-pizza-1166120.jpg&fm=jpg',
  },
  {
    id: 6,
    name: 'Pizza Chocolate',
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
    price: 45,
    image:
      'https://images.pexels.com/photos/1069450/pexels-photo-1069450.jpeg?cs=srgb&dl=baked-pizza-beside-two-red-tomatoes-1069450.jpg&fm=jpg',
  },
  {
    id: 7,
    name: 'Pizza Italiana',
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
    price: 55,
    image:
      'https://images.pexels.com/photos/1069450/pexels-photo-1069450.jpeg?cs=srgb&dl=baked-pizza-beside-two-red-tomatoes-1069450.jpg&fm=jpg',
  },
  {
    id: 8,
    name: 'Pizza Massa de Pão',
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
    price: 65,
    image:
      'https://images.pexels.com/photos/3762075/pexels-photo-3762075.jpeg?cs=srgb&dl=person-holding-pizza-on-wooden-board-3762075.jpg&fm=jpg',
  },
  {
    id: 9,
    name: 'Pizza Carne Moída',
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
    price: 60,
    image:
      'https://images.pexels.com/photos/2274787/pexels-photo-2274787.jpeg?cs=srgb&dl=pizza-with-raisins-on-top-2274787.jpg&fm=jpg',
  },
];

const LOGO = {
  LOGO_LOGIN: require('../logoLogin.png'),
  LOGO_SUCESS: require('../sucess.png'),
};
export {LOGO};

const PIZZAS = [
  {
    id: 1,
    name: 'Pizza de Mussarela',
    price: 25,
    view: false,
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
  },
  {
    id: 2,
    name: 'Pizza de Chocolate',
    price: 35,
    view: false,
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
  },
  {
    id: 3,
    name: 'Pizza  Italiana',
    price: 45,
    view: false,
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
  },
];

export {PIZZAS};

const MASSAS = [
  {
    id: 4,
    name: ' Mussarela',
    price: 55,
    view: false,
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
  },
  {
    id: 5,
    name: ' Chocolate',
    price: 65,
    view: false,
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
  },
  {
    id: 6,
    name: ' Italiana',
    price: 75,
    view: false,
    description:
      'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
  },
];
export {MASSAS};

const TWOPIZZAS = [
  {
    GRANDE: [
      {
        id: 1,
        name: 'Pizza de Mussarela',
        price: 25,
        view: false,
        description:
          'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
      },
    ],
  },
  {
    MEDIA: [
      {
        id: 1,
        name: 'Pizza de Mussarela',
        price: 25,
        view: false,
        description:
          'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
      },
    ],
  },
  {
    PEQUENA: [
      {
        id: 1,
        name: 'Pizza de Mussarela',
        price: 25,
        view: false,
        description:
          'Queijo mussarela, oregano, alecrim, molho de tomate 4 queijos',
      },
    ],
  },
];
export {TWOPIZZAS};
