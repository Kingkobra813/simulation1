module.exports = {
    getProducts: (req, res) => {
        const dbInstance = req.app.set("db", dbInstance);

        dbInstance
            .get_inventory()
            .then(products => {
                res.status(200).json(products);
            })
            .catch(err => res.status(500).console.log(err));
    },

    makeProduct: (req, res) => {
        const dbInstance = req.app.set("db", dbInstance);
        const { name, price, img } = req.body;

        dbInstance
            .create_product([name, price, img])
            .then(product => {
                res.status(200).json(product);
            })
            .catch(err => res.status(500).console.log(err));
    }
}