const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.status(200).json({
        ok: "True",
        menssage: "Hello world from node js"
    })
})

module.exports = router;
