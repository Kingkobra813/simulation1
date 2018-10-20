module.exports = {
  getProducts: (req, res) => {
    const dbInstance = req.app.get("db");

    //console.log("are we in here?", dbInstance.get_inventory())
    dbInstance
      .get_inventory()
      .then(products => {
        //console.log("hitting .then", products)
        res.status(200).send(products);
      })
      .catch(err => res.status(500).send(err));
  },

  getOneProduct: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_product([req.params.id])
      .then(product => {
        res.status(200).send(product);
      })
      .catch(err => res.status(500).send(err));
  },

  makeProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, price, img } = req.body;

    dbInstance
      .create_product([name, price, img])
      .then(product => {
        res.status(200).send(product);
      })
      .catch(err => {
        console.log("error in", err);
        res.status(500).send(err);
      });
  },

  deleteProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance.delete_product([id]).then(product => {
      res.status(200).send("deleted");
    });
  },

  updateProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    const { name, price, img } = req.body;
    console.log({ name, price, img });
    dbInstance.update_product([id, name, price, img]).then(response => {
      res.status(200).send("updated");
    });
  }
};
