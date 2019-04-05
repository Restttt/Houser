module.exports = {
    addHouse: async (req, res) => {
        const db = req.app.get('db');
        const { propertyName, address, imageUrl, city, state, zip, mortage, rent } = req.body;
        const addedHouse = await db.addHouse(propertyName, address, imageUrl, city, state, zip, mortage, rent);
        
        if (!addedHouse) {
            res.status(409).send('unable to add the house');
        } else {
            res.status(200).send(addedHouse);
        }
    },
    getAllHouses: async (req, res) => {
        const db = req.app.get('db');
        const allHouses = await db.allHouses();

        if (!allHouses) {
            res.status(409).send('unable to get all houses');
        } else {
            res.status(200).send(allHouses);
        };
    },
    deleteHouse: async (req, res) => {
        const db = req.app.get('db');
        const { id } = req.body;
        console.log(id);
        db.deleteHouse(id).then(() => {
            res.sendStatus(200);
        }).catch(err => res.sendStatus(409));
    }
}