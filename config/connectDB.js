const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(` F****N MongoDB connected`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB; 

//this is the connection