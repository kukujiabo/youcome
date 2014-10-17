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

  app.get('/api/prods', function (req, res) {
    var c_id = req.query.c_id;

    if (c_id == undefined || c_id == null) {
      var productId = req.query.productId;

      if (productId == undefined || productId == null) {
          Controllers.products.getDisplayProducts (function (err, result) {
            if (err) {
              return res.json({'err': err});
            }
            res.json(result);
          });
      } else {
        Controllers.products.getProductById (productId, function (err, result) {
          if (err) {
            return res.json({'err': err});
          }
          res.json(result);
        });
      }
    } else {
      Controllers.products.getProductsByCountry (c_id, function (err, result) {
        if (err) {
          return res.json({'err': err});
        }
        res.json(result);
      });
    }
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

  app.get("/api/flagship", function (req, res) {
    Controllers.flagships.getDisplayFlagships (function (err, result) {
      if (err) {
        return res.json({"err": err});
      }
      res.json(result);
    });
  });

  app.get('/api/countries', function (req, res) {
    var hot = req.query.hot;

    if (hot == 1) {
      Controllers.countries.getHotCountries (function (err, result) {
        if (err) {
          return res.json({err: err});
        }
        res.json(result);
      });
    } else {
      Controllers.countries.getDisplayCountries (function (err, result) {
        if (err) {
          return res.json({err: err});
        }
        res.json(result);
      });
    }
  });

  app.get('/api/catas', function (req, res) {
    Controllers.catas.getDisplayCatas (function (err, result) {
      if (err) {
        console.log(err);
      }
      res.json(result);
    });
  });

  app.get(/.*/, function (req, res) {
    res.sendfile("./client/index.html");
  });


};
