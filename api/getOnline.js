const dataUnit = require('./dataUnit');

module.exports = (req, res) => { 
    try {
        const onlineNumber = dataUnit.onlineNumber.get(); 
        res.status(200).send(onlineNumber);
    } catch (err) {
        res.status(200).send(false);
    }

}
