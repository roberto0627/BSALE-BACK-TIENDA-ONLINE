const express = require('express');
const router = express.Router();
const connection = require('../db');

/*ruta: productos*/
router.get('/product', async (req, res)=>{
    const {name} = req.query;
    if(name)connection.query('SELECT * FROM product WHERE name LIKE ?', [`%${name}%`], (err, rows)=>{
            if(!err)
                res.json(rows)
            else
                console.log(err)
            
        })
    else connection.query('SELECT * FROM product',(err,rows)=>{
          if(!err)
            res.json(rows)
       else
           console.log(err)
       
    }) 
})

    /*ruta: productos por id */
router.get('/product/:id',(req, res,next)=>{
  const {id}=req.params;
  connection.query('SELECT * FROM product WHERE id = ?',[id],(err,rows)=>{
      if(!err){
          res.json(rows[0])
      }else{
          console.log(err)
      }
  })

  
})


router.get('/category',(req,res)=>{
  connection.query('SELECT * FROM category',(err,rows)=>{
      if(!err){
          res.json(rows)
      }else{
          console.log(err)
      }
  })
})
module.exports = router;