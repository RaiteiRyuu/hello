const express = require("express");
const path = require("path");
const router = express.Router();
var fs = require("fs");


router.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname, "/../views/index.html"));
})

router.get("/tester",(request,response)=>{
    response.json("It works!!!");
})

router.get("/tester2",(req,res)=>{
    res.json("It works too!!!");
})

// router.get("/tester3", (req, res)=>{
//     res.json("It works 3");
// })
 router.get("/tester3", (req, res)=>{
    res.sendFile(path.join(__dirname, "/../views/user.html"));
 })


//....................NINJA.......................................
// router.get('/user', (req, res) => {
//     //req to receive stuff from the client / browser
//     const name = req.query.name;
//     const nameclass = req.query.nameclass;
//     // res to send stuff to the browser
//     res.send("Name: " + name + " Classname: " + nameclass);
//     fs.appendFileSync('charlist.lis', name + " " + nameclass + "\n");
//     res.sendFile(path.join(__dirname, "/../views/user.html"));
// })

router.get("/user",(request,response)=>{
    response.sendFile(path.join(__dirname, "/../views/user.html"));
    const name = request.query.name;
    const nameclass = request.query.nameclass;
    // res to send stuff to the browser
    response.send("Name: " + name + " Classname: " + nameclass);
    fs.appendFileSync('charlist.lis', name + " " + nameclass + "\n");
})

///...........First black man video................................

// router.post('/user', (req, res) => {
//     //req to receive stuff from the client / browser
//     console.log("Req: ", req.body);
//     const username = req.body.username;
//     const address = req.body.address;
    
//     const user = {
//         username: username,
//         address: address
//     };
//     // res to send stuff to the browser
//     res.json({ msg:"we got the data", data:user});
// })

// server is waiting for data on the path called /user
router.post('/append', (req, res) => {
    //req to receive stuff from the client / browser
    console.log("Req: ", req.body);
    const username = req.body.name;
    const nameclass = req.body.nameclass;
    
    const bnsuser = {
        name: username,
        nameclass: nameclass
    };
    // res to send stuff to the browser
    res.json({ msg:"we got the data", data:bnsuser});
})

// router.get("*",(req,res)=>{
//     res.json("It doesnt work 404!!!");
// })


module.exports = router;