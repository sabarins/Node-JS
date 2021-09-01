let ex = require("express");

let app = ex();

 app.use(ex.json());

app.get('/backendres',function(req,res)
{
    res.send("hello");
  
})
app.get('/b',function(req,res)
{
   
    res.send({message:"hi"});
})
app.get('/c',function(req,res)
{
   
    res.send("welcome");
})


app.post('/p',function(req,res)
{
    console.log(req.body);
    res.send("hello");
    
})




app.listen(8000,function()
{
    console.log("server is running");
})