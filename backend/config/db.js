const mongoose = require('mongoose');
<<<<<<< HEAD
=======

>>>>>>> 0c9437236164d5fa9df99b5c6a6d319b3f7b3e47
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
<<<<<<< HEAD
=======

>>>>>>> 0c9437236164d5fa9df99b5c6a6d319b3f7b3e47
module.exports = connectDB;
