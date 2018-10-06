module.exports = {
    getProducts: (req, res) => {
        const dbInstance = req.app.set("db");
        //console.log("are we in here?", dbInstance.get_inventory())
        dbInstance
            .get_inventory()
            .then(products => {
                //console.log("hitting .then", products)
                res.status(200).send(products);
            })
            .catch(err => res.status(500).send(err));
    },

    makeProduct: (req, res) => {
        const dbInstance = req.app.set("db");
        const { name, price, img } = req.body;

        dbInstance
            .create_product([name, price, img])
            .then(product => {
                res.status(200).send(product);
            })
            .catch(err => {
                console.log("error in", err)
                res.status(500).send(err)
            })
    },

    deleteProduct: (req, res) => {
        const dbInstance = req.app.set("db");
        const { id } = req.params;

        dbInstance
            .delete_product([id]).then(product => {
                res.status(200).send('deleted')
            })
    },

    updateProduct: (req, res) => {
        const dbInstance = req.app.set("db");
        const { id } = req.params;

        dbInstance
            .update_product([id]).then(res => {
                res.status(200).send("updated")
            })

    }
}