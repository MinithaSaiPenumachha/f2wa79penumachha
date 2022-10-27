var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {

    var numb1=Math.floor(Math.random()*10)

    var numb2=(Math.random())

    var numb3=Math.floor(Math.random()*10)

    var numb4=Math.floor(Math.random()*10)

    var absFunction=Math.abs(numb1);

    var acosFunction=Math.acos(numb2);

    var sinFunction=Math.sin(numb3);

    var sinFunction=Math.sinh(numb3)



    res.render('computation',

    {

        title:'Minitha Sai Penumachha Computes Functions',

        numb1:numb1,

        numb2:numb2,

        numb3:numb3,

        numb4:numb4,

        abs:absFunction,

        acos:acosFunction,

        sin:sinFunction,

        sinh:sinFunction

    });

     

});

module.exports=router;