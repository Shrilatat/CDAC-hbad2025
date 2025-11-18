var express = require("express")
var app = express()

var users = [
    {id:101, uname:"Ramcharan", age:22, email:"ramu@gmail.com"},
    {id:102, uname:"Sujala", age:21, email:"sujala@gmail.com"},
    {id:103, uname:"Vinod", age:22, email:"vinu@gmail.com"},
    {id:104, uname:"Abhay", age:23, email:"Abhu@gmail.com"}
]

app.get("/users", (req, resp)=>{
    resp.send(users)
})


//http://localhost:3000/users/101
app.get("/users/:uid", (req, resp)=>{
    var id = req.params.uid
    for(user of users){
        if(user.id == id)
            resp.send(user)
    }
})


app.listen(3000, function(){
    console.log("server is listening on http://localhost:3000")
})