export const products = {
  torty: {
    title: "Torty",
    intro: "Na ważne chwile i jeszcze ważniejsze wspomnienia.",
    items: [
      {
        id: 1,
        name: "Tort wiśniowy",
        description: "Czekolada, wiśnie i delikatny krem mascarpone.",
        price: "149 zł",
      },
      {
        id: 2,
        name: "Tort waniliowy",
        description: "Waniliowy biszkopt, krem śmietankowy i świeże owoce.",
        price: "139 zł",
      },
      {
        id: 3,
        name: "Tort czekoladowy",
        description: "Intensywnie czekoladowy, z chrupiącą praliną.",
        price: "159 zł",
      },
    ],
  },

  ciasta: {
    title: "Ciasta",
    intro: "Domowe smaki, które najlepiej smakują przy wspólnym stole.",
    items: [
      {
        id: 4,
        name: "Sernik wiśniowy",
        description: "Kremowy sernik z wiśniami i kruchym spodem.",
        price: "42 zł",
      },
      {
        id: 5,
        name: "Szarlotka",
        description: "Prażone jabłka, cynamon i maślana kruszonka.",
        price: "38 zł",
      },
      {
        id: 6,
        name: "Ciasto czekoladowe",
        description: "Wilgotne ciasto z polewą z gorzkiej czekolady.",
        price: "40 zł",
      },
    ],
  },

  desery: {
    title: "Desery",
    intro: "Małe przyjemności na dobry dzień.",
    items: [
      {
        id: 7,
        name: "Pucharek wiśniowy",
        description: "Krem mascarpone, wiśnie i chrupiąca beza.",
        price: "19 zł",
      },
      {
        id: 8,
        name: "Tartaletka owocowa",
        description: "Kruchy spód, krem waniliowy i sezonowe owoce.",
        price: "17 zł",
      },
      {
        id: 9,
        name: "Mousse czekoladowy",
        description: "Lekki mus z belgijskiej czekolady.",
        price: "18 zł",
      },
    ],
  },
};

export const categoryOptions = Object.entries(products).map(([key, data]) => ({
  key,
  label: data.title,
}));

export const allProducts = Object.entries(products).flatMap(
  ([category, data]) =>
    data.items.map((product) => ({
      ...product,
      category,
    })),
);
