const SHOP_DATA = [
  {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25,
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 18,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 25,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 110,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 160,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
  {
    id: 6,
    title: "Childrens",
    routeName: "childrens",
    items: [
      {
        id: 36,
        name: "Rocking Horse",
        imageUrl:
          "https://cdn.pixabay.com/photo/2012/04/13/21/32/rocking-horse-33719_960_720.png",
        price: 100,
      },
      {
        id: 37,
        name: "Snow Man",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/12/12/22/35/snowman-1090261_960_720.jpg",
        price: 25,
      },
      {
        id: 38,
        name: "Frog Men",
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/05/31/15/06/see-no-evil-3444212_960_720.jpg",
        price: 240,
      },
      {
        id: 39,
        name: "Chess",
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/06/10/22/48/chess-3467512_960_720.jpg",
        price: 1000,
      },
      {
        id: 40,
        name: "Brown Teddy Bear",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/11/19/15/37/child-1051288_960_720.jpg",
        price: 40,
      },
      {
        id: 41,
        name: "Big Bunny",
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/02/29/09/16/deco-bunny-1228281_960_720.jpg",
        price: 25,
      },
    ],
  },
  {
    id: 7,
    title: "Students",
    routeName: "students",
    items: [
      {
        id: 42,
        name: "Ball Pen",
        imageUrl:
          "https://cdn.pixabay.com/photo/2012/04/13/18/44/pen-33237_960_720.png",
        price: 10,
      },
      {
        id: 43,
        name: "Arts and Crafts",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/08/28/17/36/school-supplies-2690530_960_720.jpg",
        price: 2000,
      },
      {
        id: 3,
        name: "Books",
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/04/01/18/18/books-3281648_960_720.png",
        price: 250,
      },
      {
        id: 44,
        name: "Green Notepad",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/09/09/19/45/notepad-932864_960_720.jpg",
        price: 100,
      },
      {
        id: 45,
        name: "Pencil Crayons",
        imageUrl:
          "https://cdn.pixabay.com/photo/2010/12/13/09/59/artistic-2061_960_720.jpg",
        price: 40,
      },
      {
        id: 46,
        name: "Stationery Backpack",
        imageUrl:
          "https://cdn.pixabay.com/photo/2020/09/03/12/25/school-supplies-5541099_960_720.jpg",
        price: 3000,
      },
    ],
  },
  {
    id: 8,
    title: "Gadgets",
    routeName: "gadgets",
    items: [
      {
        id: 47,
        name: "Drone",
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/11/29/02/07/drone-1866742_960_720.jpg",
        price: 550,
      },
      {
        id: 48,
        name: "Touchscreen Mobile Phone",
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_960_720.jpg",
        price: 400,
      },
      {
        id: 49,
        name: "Consistent Display set",
        imageUrl:
          "https://cdn.pixabay.com/photo/2014/04/05/09/30/tablet-314153_960_720.png",
        price: 2500,
      },
      {
        id: 50,
        name: "Smart Watch",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_960_720.jpg",
        price: 300,
      },
      {
        id: 51,
        name: "Iphone14",
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_960_720.jpg",
        price: 1500,
      },
      {
        id: 52,
        name: "Virtual Reality Device",
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_960_720.jpg",
        price: 4000,
      },
    ],
  },
  {
    id: 9,
    title: "Homes",
    routeName: "homes",
    items: [
      {
        id: 53,
        name: "Sun Flower",
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflowers-3292932_960_720.jpg",
        price: 200,
      },
      {
        id: 54,
        name: "Cactus",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/04/10/17/03/pots-716579_960_720.jpg",
        price: 20,
      },
      {
        id: 55,
        name: "Silverware",
        imageUrl:
          "https://cdn.pixabay.com/photo/2014/06/26/08/56/cutlery-377700_960_720.jpg",
        price: 250,
      },
      {
        id: 56,
        name: "Cinamon",
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/01/03/06/19/sugar-3057660_960_720.jpg",
        price: 30,
      },
      {
        id: 57,
        name: "Dishwasher",
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/10/26/20/31/washing-machine-1772579_960_720.jpg",
        price: 1500,
      },
      {
        id: 58,
        name: "Mortar and Pestle",
        imageUrl:
          "https://cdn.pixabay.com/photo/2014/09/06/12/32/mortar-and-pestle-436885_960_720.jpg",
        price: 400,
      },
    ],
  },
  {
    id: 10,
    title: "Pets",
    routeName: "pets",
    items: [
      {
        id: 59,
        name: "White Kitty",
        imageUrl:
          "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
        price: 1000,
      },
      {
        id: 60,
        name: "Flower Kitten",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg",
        price: 1200,
      },
      {
        id: 61,
        name: "White Puppy",
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
        price: 1000,
      },
      {
        id: 62,
        name: "Young Bulldong",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518_960_720.jpg",
        price: 1100,
      },
      {
        id: 63,
        name: "Corgi",
        imageUrl:
          "https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_960_720.jpg",
        price: 1200,
      },
      {
        id: 64,
        name: "Black Weimaraner",
        imageUrl:
          "https://cdn.pixabay.com/photo/2013/07/07/04/58/weimaraner-143753_960_720.jpg",
        price: 2500,
      },
    ],
  },
];

export default SHOP_DATA;
