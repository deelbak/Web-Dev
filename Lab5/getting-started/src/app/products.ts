export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  link: string;
  img: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone 13 Rose 128gb',
    price: 420990,
    description: 'A large phone with one of the best screens',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg',
    category : 'Phones'
  },
  {
    id: 2,
    name: 'iPhone 12 Mini Space Gray 64gb',
    price: 289000,
    description: 'A great phone with one of the best cameras',
    rating: 3,
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-mini-64gb-chernyi-100657220/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/h73/33277047406622/apple-iphone-12-mini-64gb-cernyj-100657220-1-Container.jpg',
    category : 'Phones'
  },
  {
    id: 3,
    name: 'TV Samsung NEO QE85QN90AAUXCE',
    price: 2999000,
    description: '8K',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-neo-qe85qn90aauxce-216-sm-chernyi-103334007/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/h33/48044011323422/samsung-neo-qe85qn90aauxce-103334007-1.jpg',
    category: 'Computers or gadgets for computer'
  },
  {
    id : 4,
    name : 'Mouse Apple',
    price: 47000,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-magic-mouse-2-usb-c-belyi-103539318/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/hf6/48468771209246/apple-magic-mouse-3-belyj-103539318-1.jpg',
    category: 'Computers or gadgets for computer'

  },
  {
    id : 5,
    name : 'Monitor Asus',
    price: 37280,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/asus-vs197de-chernyi-1700517/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/hc1/50962388779038/asus-vs197de-black-1700517-1-Container.jpg',
    category: 'Computers or gadgets for computer'
  },
  {
    id : 6,
    name : 'Refrigerator Artel HD 345 RN silver',
    price: 164075,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/artel-hd-345-rn-serebristyi-2702217/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h99/31659441782814/artel-hd-345-rn-silver-2702217-1.jpg',
    category: 'appliances'
  },
  {
    id : 7,
    name : 'Blender Fresh Juice Blend12 white',
    price: 11800,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/fresh-juice-blend12-belyi-105722831/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h51/69222679281694/fresh-juice-portable-blender-stakan-blend12-belyi-prozrachnyi-105722831-1.jpg',
    category: 'appliances'
  },
  {
    id : 8,
    name : 'Egg cooker WMF 415020711 black',
    price: 63000,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/wmf-415020711-chernyi-105100238/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h75/51180441763870/wmf-415020711-cernyj-105100238-1.jpg',
    category: 'appliances'
  },
  {
    id : 9,
    name : 'Notebook Acer Nitro 5 AN515-57 NH.QEKER.004 black',
    price: 375600,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    category: 'Computers or gadgets for computer'
  },
  {
    id : 10,
    name : 'Washing machine LG F2J3HS4L silver',
    price: 219200,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/lg-f2j3hs4l-serebristyi-3601603/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/h56/31753168060446/lg-f2j3hs4l-serebristyj-3601603-1.jpg',
    category: 'appliances'
  },
  {
    id : 11,
    name : 'Keyboard aula',
    price: 34200,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/aula-fireshock-v5-chernyi-106256688/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0c/hc0/62103647715358/aula-fireshock-v5-cernyj-106256688-1.jpg',
    category: 'Computers or gadgets for computer'
  },
  {
    id : 12,
    name : 'Wardrobe Grand Turin 5D, 225x50x218 cm, white',
    price: 139200,
    description: 'usefull for expluatation',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/grand-turin-5d-225x50x218-sm-belyi-105072998/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/h65/51132067053598/skaf-grand-turin-5d-225x50x218-sm-ldsp-belyj-105072998-1.jpg',
    category: 'Furniture'
  },
  {
    id : 13,
    name : 'Wardrobe white',
    price: 80000,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/shkaf-44466677-160x47x200-belyi-106499833/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/he7/62570638344222/skaf-106499833-1.jpg',
    category: 'Furniture'
  },
  {
    id : 14,
    name : 'Bed Mod Beds Vertical 18756, 180x200 cm, with mattress, gray',
    price: 219200,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/mod-beds-vertikal-18756-180x200-sm-s-matrasom-seryi-106051867/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h6b/61678278017054/krovat-mod-beds-vertikal-180x200-sm-s-matrasom-seryj-106051867-1.jpg ',
    category: 'Furniture'
  },
  {
    id : 15,
    name : 'Chair N-12, 81x50x25 cm, white',
    price: 219200,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/hdc/32360448491550/stul-klassicheskii-barneo-woodmold-n-12-81x50x25-belyi-100189414-1.jpg',
    category: 'Furniture'
  },
  {
    id : 16,
    name : 'AlmatyJihaz Comfort SLQ premium sofa, textile upholstery, 80x215x80, grey, blue, sky blue',
    price: 219200,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/almatyjihaz-komfort-slq-premium-divan-obivka-tekstil-80x215x80-seryi-sinii-goluboi-102969161/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/h32/47360568328222/almatyjihaz-komfort-slq-premium-102969161-1.jpg',
    category: 'Furniture'
  },
  {
    id : 17,
    name : 'Smartphone Samsung Galaxy A13 4 GB/64 GB white',
    price: 80200,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-64-gb-belyi-104253316/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h27/49613726973982/smartfon-samsung-galaxy-a13-64gb-sm-a135fzwvskz-white-104253316-1.jpg',
    category : 'Phones'
  },
  {
    id : 18,
    name : 'Smartphone OPPO A17 4 GB/64 GB black',
    price: 69200,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/oppo-a17-4-gb-64-gb-chernyi-107420168/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf8/h1e/65327281930270/oppo-a17-4-gb-64-gb-chernyi-107420168-1.jpg',
    category : 'Phones'
  },
  {
    id : 19,
    name : 'Smartphone Apple iPhone 14 Pro 256Gb purple',
    price: 219200,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
    category : 'Phones'
  },
  {
    id : 20,
    name : 'Smartphone Apple iPhone 13 128Gb blue',
    price: 377200,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h1d/46392661737502/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
    category : 'Phones'
  }
];
