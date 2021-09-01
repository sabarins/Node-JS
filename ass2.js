let exp = require("express");

let app = exp();

 app.use(exp.json());

app.get('/get',function(req,res)
{
    res.send("hello");
  
})
app.post('/post',function(req,res)
{
    console.log(req.body);
    res.send("hello");
    
})
app.put('/put',function(req,res)
{
    console.log(req.body);
    res.send("hello");
    
})
app.delete('/delete',function(req,res)
{
    res.send("hi");
    
})


app.listen(8000,function()
{
    console.log("server is running");
})