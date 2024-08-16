import mongoose from "mongoose";


const connectToDB = async () => {
    const connectionURL = process.env.NEXT_APP_DB_URL

    await mongoose.connect(connectionURL)
    .then(() => {
        console.log('Blogs Database Connection is successful');
    })
    .catch(error => {
        console.log(error);
    })
};

export default connectToDB;