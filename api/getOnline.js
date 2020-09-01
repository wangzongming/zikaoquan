const dataUnit = require('./dataUnit');

module.exports = (req, res) => {
    // 设置允许跨域的域名，*代表允许任意域名跨域
    res.setHeader('access-control-allow-origin', '*');
    try {
        const onlineNumber = dataUnit.onlineNumber.get();
        res.status(200).send(onlineNumber);
    } catch (err) {
        res.status(200).send(false);
    }

}
