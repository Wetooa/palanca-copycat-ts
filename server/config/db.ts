import mongoose from "mongoose";
import "colors";

interface Mongo {
  useNewUrlParser: boolean;
  useCreateIndex: boolean;
  useFindAndModify: boolean;
  useUnifiedTopology: boolean;
}

const connectDB = (url: any) => {
  return mongoose
    .connect(url)
    .then(() => console.log(`CONECTED TO MONGODB`.cyan.underline));
};

export default connectDB;
