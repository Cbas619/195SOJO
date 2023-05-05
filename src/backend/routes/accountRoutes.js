const router = require("express").Router();

// import Account models in model folder
// const is is the name of Model const
const Account = require("../models/Account");

// @route GET api/account
// @desc  Get All accounts

//We already in api/accountRoutes in the index.js we only put / slash here
router.get("/", (req, res) => {

    //find() method give us a promise then we fetch from the database give us account
    Account.find()
        .then (accountRoutes => res.json(accountRoutes))
});

// @route POST api/account
router.post("/", (req, res) => {
    //create newAccount in memory that takes in the model schemas
    const newAccount = new Account({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });
    //save newAccount to database
    newAccount.save()
    .then(accountRoutes => 
        res.json(accountRoutes));
});

//  @route DELETE api/account/:id
//  @desc  Delete an acount
//  Delete account by id, req.params.id will fetch the URI
//  Postman: http://localhost:4000/api/account/id

router.delete('/:id', (req, res) => {

    Account.findById(req.params.id)
    .then(Account => Account.remove().then(() => res.json({ success: "Account removed!" })))
    .catch(err => res.status(404).json({ success: false }));
});     

//  @route PUT api/account/
router.put('/', (req, res) => {
    try {
        const update = Account.findByIdAndUpdate(
            req.params.id,
            {
            
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            },
            {new: true},
        )
        return res.status(200).json(update)
    } catch (err) {
        return res.status(500).json(err)
    }
});

module.exports = router;
