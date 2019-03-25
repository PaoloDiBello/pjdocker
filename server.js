const express = require('express');

const app = express();
console.log("101101");
app.get('/', (req, res) => {
    res.send("hi")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running On Port PORT`));