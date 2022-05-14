const {Router}=require("express")
const router = Router()
const usuario =require("../models/User")
const bcrypt = require('bcryptjs');



router.post("/create",async(req, res)=>{
const { email, password } = req.body;
console.log (req.body)
  try {
    const user = await new usuario(req.body);
    const sal = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, sal);
    await user.save()
    return res.json({
        ok: true,
        usuario: email
    });
  } catch (error) {
    return res.status(500).json({
        ok: false,
        msg: error
    });
  }
})

router.post("/login",async(req, res)=>{
    const { password, email } = req.body;
      try {
        const user =  await usuario.findOne({ email });
        console.log(user)
        const ps = bcrypt.compareSync(password, user.password);
        if (!ps) {
            return res.status(400).json({
                ok: false,
                msg: 'usuario inexistente'
            });
        }
        res.status(200).json({ ok: true, usuario: email });
        
      } catch (error) {
          console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "username not found"
        });
      }
    })

module.exports=router