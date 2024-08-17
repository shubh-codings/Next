import mongoose from "mongoose";

const connectToDb = async () => {
  const connectionURL = process.env.NEXT_APP_DB_URL;

  await mongoose
    .connect(connectionURL)
    .then(() => console.log("Connected to User Database"))
    .catch((error) => console.error(error));
};

export default connectToDb;
