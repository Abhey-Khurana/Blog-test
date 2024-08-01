// const sequelize = require("../config/dbConfig");
// const Blog = require("./blog");

import sequelize from "../config/dbConfig";
import { Blog } from "./blog";

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Tables have been created");
//   })
//   .catch((err) => console.log("Error: " + err));

module.exports = {
  Blog,
};
