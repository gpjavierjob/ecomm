const categories = [
  {
    id: 1,
    name: "Frutas",
    tag: "frutas",
  },
  {
    id: 2,
    name: "Verduras",
    tag: "verduras",
  },
  {
    id: 3,
    name: "Legumbres",
    tag: "legumbres",
  },
  {
    id: 4,
    name: "Condimentos",
    tag: "condimentos",
  },
];

const products = [
  {
    id: 1,
    name: "Manzana Roja",
    description:
      "Manzanas rojas frescas, perfectas para un snack saludable o para agregar a tus postres. Precio por 1 Kg.",
    price: 149,
    uom: "1 Kg",
    category: {
      id: 1,
      name: "Frutas",
      tag: "frutas",
    },
    stock: 10,
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/472481-1200-auto?v=636694698370130000&width=1200&height=auto&aspect=true",
  },
  {
    id: 2,
    name: "Banana",
    description:
      "Bananas dulces y maduras, ideales para consumir frescas o en batidos. Precio por 1 Kg.",
    price: 109,
    uom: "1 Kg",
    category: {
      id: 1,
      name: "Frutas",
      tag: "frutas",
    },
    stock: 10,
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/320502-1200-auto?v=636391554454870000&width=1200&height=auto&aspect=true",
  },
  {
    id: 3,
    name: "Naranja",
    description:
      "Naranjas jugosas y llenas de vitamina C, perfectas para jugos frescos. Precio por 1 Kg.",
    price: 69,
    uom: "1 Kg",
    category: {
      id: 1,
      name: "Frutas",
      tag: "frutas",
    },
    stock: 10,
    image:
      "https://discouy.vtexassets.com/arquivos/ids/1815287-1200-auto?v=638576060182400000&width=1200&height=auto&aspect=true",
  },
  {
    id: 4,
    name: "Limón",
    description:
      "Limones frescos, excelentes para aderezos, jugos y dar sabor a tus platillos. Precio por 1 Kg.",
    price: 62,
    uom: "1 Kg",
    category: {
      id: 1,
      name: "Frutas",
      tag: "frutas",
    },
    stock: 10,
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/181777-1200-auto?v=636383419335130000&width=1200&height=auto&aspect=true",
  },
  {
    id: 5,
    name: "Cebolla",
    description:
      "Cebollas frescas, el ingrediente básico para una gran variedad de recetas. Precio por 1 Kg.",
    price: 119,
    uom: "1 Kg",
    category: {
      id: 2,
      name: "Verduras",
      tag: "verduras",
    },
    stock: 10,
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/698610-1200-auto?v=637871997724330000&width=1200&height=auto&aspect=true",
  },
  {
    id: 6,
    name: "Morrón Rojo",
    description:
      "Morrón rojo fresco y crujiente, ideal para ensaladas y guisos. Precio por 1 Kg.",
    price: 269,
    uom: "1 Kg",
    category: {
      id: 2,
      name: "Verduras",
      tag: "verduras",
    },
    stock: 10,
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/339349-1200-auto?v=636393041930400000&width=1200&height=auto&aspect=true",
  },
  {
    id: 7,
    name: "Zanahoria",
    description:
      "Zanahorias frescas y llenas de sabor, perfectas para ensaladas y guisos. Precio por 1 Kg.",
    price: 89,
    uom: "1 Kg",
    category: {
      id: 2,
      name: "Verduras",
      tag: "verduras",
    },
    stock: 10,
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/472800-1200-auto?v=636695562251270000&width=1200&height=auto&aspect=true",
  },
  {
    id: 8,
    name: "Lechuga",
    description:
      "Lechuga fresca y crujiente, ideal para ensaladas y acompañamientos. Precio por 1 Kg.",
    price: 49,
    uom: "1 Kg",
    category: {
      id: 2,
      name: "Verduras",
      tag: "verduras",
    },
    stock: 10,
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/450976-1200-auto?v=636577194077270000&width=1200&height=auto&aspect=true",
  },
  {
    id: 9,
    name: "Porotos Colorados",
    description:
      "Porotos colorados de alta calidad, ideales para guisos y ensaladas. Precio por 500 g.",
    price: 89,
    uom: "500 g",
    category: {
      id: 3,
      name: "Legumbres",
      tag: "legumbres",
    },
    stock: 10,
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/783041-1200-auto?v=638206690659400000&width=1200&height=auto&aspect=true",
  },
  {
    id: 10,
    name: "Porotos Negros",
    description:
      "Porotos negros ideales para platos tradicionales y ensaladas. Precio por 500 g.",
    price: 98,
    uom: "500 g",
    category: {
      id: 3,
      name: "Legumbres",
      tag: "legumbres",
    },
    stock: 10,
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/203716-1200-auto?v=636383657478900000&width=1200&height=auto&aspect=true",
  },
  {
    id: 11,
    name: "Lentejas",
    description:
      "Lentejas nutritivas, perfectas para guisos, sopas y ensaladas. Precio por 500 g.",
    price: 89,
    uom: "500 g",
    category: {
      id: 3,
      name: "Legumbres",
      tag: "legumbres",
    },
    stock: 10,
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/432623-1200-auto?v=636513312382800000&width=1200&height=auto&aspect=true",
  },
  {
    id: 12,
    name: "Arvejas",
    description:
      "Arvejas frescas, ideales para acompañamientos y ensaladas. Precio por 500 g.",
    price: 120,
    uom: "500 g",
    category: {
      id: 3,
      name: "Legumbres",
      tag: "legumbres",
    },
    stock: 10,
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/432624-1200-auto?v=636513312385730000&width=1200&height=auto&aspect=true",
  },
  // {
  //   id: 13,
  //   name: "Orégano",
  //   description:
  //     "Orégano seco para condimentar tus comidas con un toque mediterráneo. Precio por 50 g.",
  //   price: 124,
  //   uom: "50 g",
  //   category: {
  //     id: 4,
  //     name: "Condimentos",
  //     tag: "condimentos",
  //   },
  //   stock: 10,
  //   image:
  //     "https://tatauy.vtexassets.com/unsafe/0x0/center/middle/https%3A%2F%2Ftatauy.vtexassets.com%2Farquivos%2Fids%2F167020%2FCONDIMENTO-OREGANO-LA-MANCHEG-SOBRE-5000-G-1-6836.jpg%3Fv%3D637093979538330000",
  // },
  // {
  //   id: 14,
  //   name: "Azafrán",
  //   description:
  //     "Azafrán de alta calidad, perfecto para dar color y sabor a tus recetas. Precio por 125 ml.",
  //   price: 279,
  //   uom: "125 ml",
  //   category: {
  //     id: 4,
  //     name: "Condimentos",
  //     tag: "condimentos",
  //   },
  //   stock: 10,
  //   image:
  //     "https://tatauy.vtexassets.com/unsafe/0x0/center/middle/https%3A%2F%2Ftatauy.vtexassets.com%2Farquivos%2Fids%2F203404%2FAzafran-Molido-4-Sobres-Safrina-125-Ml-1-6912.jpg%3Fv%3D637526825121500000",
  // },
  // {
  //   id: 15,
  //   name: "Cúrcuma",
  //   description:
  //     "Cúrcuma aromática, ideal para sazonar tus platos con un toque exótico. Precio por 40 g.",
  //   price: 117,
  //   uom: "40 g",
  //   category: {
  //     id: 4,
  //     name: "Condimentos",
  //     tag: "condimentos",
  //   },
  //   stock: 10,
  //   image:
  //     "https://tatauy.vtexassets.com/unsafe/0x0/center/middle/https%3A%2F%2Ftatauy.vtexassets.com%2Farquivos%2Fids%2F691331%2FCondimento-Curcuma-Monte-Cudine-40-G-1-39220.jpg%3Fv%3D638354325939830000",
  // },
  // {
  //   id: 16,
  //   name: "Chimichurri",
  //   description:
  //     "Chimichurri clásico para aderezar carnes y acompañar tus comidas. Precio por 70 g.",
  //   price: 143,
  //   uom: "70 g",
  //   category: {
  //     id: 4,
  //     name: "Condimentos",
  //     tag: "condimentos",
  //   },
  //   stock: 10,
  //   image:
  //     "https://tatauy.vtexassets.com/unsafe/0x0/center/middle/https%3A%2F%2Ftatauy.vtexassets.com%2Farquivos%2Fids%2F374679%2FCondimento-Chimichurri-Monte-Cudine-Frasco-70-G-1-6901.jpg%3Fv%3D637897813492300000",
  // },
];

const _getCategories = () => categories;

const _getProductByCategory = (category) => {
  if (!category) {
    return products;
  } else {
    return products.filter((product) => product.category.tag == category);
  }
};

const _findProduct = (id) => {
  if (!id) {
    return undefined;
  } else {
    return products.find((product) => product.id == id);
  }
};

const getPromise = (callback, value = undefined) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value === undefined ? callback() : callback(value));
    }, 2000);
  });
};

const getCategories = () => {
  return getPromise(_getCategories);
};

const getProductByCategory = (category) => {
  return getPromise(_getProductByCategory, category);
};

const getProduct = (id) => {
  return getPromise(_findProduct, id);
};

export { getCategories, getProductByCategory, getProduct };
