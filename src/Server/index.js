const { wait } = require("@testing-library/react");
const express=require("express")

const mongooes=require("mongoose")
const app=express()
const GymModel =require("./models/Gym")
app.use(express.json());
mongooes.connect("mongodb+srv://Arul_1712:Arul17122002@CRUD.at5aruo.mongodb.net/gym?retryWrites=true&w=majority", {
    useNewUrlParser: true,
})

app.get('/insert', async(req,res)=>{
    const gym=new GymModel ({gymData: "ELITE FITNESS",gymDate: 7});

    try{
            await gym.save();
            console.log("insert");
            res.send('inserted');
    }catch(err){
        console.log(err)
    }
});

app.listen(3001, () => {
    console.log("Server is running in port 3001....")
})