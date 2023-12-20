const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get('/tmdb', async (req, res) => {
    try{
        const API_KEY = "252372e60085f6000fa7d3a04801250e";
        const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

        const response = await axios.get(BASE_URL);
        const movies = response.data.results;
        res.json(movies);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.get('/popular', async (req, res) => {
    try{
        const API_KEY = "252372e60085f6000fa7d3a04801250e";
        const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

        const response = await axios.get(POPULAR_URL);
        const movies = response.data.results;
        res.json(movies);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.get('/top_rated', async (req, res) => {
    try{
        const API_KEY = "252372e60085f6000fa7d3a04801250e";
        const TOP_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

        const response = await axios.get(TOP_URL);
        const movies = response.data.results;
        res.json(movies);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.get('/upcoming', async (req, res) => {
    try{
        const API_KEY = "252372e60085f6000fa7d3a04801250e";
        const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

        const response = await axios.get(UPCOMING_URL);
        const movies = response.data.results;
        res.json(movies);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.get('/trending', async (req, res) => {
    try{
        const API_KEY = "252372e60085f6000fa7d3a04801250e";
        const NOW_PLAYING_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

        const response = await axios.get(NOW_PLAYING_URL);
        const movies = response.data.results;
        res.json(movies);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.post('/search', async (req, res) => {
    const {searchTerm} = req.body;
    try {
        const API_KEY = "252372e60085f6000fa7d3a04801250e";
        const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
        const response = await axios.get(SEARCH_URL);
        const movies = response.data.results;
        res.json(movies);
    } catch (error) {
        res.status(500).json({error: 'Internel Server Error'});
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});