import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000 || process.env.PORT 

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/' , (req, res) => {
    res.send("This is ecommerce application");
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});



