const express=require('express')
const app=express();
const port=5000;
const path=require('path');

// app.use(express.static('public'));
// middelware
const logtime=function(req,res,next){
const date=new Date()
console.log(date)
const day=date.getDay()
const hours=date.getHours()
if(day<6 && hours>=9 && hours <= 19) {next()}
else{
    console.log('website not available')
    res.send('<h1>website not available</h1>')
}
}

app.use(logtime) // appel de middelware

app.get('/',(req,res)=>{ 
 res.sendFile(path.join(__dirname,'./public/index.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/contact.html')) 
})
app.get('/services',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/services.html')) 
})

app.listen(port,(err)=>{
    if(err)throw err
    console.log('server is running')
})