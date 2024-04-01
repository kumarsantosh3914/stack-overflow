import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);

    // console.log(process.env.MONGODB_URL);
    if(!process.env.MONGODB_URL) {
        return console.log('MISSING MONGODB_URL');
    }

    if(isConnected) {
        return console.log('MongoDB is already connected');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'prisma-nextjs'
        })

        isConnected = true;

        console.log("MongoDB is connected");
    } catch (error) {
        console.log('MongoDB connected failed', error);
    }
}