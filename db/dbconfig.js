const mongoose = require("mongoose");
const DBURL = "mongodb://127.0.0.1:27017/graphql";

// mongoose.connect(DBURL, { useNewUrlParser: true }, (err) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log("successfully connected to mongoDB");
//     }
// });

let conn = mongoose.connect(DBURL, { useNewUrlParser: true });
if (conn) {
    console.log("successfully conected to db");
} else {
    console.error("An error has occured");
}
