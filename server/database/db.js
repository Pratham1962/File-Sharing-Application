import mongoose from "mongoose";

const DBConnection = async() => {

    const DB_URI=`mongodb://prathamgawli19:Pratham19@ac-89u7c0n-shard-00-00.nfju0hi.mongodb.net:27017,ac-89u7c0n-shard-00-01.nfju0hi.mongodb.net:27017,ac-89u7c0n-shard-00-02.nfju0hi.mongodb.net:27017/?ssl=true&replicaSet=atlas-1432yy-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(DB_URI,{useNewUrlParser: true} );
        console.log('Database connected successfully');
    } catch(error){
        console.log('Error while connecting with the database', error.message);
    }
}

export default DBConnection;