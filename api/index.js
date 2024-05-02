//red
const os = require('os');

// Función para encontrar la dirección IP asignada por DHCP en la interfaz de WiFi
function findWifiDhcpIpAddress() {
    const interfaces = os.networkInterfaces();

    // Busca en las interfaces de red aquellas que corresponden a WiFi (pueden variar según el sistema operativo)
    const wifiInterfaces = interfaces['Wi-Fi'] || interfaces['wlan0'] || interfaces['wlp2s0'] || [];

    // Encuentra la primera dirección IP asignada por DHCP en la interfaz de WiFi
    const wifiDhcpIpAddress = wifiInterfaces.find(
        iface => iface.family === 'IPv4' && !iface.internal && iface.address !== '127.0.0.1'
    );

    return wifiDhcpIpAddress ? wifiDhcpIpAddress.address : null;
}

// Llama a la función para encontrar la dirección IP asignada por DHCP en WiFi
const wifiDhcpIpAddress = findWifiDhcpIpAddress();

if (wifiDhcpIpAddress) {
    console.log('Dirección IP asignada por DHCP en WiFi:', wifiDhcpIpAddress);
} else {
    console.log('No se encontró una dirección IP asignada por DHCP en WiFi.');
}
//
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");

mongoose
  .connect("mongodb+srv://alex:alex@cluster0.hfe9joa.mongodb.net/", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port 3000`);
});

const User = require("./models/user");
const Post = require("./models/post");

//endpoint to register a user in the backend
app.post("/register", async (req, res) => {
  try {
    const { name, ci, edad, telefono, direccion, sintomas, password } =
      req.body;

    //check if the email is already registered
    const existingUser = await User.findOne({ ci });
    if (existingUser) {
      console.log("ci already registered");
      return res.status(400).json({ message: "ci already registered" });
    }

    //create a new User
    const newUser = new User({
      name,
      ci,
      edad,
      telefono,
      direccion,
      sintomas,
      password,
    });

    //generate the verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save the user to the database
    await newUser.save();

    //send the verification email to the registered user
  } catch (error) {
    console.log("Error registering user", error);
    res.status(500).json({ message: "Registration failed" });
  }
});

const sendVerificationEmail = async (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gutierrezcardenasalexdaniel@gmail.com",
      pass: "dyvl qshr vidh ewrh",
    },
  });

  const mailOptions = {
    from: "linkenign@gmail.com",
    to: email,
    subject: "Email Verification",
    text: `please click the following link to verify your email : localhost:3000/verify/${verificationToken}`,
  };

  //send the mail
  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully");
  } catch (error) {
    console.log("Error sending the verification email");
  }
};

//endpoint to verify email
app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid verification token" });
    }

    //mark the user as verified
    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Email verification failed" });
  }
});

const generateKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};
const secretKey = generateKey();

app.post("/login", async (req, res) => {
  try {
    const { ci, password } = req.body;
    //check if user existe
    const user = await User.findOne({ ci });
    if (!user) {
      return res.status(401).json({ message: "invalid ci  " });
    }
    //check if password incorrect
    if (user.password !== password) {
      return res.status(500).json({ message: "invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "login falied" });
  }
});

app.get("/datos", (req, res) => {
  db.collection('test').find().toArray((err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

// const os = require('os');

// // Obtiene la interfaz de red activa
// const interfaces = os.networkInterfaces();

// // Encuentra la interfaz que representa la red local
// const interfaceName =  'Wi-Fi'; // Puedes ajustar esto según el nombre de tu interfaz de red

// let localIpAddress = '';

// // Itera sobre las interfaces de red
// for (const interfaceKey in interfaces) {
//     const networkInterface = interfaces[interfaceKey];

//     // Encuentra la interfaz que no sea loopback y sea IPv4
//     const validInterface = networkInterface.find(
//         iface => !iface.internal && iface.family === 'IPv4'
//     );

//     if (validInterface) {
//         localIpAddress = validInterface.address;
//         break; // Detiene el bucle si encuentra una dirección IP válida
//     }
// }

// console.log('La dirección IP local es:', localIpAddress);



