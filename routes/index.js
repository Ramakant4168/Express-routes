var express = require('express');
var router = express.Router();

/* GET home page. */


var id;
router.use('/info/:id',(req,res,next)=>{

 id=req.params.id;
next();

})

router.get('/info/:id', function(req, res, next) {
  //res.render('index', { title: 'Express' });

 msg={
 "id":id,
 "name":"ram",

 };
  res.json(msg);
});

module.exports = router;
