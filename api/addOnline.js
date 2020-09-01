const dataUnit = require('./dataUnit');


module.exports = (req, res) => {
    // const { name = 'World' } = req.query
    try {
        const onlineNumber = dataUnit.onlineNumber.get();
        dataUnit.onlineNumber.set((onlineNumber + 1));
        res.status(200).send(true);
    } catch (err) {
        res.status(200).send(false);
    }

}
