const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = req.body.title;
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const uploads = multer({ storage: storage });

const {
  getMovies,
  createMovie,
  getPopularMovies,
  getEachMovie,
  getMovieById,
  getMovieCredits,
  getMovieReviews
} = require("../controllers/movie");

// Params route

router.param("movieId", getMovieById);

// Actual Route
router.get("/", getMovies);
router.post("/", uploads.single("image"), createMovie);

// MOVIE DB APIS
router.get("/popular", getPopularMovies);
router.get("/:movieId", getEachMovie);
router.get("/:movieId/credits", getMovieCredits);
router.get("/:movieId/reviews", getMovieReviews);

module.exports = router;
