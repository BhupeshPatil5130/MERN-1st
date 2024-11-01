const mongoose = require('mongoose');

require("dotenv");

const dbConnect =()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(()=>{console.log("DB connect zhala re bhoooo")})
    .catch((err)=>{
            console.log('Db Ne Gaan keli')
            console.log(err.messsage);
            process.exit(1);
    })
}

module.export=dbConnect;