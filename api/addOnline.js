const dataUnit = require('./dataUnit');


module.exports = (req, res) => {
    // const { name = 'World' } = req.query

    // 设置允许跨域的域名，*代表允许任意域名跨域
    res.setHeader('access-control-allow-origin', '*');
    try {
        const onlineNumber = dataUnit.onlineNumber.get();
        dataUnit.onlineNumber.set((onlineNumber + 1));
        res.status(200).send(JSON.stringify({
            success: true, 
        }));
    } catch (err) {
        res.status(200).send(JSON.stringify({
            success: false,
            err: err
        }));
    }

}
