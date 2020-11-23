const Contact=require('../model/contactmodel.js');

exports.Post=(req,res)=>
{

	console.log(req.body)
	const contacts=new Contact();
	const {name,lastname,email,message}=req.body;
	contacts.name=name,
	contacts.lastname=lastname,
	contacts.email=email,
	contacts.message=message
	console.log(contacts.name);

	
	contacts.save((err,post)=>{
			if(err)
			{
			return res.status(400).json({status:"failed",message:"failed fetch post"})
		}
		return res.json({message:"succ"});
		
		
	})

}
