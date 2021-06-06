const mongoose = require('mongoose');
//Database creation
mongoose.connect("mongodb://localhost:27017/sahildynamic", {
    useCreateIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection Successful");
}).catch((err) => {
    console.log(err);
})