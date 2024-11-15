const products = [
  {
    id: 1,
    name: "Manzana Roja",
    description: "",
    price: 149,
    uom: "Kg",
    category: "frutas",
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/472481-1200-auto?v=636694698370130000&width=1200&height=auto&aspect=true",
  },
  {
    id: 2,
    name: "Banana",
    description: "",
    price: 109,
    uom: "Kg",
    category: "frutas",
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/320502-1200-auto?v=636391554454870000&width=1200&height=auto&aspect=true",
  },
  {
    id: 3,
    name: "Naranja",
    description: "",
    price: 69,
    uom: "Kg",
    category: "frutas",
    image:
      "https://discouy.vtexassets.com/arquivos/ids/1815287-1200-auto?v=638576060182400000&width=1200&height=auto&aspect=true",
  },
  {
    id: 4,
    name: "Limón",
    description: "",
    price: 62,
    uom: "Kg",
    category: "frutas",
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/181777-1200-auto?v=636383419335130000&width=1200&height=auto&aspect=true",
  },
  {
    id: 5,
    name: "Cebolla",
    description: "",
    price: 119,
    uom: "Kg",
    category: "verduras",
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/698610-1200-auto?v=637871997724330000&width=1200&height=auto&aspect=true",
  },
  {
    id: 6,
    name: "Pimiento Rojo",
    description: "",
    price: 269,
    uom: "Kg",
    category: "verduras",
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/339349-1200-auto?v=636393041930400000&width=1200&height=auto&aspect=true",
  },
  {
    id: 7,
    name: "Zanahoria",
    description: "",
    price: 89,
    uom: "Kg",
    category: "verduras",
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/472800-1200-auto?v=636695562251270000&width=1200&height=auto&aspect=true",
  },
  {
    id: 8,
    name: "Lechuga",
    description: "",
    price: 49,
    uom: "Kg",
    category: "verduras",
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/450976-1200-auto?v=636577194077270000&width=1200&height=auto&aspect=true",
  },
  {
    id: 9,
    name: "Porotos Colorados",
    description: "",
    price: 0,
    uom: "Kg",
    category: "legumbres",
    image: "",
  },
  {
    id: 10,
    name: "Porotos Negros",
    description: "",
    price: 0,
    uom: "Kg",
    category: "legumbres",
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/203716-1200-auto?v=636383657478900000&width=1200&height=auto&aspect=true",
  },
  {
    id: 11,
    name: "Lentejas",
    description: "",
    price: 0,
    uom: "Kg",
    category: "legumbres",
    image: "",
  },
  {
    id: 12,
    name: "Garbanzos",
    description: "",
    price: 0,
    uom: "Kg",
    category: "legumbres",
    image: "",
  },
  // {
  // id: 13,
  //   name: "",
  //   description: "",
  //   price: 0,
  //   uom: "Kg",
  //   category: "legumbres",
  //   image: "",
  // },
  // {
  // id: 14,
  //   name: "",
  //   description: "",
  //   price: 0,
  //   uom: "Kg",
  //   category: "legumbres",
  //   image: "",
  // },
  // {
  // id: 15,
  //   name: "",
  //   description: "",
  //   price: 0,
  //   uom: "Kg",
  //   category: "legumbres",
  //   image: "",
  // },
  // {
  // id: 16,
  //   name: "",
  //   description: "",
  //   price: 0,
  //   uom: "Kg",
  //   category: "legumbres",
  //   image: "",
  // },
];

const filterByCategory = (category) => {
  if (!category) {
    return products;
  } else {
    return products.filter((product) => product.category == category);
  }
};

const findById = (id) => {
  if (!id) {
    return undefined;
  } else {
    return products.find((product) => product.id == id);
  }
};

const getPromise = (value, callback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback(value));
    }, 2000);
  });
};

const getDataByCategory = (category) => {
  return getPromise(category, filterByCategory);
};

const getDataById = (id) => {
  return getPromise(id, findById);
};

// const getDataByCategory = (category) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!category) {
//         resolve(products);
//       } else {
//         resolve(products.filter((product) => product.category == category));
//       }
//     }, 2000);
//   });
// };

export { getDataByCategory, getDataById };
