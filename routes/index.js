var Controllers = require("../controllers");

module.exports = function (app) {
  app.get("/api/brands", function (req, res) {
    Controllers.brand.getDisplayBrand (function (err, result) {
      if (err) {
        return res.json({"err": err});
      }
      res.json(result);
    });
  });

  app.get("/api/arts", function (req, res) {
    Controllers.arts.getDisplayArts (function (err, result) {
      if (err) {
        return res.json({"err": err});
      }
      res.json(result);
    });
  });

  app.get("/api/products", function (req, res) {
    var productId = req.query.productId;
    if (productId == undefined || productId == null) {
      Controllers.products.getDisplayProducts (function (err, result) {
        if (err) {
          return res.json({"err": err});
        }
        res.json(result);
      });
    } else {
      Controllers.products.getProductById (productId, function (err, result) {
        if (err) {
          return res.json({"err": err});
        }
        res.json(result);
      });
    }
  });

  app.get("/api/hots", function (req, res) {
    Controllers.hots.getDisplayHots (function (err, result) {
      if (err) {
        return res.json({"err": err});
      }
      res.json(result);
    });
  });

  app.get("/api/contacts", function (req, res) {
    Controllers.contacts.getDisplayContacts (function (err, result) {
      if (err) {
        return res.json({"err": err});
      }
      res.json(result);
    });
  });

  app.get("/api/supplies", function (req, res) {
    var productId = req.query.productId;
    Controllers.supplies.getDisplaySupplies (productId, function (err, result) {
      if (err) {
        return res.json({"err": err});
      }
      res.json(result);
    });
  });

  app.get("/api/introduction", function (req, res) {
    Controllers.introduction.getDisplayIntroduction (function (err, result) {
      if (err) {
        return res.json({"err": err});
      }
      res.json(result);
    });
  });

  app.get(/.*/, function (req, res) {
    res.sendfile("./client/index.html");
  });

};
