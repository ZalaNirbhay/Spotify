const app=require('./src/app');
const connectDb=require('./src/db/db');
require('dotenv').config();

connectDb();


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
