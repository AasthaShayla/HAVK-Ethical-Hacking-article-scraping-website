const express = require('express')
const cheerio = require('cheerio')
const axios =require('axios')
const cors = require('cors');
let articles=""
const app = express()
const port = process.env.PORT ||5001
app.use(cors({
    origin: '*'
}));
async function scrappe(){

    axios.get('https://cyware.com/cyber-security-news-articles') 
	.then(({ data }) => {
        const $ = cheerio.load(data); 
        const articlesl=$('.pt-1').map((_, product) => { 
            const $product = $(product);
            return $product.text() 
        }) 
        .toArray(); 
        let dataArray=articlesl[0].toString().trim().split('\n')
        dataArray.forEach((article,indexisies) => {if(article.trim()==="Bookmark"||article.trim()==="Share"||article.trim()==="Mark as read"){
            console.log(indexisies)
            dataArray.splice(indexisies,1)
    }})
    articles=dataArray.toString()
    });
}
setInterval(scrappe,10000)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
app.get('/', (req, res) => {
    res.json({ articles: articles });
});