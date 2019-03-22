const express = require('express');

const app = express();
console.log("121a1s2aasss");
app.get('/', (req, res) => {
    res.send("hi")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running On Port PORT`));