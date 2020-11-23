const{Schema,model}=require('mongoose');
const Contact=new Schema({
	name:
	{
		type:String,
		require:true
	},
	lastname:
	{
		type:String,
		require:true
	},
	email:
	{
		type:String,
		require:true
	},
	message:
	{
		type:String,
		require:true
	}


})
module.exports=model("contact",Contact);