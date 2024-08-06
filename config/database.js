const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)// make connection fast
        const conn = await mongoose.connect(process.env.DATABASE)//since it an async process wait for dis to connect, but do other things
        console.log(`MongoDB Connected: ${conn.connection.host}`);//show the host of the mongodb
    } catch (error) {
        console.log(error);
        process.exit(1);//once there is an error exit until error is fixed.
    }
}

module.exports = connectDB