const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static("public/images"));

app.get("/getProducts", (req, res) => {
  return res.json([
    {
      title: "WW90T754ABT, Pralka QuickDrive™, 9 kg, biała",
      image: "/images/product3.png",
      capacity: "9kg",
      dimentions: "55 x 60 x 85 cm",
      functions:
        "Drzwi AddWash™, Panel AI Control, Silnik inwerterowy, Wyświetlacz elektroniczny",
      energyClassImg: "/images/A.png",
      energyClass: "A",
      timePeriod: "15.09.2022 - 21.09.2022",
      price: "2999",
      installments: "51,31 zł x 60 rat",
    },
    {
      title: "WW10T654DLH, Pralka EcoBubble™, 10,5 kg, biała",
      image: "/images/product2.png",
      capacity: "10.5kg",
      dimentions: "55 x 60 x 85 cm",
      functions:
        "Drzwi AddWash™, Silnik inwerterowy, Wyświetlacz elektroniczny",
      energyClassImg: "/images/B.png",
      energyClass: "B",
      timePeriod: "15.09.2022 - 21.09.2022",
      price: "3299",
      installments: "53,31 zł x 60 rat",
    },
    {
      title: "WW90T754ABT, Pralka QuickDrive™, 8 kg, biała",
      image: "/images/product1.png",
      capacity: "8kg",
      dimentions: "55 x 60 x 85 cm",
      functions: "Drzwi AddWash™, Panel AI Control, Silnik inwerterowy",
      energyClassImg: "/images/C.png",
      energyClass: "C",
      timePeriod: "15.09.2022 - 21.09.2022",
      price: "3999",
      installments: "55,31 zł x 60 rat",
    },
    {
      title: "WW90T754ABT, Pralka QuickDrive™, 9 kg, biała",
      image: "/images/product3.png",
      capacity: "9kg",
      dimentions: "55 x 60 x 85 cm",
      functions:
        "Drzwi AddWash™, Panel AI Control, Silnik inwerterowy, Wyświetlacz elektroniczny",
      energyClassImg: "/images/D.png",
      energyClass: "D",
      timePeriod: "15.09.2022 - 21.09.2022",
      price: "3499",
      installments: "51,31 zł x 60 rat",
    },
    {
      title: "WW10T654DLH, Pralka EcoBubble™, 10,5 kg, biała",
      image: "/images/product2.png",
      capacity: "10.5kg",
      dimentions: "55 x 60 x 85 cm",
      functions: "Drzwi AddWash™, Wyświetlacz elektroniczny",
      energyClassImg: "/images/E.png",
      energyClass: "E",
      timePeriod: "15.09.2022 - 21.09.2022",
      price: "2499",
      installments: "53,31 zł x 60 rat",
    },
    {
      title: "WW90T754ABT, Pralka QuickDrive™, 8 kg, biała",
      image: "/images/product1.png",
      capacity: "8kg",
      dimentions: "55 x 60 x 85 cm",
      functions:
        "Panel AI Control, Silnik inwerterowy, Wyświetlacz elektroniczny",
      energyClassImg: "/images/F.png",
      energyClass: "F",
      timePeriod: "15.09.2022 - 21.09.2022",
      price: "4299",
      installments: "55,31 zł x 60 rat",
    },
    {
      title: "WW10T654DLH, Pralka, 8 kg, biała",
      image: "/images/product2.png",
      capacity: "8kg",
      dimentions: "55 x 60 x 85 cm",
      functions: "Wyświetlacz elektroniczny",
      energyClassImg: "/images/F.png",
      energyClass: "F",
      timePeriod: "15.09.2022 - 21.09.2022",
      price: "1999",
      installments: "53,31 zł x 60 rat",
    },
    {
      title: "WW90T754ABT, Pralka QuickDrive™, 9 kg, biała",
      image: "/images/product1.png",
      capacity: "9kg",
      dimentions: "55 x 60 x 85 cm",
      functions: "Panel AI Control, Wyświetlacz elektroniczny",
      energyClassImg: "/images/C.png",
      energyClass: "C",
      timePeriod: "15.09.2022 - 21.09.2022",
      price: "3400",
      installments: "55,31 zł x 60 rat",
    },
    {
      title: "WW90T754ABT, Pralka QuickDrive™, 10,5 kg, biała",
      image: "/images/product1.png",
      capacity: "10.5kg",
      dimentions: "55 x 60 x 85 cm",
      functions: "Drzwi AddWash™, Panel AI Control",
      energyClassImg: "/images/F.png",
      energyClass: "F",
      timePeriod: "15.09.2022 - 21.09.2022",
      price: "2200",
      installments: "55,31 zł x 60 rat",
    },
  ]);
});

app.listen(8081, () => {
  console.log("listening");
});
