
const multer = require("multer");
const router = require("express").Router();
const User = require("../models/user.model");
const upload = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");
const log = require("../utils/logger");

var formData = new FormData();
formData.append('image',this.new_attachments)

router.post("/profile", upload.single("image"), async(req, res, next) => {
  const { name } = req.body;
 
  try {
    const uploadToCloudinary = await cloudinary.uploader.upload(req.file.path);
   
    const user = new User({
      name,
      image: uploadToCloudinary.secure_url,
    });

    await user.save();

    return res.status(200).json({ user });
  } catch (error) {
    log.error(error);
  }
});


router.get("/profile", async (req, res, next) => {
  try {
    const users = await User.find();
    res.render("profile", { users });
  } catch (error) {
    log.error(error);
    
  }
});


module.exports = router;