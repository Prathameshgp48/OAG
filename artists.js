class Artist {
    constructor(name, bio) {
        this.name = name;
        this.bio = bio;
        this.portfolio = [];
    }

    addArtwork(artwork) {
        this.portfolio.push(artwork);
    }

    connectWithArtist(artist) {
        // Add logic to establish connections with other artists.
    }

    searchExhibitions(query) {
        // Add logic to search for art exhibitions.
    }
}

module.exports = Artist;
