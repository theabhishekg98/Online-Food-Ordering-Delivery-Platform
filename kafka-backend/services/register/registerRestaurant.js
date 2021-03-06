var bcrypt = require("bcrypt");
const Restaurants = require("../../model/Restaurants");

async function handle_request(req, callback) {
  const payload = { ...req.body };
  try {
    let restaurant = await Restaurants.findOne({ EmailId: payload.EmailId });
    if (restaurant) {
      error = { message: "The entered Email Id is already registered!" };
      callback(error, null);
    } else {
      payload.RestaurantPassword = await bcrypt.hash(
        payload.RestaurantPassword,
        10
      );
      restaurant = new Restaurants({ ...payload });
      const savedRestaurant = await restaurant.save();
      if (savedRestaurant) {
          callback(null, savedRestaurant);
        }
    }
  } catch (error) {
    console.log(error);
    callback(error, null);
  }
}

exports.handle_request = handle_request;
