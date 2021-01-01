const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/school",{useNewUrlParser:true,useUnifiedTopology:true});

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter studant name"]
    },
    mobile_no:{
      type:Number,  
      min:7000000000,
     max:9999999999,  
     required:[true,"please enter studant mobile number"]
     },
    roll_no:{
        type:Number,
        min:1,
        max:50
    }
});
const Student= mongoose.model("Student",studentSchema);
const akash = new Student({
    name:"akash",
    mobile_no:1111112111,
   roll_no:2
 });
 const badri = new Student({
    name:"badri",
    mobile_no:2222222222,
   roll_no:3
 });
 const krishna = new Student({
    name:"krisha",
    mobile_no:1234567890,
   roll_no:4
 });
 const ajay = new Student({
   name:"ajay",
   mobile_no:1235467890,
  roll_no:1
});
const mithun=new Student({
    name:"mithun",
    mobile_no:9382115600,
    roll_no:8
});

Student.insertMany([ajay,akash,badri,krishna,mithun],function(err){
    if(err)
    {
        console.log(err);
    }  else{
        console.log("success");
    }
})

Student.find(function(err,students){
    if(err)
    {
        console.log(err);
    }
    else{
        mongoose.connection.close();
        console.log(students);
    }
});


student.deleteOne({name:"ajay"},function(err){            //we can use deleteMany for deleting many objects
if(err)
{
    console.log(err);
}
else{
    console.log("successfully deleted");
   }
});



 