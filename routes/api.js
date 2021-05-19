var express = require('express');
var router = express.Router();

const data = [
    {
        id: 1,
        title: 'Linting ist'
    }
]
//寫route
router.get('/product', function(req, res, next){
    res.status(200); //optional 狀態碼
    //權限不足 直接給404
    res.send({
        success: true,
        data 
    });
    res.end();
});

//新增品項
router.post('/product',function(req, res){
const product = req.body;
data.push({
    ...product,
    id: new Date().getTime(),
});
console.log(data);

res.send({
    success: true,
    data
});
res.end();
});

//刪除品項 :id是動態的寫法
router.delete('/product/:id',function(req, res){
    const id =req.params.id;
    console.log(id);
 
 //刪除特定一筆資料
    data.forEach((item, key) => {
     if(item.id ==id){ //型別需要轉換的用===
        data.splice(key,1);
     }
 });

    console.log(data);

    res.send({
        success: true,
        data
    });
    res.end();
    });

module.exports = router;
