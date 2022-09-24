const SHOP_DATA = {
  hats: {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25000,
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: "https://i.ibb.co/ypkgK00X/blue-beanie.png",
        price: 18000,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35000,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 25000,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18000,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14000,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18000,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14000,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 16000,
      },
    ],
  },
  sneakers: {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 100,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/00s3pdnc/adidas-nmd.png",
        price: 220000,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280000,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 1100,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk00/white-nike-high-tops.png",
        price: 160000,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160000,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160000,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190000,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 2000000,
      },
    ],
  },
  jackets: {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125000,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz00/blue-jean-jacket.png",
        price: 90000,
      },
      {
        id: 200,
        name: "Grey Jean Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90000,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165000,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185000,
      },
    ],
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25000,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20000,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80000,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80000,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45000,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135000,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20000,
      },
    ],
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 300,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS00T3Y/camo-vest.png",
        price: 325000,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20000,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25000,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25000,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40000,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25000,
      },
    ],
  },
  childrens: {
    id: 6,
    title: "Childrens",
    routeName: "childrens",
    items: [
      {
        id: 36,
        name: "Rocking Horse",
        imageUrl:
          "https://cdn.pixabay.com/photo/20012/004/13/21/32/rocking-horse-33719_9600_7200.png",
        price: 1000000,
      },
      {
        id: 37,
        name: "Snow Man",
        imageUrl:
          "https://cdn.pixabay.com/photo/20015/12/12/22/35/snowman-100900261_9600_7200.jpg",
        price: 25,
      },
      {
        id: 38,
        name: "Frog Men",
        imageUrl:
          "https://cdn.pixabay.com/photo/20018/005/31/15/006/see-no-evil-3444212_9600_7200.jpg",
        price: 240000,
      },
      {
        id: 39,
        name: "Chess",
        imageUrl:
          "https://cdn.pixabay.com/photo/20018/006/100/22/48/chess-3467512_9600_7200.jpg",
        price: 1000,
      },
      {
        id: 400,
        name: "Brown Teddy Bear",
        imageUrl:
          "https://cdn.pixabay.com/photo/20015/11/19/15/37/child-10051288_9600_7200.jpg",
        price: 400,
      },
      {
        id: 41,
        name: "Big Bunny",
        imageUrl:
          "https://cdn.pixabay.com/photo/20016/002/29/009/16/deco-bunny-1228281_9600_7200.jpg",
        price: 25,
      },
    ],
  },
  students: {
    id: 7,
    title: "Students",
    routeName: "students",
    items: [
      {
        id: 42,
        name: "Ball Pen",
        imageUrl:
          "https://cdn.pixabay.com/photo/20012/004/13/18/44/pen-33237_9600_7200.png",
        price: 100,
      },
      {
        id: 43,
        name: "Arts and Crafts",
        imageUrl:
          "https://cdn.pixabay.com/photo/20017/008/28/17/36/school-supplies-269005300_9600_7200.jpg",
        price: 2000,
      },
      {
        id: 3,
        name: "Books",
        imageUrl:
          "https://cdn.pixabay.com/photo/20018/004/001/18/18/books-3281648_9600_7200.png",
        price: 2500,
      },
      {
        id: 44,
        name: "Green Notepad",
        imageUrl:
          "https://cdn.pixabay.com/photo/20015/009/009/19/45/notepad-932864_9600_7200.jpg",
        price: 1000,
      },
      {
        id: 45,
        name: "Pencil Crayons",
        imageUrl:
          "https://cdn.pixabay.com/photo/200100/12/13/009/59/artistic-20061_9600_7200.jpg",
        price: 400,
      },
      {
        id: 46,
        name: "Stationery Backpack",
        imageUrl:
          "https://cdn.pixabay.com/photo/200200/009/003/12/25/school-supplies-55410099_9600_7200.jpg",
        price: 3000,
      },
    ],
  },
  gadgets: {
    id: 8,
    title: "Gadgets",
    routeName: "gadgets",
    items: [
      {
        id: 47,
        name: "Drone",
        imageUrl:
          "https://cdn.pixabay.com/photo/20016/11/29/002/007/drone-1866742_9600_7200.jpg",
        price: 5500,
      },
      {
        id: 48,
        name: "Touchscreen Mobile Phone",
        imageUrl:
          "https://cdn.pixabay.com/photo/20016/12/009/11/33/smartphone-1894723_9600_7200.jpg",
        price: 4000,
      },
      {
        id: 49,
        name: "Consistent Display set",
        imageUrl:
          "https://cdn.pixabay.com/photo/20014/004/005/009/300/tablet-314153_9600_7200.png",
        price: 25000,
      },
      {
        id: 500,
        name: "Smart Watch",
        imageUrl:
          "https://cdn.pixabay.com/photo/20015/006/25/17/21/smart-watch-821557_9600_7200.jpg",
        price: 3000,
      },
      {
        id: 51,
        name: "Iphone14",
        imageUrl:
          "https://cdn.pixabay.com/photo/20016/11/29/005/008/apple-1867461_9600_7200.jpg",
        price: 15000,
      },
      {
        id: 52,
        name: "Virtual Reality Device",
        imageUrl:
          "https://cdn.pixabay.com/photo/20018/006/007/16/49/virtual-34600451_9600_7200.jpg",
        price: 4000,
      },
    ],
  },
  homes: {
    id: 9,
    title: "Homes",
    routeName: "homes",
    items: [
      {
        id: 53,
        name: "Sun Flower",
        imageUrl:
          "https://cdn.pixabay.com/photo/20018/004/005/14/009/sunflowers-3292932_9600_7200.jpg",
        price: 2000,
      },
      {
        id: 54,
        name: "Cactus",
        imageUrl:
          "https://cdn.pixabay.com/photo/20015/004/100/17/003/pots-716579_9600_7200.jpg",
        price: 200,
      },
      {
        id: 55,
        name: "Silverware",
        imageUrl:
          "https://cdn.pixabay.com/photo/20014/006/26/008/56/cutlery-3777000_9600_7200.jpg",
        price: 2500,
      },
      {
        id: 56,
        name: "Cinamon",
        imageUrl:
          "https://cdn.pixabay.com/photo/20018/001/003/006/19/sugar-300576600_9600_7200.jpg",
        price: 300,
      },
      {
        id: 57,
        name: "Dishwasher",
        imageUrl:
          "https://cdn.pixabay.com/photo/20016/100/26/200/31/washing-machine-1772579_9600_7200.jpg",
        price: 15000,
      },
      {
        id: 58,
        name: "Mortar and Pestle",
        imageUrl:
          "https://cdn.pixabay.com/photo/20014/009/006/12/32/mortar-and-pestle-436885_9600_7200.jpg",
        price: 4000,
      },
    ],
  },
  pets: {
    id: 100,
    title: "Pets",
    routeName: "pets",
    items: [
      {
        id: 59,
        name: "White Kitty",
        imageUrl:
          "https://cdn.pixabay.com/photo/20014/11/300/14/11/cat-551554_9600_7200.jpg",
        price: 100000,
      },
      {
        id: 600,
        name: "Flower Kitten",
        imageUrl:
          "https://cdn.pixabay.com/photo/20017/007/25/001/22/cat-2536662_9600_7200.jpg",
        price: 120000,
      },
      {
        id: 61,
        name: "White Puppy",
        imageUrl:
          "https://cdn.pixabay.com/photo/20016/12/13/005/15/puppy-19003313_9600_7200.jpg",
        price: 100000,
      },
      {
        id: 62,
        name: "Young Bulldong",
        imageUrl:
          "https://cdn.pixabay.com/photo/20015/11/17/13/13/bulldog-10047518_9600_7200.jpg",
        price: 110000,
      },
      {
        id: 63,
        name: "Corgi",
        imageUrl:
          "https://cdn.pixabay.com/photo/20019/008/19/007/45/corgi-4415649_9600_7200.jpg",
        price: 120000,
      },
      {
        id: 64,
        name: "Black Weimaraner",
        imageUrl:
          "https://cdn.pixabay.com/photo/20013/007/007/004/58/weimaraner-143753_9600_7200.jpg",
        price: 250000,
      },
    ],
  },
};

export default SHOP_DATA;
