const dataUnit = require('./dataUnit');

module.exports = (req, res) => { 
    // 设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*"); 
　　//跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    try {
        const onlineNumber = dataUnit.onlineNumber.get(); 
        res.status(200).send(onlineNumber);
    } catch (err) {
        res.status(200).send(false);
    }

}
