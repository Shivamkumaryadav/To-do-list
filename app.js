//jshint esversion:6

const express= require("express");
const bodyparser=require("body-parser");

const app= express();
let workItem =[];
let items = [ "Shivam kumar yadav","Vivek yadav", "Jitendra yadav", "Pankaj kumar", "Sunil maurya"];
app.use(bodyparser.urlencoded({extended:true}));
app.use( express.static("public"));
app.set('view engine', 'ejs');
app.get("/", function(req,res){

    var today= new Date();
   
  var options = { weekday:"long",
                day: "numeric",
                month: "long",
                year : "numeric"

                };
  var day = today.toLocaleDateString("en-In", options);

    res.render("list",{listTitle: day, newListItems: items} );
});

app.post("/", function(req,res){
 var item= req.body.newItem;
 items.push(item);
 res.redirect("/");
});

app.get("/work", function (req,res) {
  res.render( "list", {listTitle : "worklist", newListItems: workItem });

});

app.post("/work",function(req,res){
  console.log("Server started on port 3000/work.");
  let worklist = res.body.newItem;
workItem.push(worklist);
res.redirect("/work");
})



app.listen(3000, function(){
    console.log("server started on port 3000");

});