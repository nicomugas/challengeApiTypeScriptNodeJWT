import mongoose from "mongoose";



const dbUri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.rapx6jc.mongodb.net/users?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
mongoose.connect(dbUri)
  .then(()=> console.log('connect to mongodb')) 
  .catch(e => console.log('error connect to mongodb', e))
  