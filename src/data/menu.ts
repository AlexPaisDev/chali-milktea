export interface MenuItem {
  name: string
  description: string
  price: string
  tags: string[]
}

export interface MenuCategory {
  id: string
  title: string
  blurb: string
  accent: 'taro' | 'strawberry' | 'matcha' | 'caramel'
  items: MenuItem[]
}

// PLACEHOLDER — substitui pelo menu real do Chali Milk Tea (pratos, preços e
// fotos verdadeiras). Estrutura pronta a usar assim que tiveres os dados.
export const menu: MenuCategory[] = [
  {
    id: 'signature',
    title: 'Milk Teas Assinatura',
    blurb: 'Os clássicos que nunca dececionam',
    accent: 'taro',
    items: [
      {
        name: 'Taro Dream',
        description: 'Taro cremoso, leite e boba de tapioca fresquinho',
        price: '4,50€',
        tags: ['bestseller', 'sem cafeína'],
      },
      {
        name: 'Brown Sugar Boba',
        description: 'Leite fresco, calda de açúcar mascavado às riscas, boba quente',
        price: '4,80€',
        tags: ['icónico'],
      },
      {
        name: 'Classic Pearl Milk Tea',
        description: 'Chá preto encorpado, leite e pérolas de tapioca',
        price: '4,20€',
        tags: ['og'],
      },
      {
        name: 'Oreo Cookie Cream',
        description: 'Base cremosa, pedacinhos de oreo, chantilly',
        price: '4,90€',
        tags: ['sem chá'],
      },
    ],
  },
  {
    id: 'fruit',
    title: 'Fruit Teas',
    blurb: 'Fresco, ácido, viciante',
    accent: 'strawberry',
    items: [
      {
        name: 'Strawberry Lychee',
        description: 'Chá verde, morango e lichia, popping boba de morango',
        price: '4,70€',
        tags: ['favorito verão'],
      },
      {
        name: 'Passion Mango',
        description: 'Chá branco, manga e maracujá, gelo triturado',
        price: '4,70€',
        tags: ['refrescante'],
      },
      {
        name: 'Peach Oolong',
        description: 'Oolong torrado com pêssego natural',
        price: '4,50€',
        tags: ['equilibrado'],
      },
    ],
  },
  {
    id: 'matcha',
    title: 'Matcha & Coffee',
    blurb: 'Para quem gosta de amargo com doce',
    accent: 'matcha',
    items: [
      {
        name: 'Matcha Latte Boba',
        description: 'Matcha cerimonial batido à mão, leite, boba clássico',
        price: '5,00€',
        tags: ['matcha girlie'],
      },
      {
        name: 'Iced Cocoa Matcha',
        description: 'Camadas de matcha e cacau, sem misturar até ao primeiro gole',
        price: '5,20€',
        tags: ['instagramável'],
      },
      {
        name: 'Caramel Cloud Coffee',
        description: 'Café gelado, espuma de caramelo salgado',
        price: '4,60€',
        tags: ['energia'],
      },
    ],
  },
  {
    id: 'toppings',
    title: 'Toppings à tua escolha',
    blurb: 'Constrói o teu copo perfeito, +0,50€ cada',
    accent: 'caramel',
    items: [
      { name: 'Boba clássico', description: 'Pérolas de tapioca', price: '+0,50€', tags: [] },
      { name: 'Popping boba', description: 'Morango, manga ou lichia', price: '+0,60€', tags: [] },
      { name: 'Pudim', description: 'Cremoso e suave', price: '+0,60€', tags: [] },
      { name: 'Gelatina de café', description: 'Textura firme, sabor intenso', price: '+0,60€', tags: [] },
    ],
  },
]
