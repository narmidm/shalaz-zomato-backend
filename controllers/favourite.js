const Favourite = require("../models/favourite");

exports.addFavouriteResturant = (req, res, next) => {
    const favourite = new Favourite({
        user: req.body.user,
        res_id: req.body.res_id
    });
    favourite
        .save()
        .then(result => {
            res.status(201).json({
                message: "resturant added to favourite list!",
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                message: " resturant add fail"
            });
        });
};

exports.removeFavouriteResturant = (req, res, next) => {
    Favourite.deleteOne({
            _id: req.params.id
        })
        .then(result => {
            console.log(result);
            if (result.n > 0) {
                res.status(200).json({
                    message: "Deletion successful!"
                });
            } else {
                res.status(401).json({
                    message: "Not authorized!"
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Remvoing resturant failed!"
            });
        });
}

exports.viewFavouriteResturant = (req, res, next) => {
    Favourite.find({"user":req.params.id})
    .then(favourite => {
      if(favourite.n>0) {
        res.status(200).json(favourite);
      } else {
        res.status(404).json({ message: "no resturant found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching resturant failed!"
      });
    });
}