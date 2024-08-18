import mongoose from "mongoose";

const connectToDb = async () => {
  const connectionURL = process.env.NEXT_APP_DB_URL;
  await mongoose.connect(connectionURL)
    .then(() => console.log("Connected to Database"))
    .catch((error) => console.log(error));
};

export default connectToDb;
