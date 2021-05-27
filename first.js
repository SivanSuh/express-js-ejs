const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;


app.set("view engine", "ejs");//dosyamızı ejs formatında oldugunu belirtiyoruz
app.use("/assets", express.static("assets"));

app.get("/", (req,res) =>{
    res.render("index");
});

app.listen(PORT,()=>{
    console.log(`${PORT} ta celisiyor`)
});