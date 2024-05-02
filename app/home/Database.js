export const COLOURS = {
  white: "#ffffff",
  black: "#000000",
  green: "#00AC76",
  red: "#C04345",
  blue: "#0043F9",
  backgroundLight: "#F0F0F3",
  backgroundMedium: "#B9B9B9",
  backgroundDark: "#777777",
};

export const Items = [
  {
    id: 1,
    category: "accessory",
    productName: "actividad 1",
    productPrice: 1799,
    description:
      "Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control",
    isOff: true,
    offPercentage: 10,
    productImage: require("../../assets/components/database/images/medics/img1.jpg"),
    isAvailable: true,
    productImageList: [
      require("../../assets/components/database/images/products/boat1.png"),
      require("../../assets/components/database/images/products/boat2.png"),
      require("../../assets/components/database/images/products/boat3.png"),
    ],
  },
  {
    id: 2,
    category: "accessory",
    productName: "actividad 2",
    productPrice: 1499,
    description:
      "boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.",
    isOff: false,
    productImage: require("../../assets/components/database/images/medics/img2.jpg"),
    isAvailable: true,
    productImageList: [
      require("../../assets/components/database/images/medics/img4.jpg"),
      require("../../assets/components/database/images/products/boat2.png"),
      require("../../assets/components/database/images/products/boat3.png"),
    ],
  },
  {
    id: 3,
    category: "accessory",
    productName: "actividad 3",
    productPrice: 1999,
    description:
      "Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS",
    isOff: true,
    offPercentage: 18,
    productImage: require("../../assets/components/database/images/medics/img3.jpg"),
    isAvailable: true,
    productImageList: [
      require("../../assets/components/database/images/accessories/boatairpods1.png"),
      require("../../assets/components/database/images/accessories/boatairpods2.png"),
      require("../../assets/components/database/images/accessories/boatairpods3.png"),
    ],
  },
  {
    id: 4,
    category: "accessory",
    productName: "actividad 4",
    productPrice: 399,
    description:
      "Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.",
    isOff: false,
    productImage: require("../../assets/components/database/images/medics/img4.jpg"),
    isAvailable: true,
    productImageList: [
      require("../../assets/components/database/images/accessories/boatbassheads1.png"),
      require("../../assets/components/database/images/accessories/boatbassheads2.png"),
      require("../../assets/components/database/images/accessories/boatbassheads3.png"),
    ]
  },
  {
    id: 5,
    category: "accessory",
    productName: "actividad 5",
    productPrice: 1499,
    description:
      "The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.",
    isOff: false,
    productImage: require("../../assets/components/database/images/medics/img5.jpg"),
    isAvailable: false,
    productImageList: [
      require("../../assets/components/database/images/accessories/boatrockerz1.png"),
      require("../../assets/components/database/images/accessories/boatrockerz2.png"),
      require("../../assets/components/database/images/accessories/boatrockerz3.png"),
    ],
  },
  {
    id: 6,
    category: "accessory",
    productName: "actividad 16",
    productPrice: 1299,
    description:
      "One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant",
    isOff: false,
    productImage: require("../../assets/components/database/images/medics/img6.jpg"),
    isAvailable: true,
    productImageList: [
      require("../../assets/components/database/images/accessories/boultairbass1.png"),
      require("../../assets/components/database/images/accessories/boultairbass2.png"),
      require("../../assets/components/database/images/accessories/boultairbass3.png"),
    ],
  },
];
export const dataImages = [
  require("../../assets/components/database/images/quieneSomos/img1.jpg"),
  require("../../assets/components/database/images/quieneSomos/img3.jpg"),
  require("../../assets/components/database/images/quieneSomos/img2.jpg"),
  require("../../assets/components/database/images/quieneSomos/img4.jpg"),
  require("../../assets/components/database/images/quieneSomos/img5.jpg"),
  require("../../assets/components/database/images/quieneSomos/img6.png"),
];
export const markers = [
  {
    latitude: 19.567139,
    longitude: -65.761911,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: "pinos",
  },
  {
    latitude: -19.564479,
    longitude: -65.778841,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: "pinos",
  },
  {
    latitude: -19.566137,
    longitude: -65.776041,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: "pinos",
  },
  {
    latitude: -19.593077,
    longitude: -65.741164,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: "pinos",
  },
  {
    latitude: -19.586163,
    longitude: -65.735156,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: "pinos",
  },
];

export const dataEmergencia = [
  { id: 1, name: "Bomberos", telefono: 119 },
  { id: 2, name: "Linea Patrulla", telefono: 112 },
  { id: 3, name: "Ambulancia", telefono: 110},

];
