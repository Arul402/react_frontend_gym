const mongooes=require('mongoose')

const GymSchema = new mongooes.Schema({
            gymData: {
                type: String,
                required:true,
            },
            gymDate:{
                type: Number,
                required:true,
            },
})

const Gym = mongooes.model("Gym",GymSchema)
module.exports=Gym;