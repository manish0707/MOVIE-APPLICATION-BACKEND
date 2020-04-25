const Movie = require('../models/movie');
const { fetchApi } = require('../utils/apiHelper')


// param controllers

exports.getMovieById = (req, res, next, id) => {
  const requestUrl = process.env.MOVIE_BASE_URL + id + process.env.MOVIE_API_KEY;
  fetchApi(requestUrl)
  .then(result => {
    req.movie = result;
    next();
  })
  .catch(err => {
    next();
  })
}


// request handlers

exports.createMovie = (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    description: req.body.description,
    releaseDate: req.body.releaseDate,
    image: req.file.path.toString(),
    revenue: req.body.revenue,
    popularity: req.body.popularity,
    homepage: req.body.homepage
  })

  movie.save()
  .then(result => {
    res.status(200).json({
      message : "Movie created successfully!",
      movie: result
    })
  })
  .catch(err => {
    res.status(400).json({
      error : "Movie did not created!"
    })
  })
}

exports.getMovies = (req, res) => {
  Movie.find().exec().then(result => {
    res.status(200).json({
      message : "You got the movies!",
      movies : result
    })
  })
  .catch(err => {
    res.status(400).json({
      error : "Can't Get the movies!"
    })
  })
}

exports.getPopularMovies = (req, res) => {
  const popularMovieUrl = process.env.MOVIE_BASE_URL + 'popular' + process.env.MOVIE_API_KEY

  console.log(popularMovieUrl);

  fetchApi(popularMovieUrl)
  .then(result => {
    res.status(200).json({
      success : true,
      popularMovies : result
    })
  })
  .catch(err => {
    res.status(400).json({
      success : false,
      message : "Unable to fetch popular movies!"
    })
  })
}

exports.getEachMovie = (req, res) => {
  if(!req.movie) {
    res.status(400).json({
      success : false,
      error : "Can't fetch movie"
    })
  }
  res.status(200).json({
    success: true,
    movie : req.movie
  })
}

exports.getMovieCredits = (req, res) => {
  console.log('CREDITS')
  const requestUrl = process.env.MOVIE_BASE_URL + req.movie.id + '/credits' +process.env.MOVIE_API_KEY;
  fetchApi(requestUrl)
  .then(result => {
    res.status(200).json({
      success : true,
      credits: result
    })
  })
  .catch(err => {
    res.status(400).json({
      success : false,
      error : "Unable to find credits!"
    })
  })
}

exports.getMovieReviews = (req, res) => {
  const requestUrl = process.env.MOVIE_BASE_URL + req.movie.id +"/reviews"+ process.env.MOVIE_API_KEY;
  console.log(requestUrl);
  fetchApi(requestUrl)
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.status(400).json({
      success : false,
      error : "Can't get movies!"
    })
  })
}