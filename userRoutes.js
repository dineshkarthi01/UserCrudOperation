const express = require ('express');
const router = express.Router();

let users = [];


function findUserById(id) {
    return users.find(user => user.id === id);
}

//create
router.post ('/users',(req,res) => {
    const newUser = req.body;

    newUser.id = 'generated_id';
    newUser.created_at = new Date();
    newUser.updated_at = new Date();
    users.push(newUser);
    res.status(200).json(newUser);
});

//read
router.get('/users/:id' , (req,res) => {
    const user = findUserById(req.params.id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(400).json({error: 'user not found'});
    }
} )

//update
router.put ('/users/:id', (req,res) =>{
    const user = findUserById(req.params.id);
    if (user) {
        user.first_name = req.body.first_name || user.first_name;
        user.middle_name = req.body.middle_name || user.middle_name;
        user.last_name = req.body.last_name || user.last_name;
        user.country_code = req.body.country_code || user.country_code;
        user.country_number = req.body.country_number || user.country_number;
        user.mobile_number = req.body.mobile_number || user.mobile_number;
        user.email = req.body.email || user.email;
        user.address = req.body.address || user.address;
        user.area_id = req.body.area_id  || user.area_id ;
        user.photo = req.body.photo || user.photo;
        user.updated_at = new Date();
        res.status(200).json(user);
    } else {
        res.status(400).json({error:'user not found'});
    }
})

//delete
router.delete('/users/:id',(req,res) =>{
     const index = users.findIndex(user => user.id === req.params.id);
     if (index !== -1 ) {
        users.splice(index,1);
        res.sendStatus(200);
     } else {
        res.status(400).json({error: 'user not found'});
     }
})

module.exports = router;