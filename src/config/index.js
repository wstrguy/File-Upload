const {
  PORT,
  MONGO_URI,
  CLOUDINARY_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;

module.exports = {
  mongoUri: MONGO_URI,
    port: PORT || 3000,
    cloudinaryName: CLOUDINARY_NAME,
    cloudinaryApiKey: CLOUDINARY_API_KEY,
    cloudinaryApiSecret: CLOUDINARY_API_SECRET,
};
