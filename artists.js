class Artist {
    constructor(name, bio) {
        this.name = name;
        this.bio = bio;
        this.portfolio = [];
        this.connections = []; 
    }

    addArtwork(artwork) {
        this.portfolio.push(artwork);
    }

    connectWithArtist(artist) {
        if (artist !== this) {
            this.connections.push(artist);
            artist.connections.push(this);
            console.log(`${this.name} is now connected with ${artist.name}.`);
        }
    }

    searchExhibitions(query) {
        console.log(`${this.name} is searching for exhibitions related to '${query}'.`);
    }
}

module.exports = Artist;
