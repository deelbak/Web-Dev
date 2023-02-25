export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  link: string;
  img: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone 13 Rose 128gb',
    price: 420990,
    description: 'A large phone with one of the best screens',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg'
  },
  {
    id: 2,
    name: 'iPhone 12 Mini Space Gray 64gb',
    price: 289000,
    description: 'A great phone with one of the best cameras',
    rating: 3,
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-mini-64gb-chernyi-100657220/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/h73/33277047406622/apple-iphone-12-mini-64gb-cernyj-100657220-1-Container.jpg'
  },
  {
    id: 3,
    name: 'TV Samsung NEO QE85QN90AAUXCE',
    price: 2999000,
    description: '8K',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-neo-qe85qn90aauxce-216-sm-chernyi-103334007/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/h33/48044011323422/samsung-neo-qe85qn90aauxce-103334007-1.jpg'
  },
  {
    id : 4,
    name : 'Mouse Apple',
    price: 47000,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-magic-mouse-2-usb-c-belyi-103539318/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/hf6/48468771209246/apple-magic-mouse-3-belyj-103539318-1.jpg'

  },
  {
    id : 5,
    name : 'Monitor Asus',
    price: 37280,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/asus-vs197de-chernyi-1700517/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/hc1/50962388779038/asus-vs197de-black-1700517-1-Container.jpg'
  },
  {
    id : 6,
    name : 'Refrigerator Artel HD 345 RN silver',
    price: 164075,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/artel-hd-345-rn-serebristyi-2702217/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h99/31659441782814/artel-hd-345-rn-silver-2702217-1.jpg'
  },
  {
    id : 7,
    name : 'Blender Fresh Juice Blend12 white',
    price: 11800,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/fresh-juice-blend12-belyi-105722831/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h51/69222679281694/fresh-juice-portable-blender-stakan-blend12-belyi-prozrachnyi-105722831-1.jpg'
  },
  {
    id : 8,
    name : 'Egg cooker WMF 415020711 black',
    price: 63000,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/wmf-415020711-chernyi-105100238/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h75/51180441763870/wmf-415020711-cernyj-105100238-1.jpg'
  },
  {
    id : 9,
    name : 'Phone holder',
    price: 2300,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/mulu-ysd-29-108118871/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h74/67059505070110/mulu-ysd-29-108118871-1.jpg'
  },
  {
    id : 10,
    name : 'Washing machine LG F2J3HS4L silver',
    price: 219200,
    description: 'usefull for expluatation',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/lg-f2j3hs4l-serebristyi-3601603/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/h56/31753168060446/lg-f2j3hs4l-serebristyj-3601603-1.jpg'
  }
];
