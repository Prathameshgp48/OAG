const express = require('express');
const app = express();
const Artist = require('./artist');
const EcommercePortal = require('./ecommerce');
const artists = [];
const ecommerce = new EcommercePortal();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Artist profile creation route
app.post('/create_artist_profile', (req, res) => {
    const { name, bio } = req.body;
    const artist = new Artist(name, bio);
    artists.push(artist);
    res.redirect('/');
});

// Artwork addition route
app.post('/add_artwork', (req, res) => {
    const { artistName, artwork } = req.body;
    const artist = artists.find(a => a.name === artistName);
    if (artist) {
        artist.addArtwork(artwork);
    }
    res.redirect('/');
});

// Artwork purchase route
app.post('/buy_artwork', (req, res) => {
    const { artwork, customer } = req.body;
    ecommerce.buyArtwork(artwork, customer);
    res.redirect('/');
});

// Main page with forms
app.get('/', (req, res) => {
    res.render('index', { artists, artworks: ecommerce.artworks });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
