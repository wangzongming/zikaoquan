const fs = require('fs');
const path = require('path');
const dataPath = path.resolve(__dirname, './data.json');

module.exports = {
    onlineNumber: {
        get: () => {
            const data = require(dataPath);
            return data.onlineNumber;
        },
        set: (newOnlineNumber) => {
            const data = require(dataPath);
            data.onlineNumber = newOnlineNumber;
            fs.writeFileSync(dataPath, JSON.stringify(data))
        }
    }
}