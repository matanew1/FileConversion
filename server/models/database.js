import mongoose from 'mongoose';
// create a new mongoose connection

const connectDB = async (mongoURI) => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

mongoose.set("strictPopulate", false); 

export default {connectDB, mongoose};