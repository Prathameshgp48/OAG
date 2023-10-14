class Artist {
    constructor(name, bio) {
        this.name = name;
        this.bio = bio;
        this.portfolio = [];
        this.connections = [];
        this.followers = [];
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

    addFollower(follower) {
        if (!this.followers.includes(follower)) {
            this.followers.push(follower);
            console.log(`${follower} is now following ${this.name}.`);
        }
    }

    sellArtwork(artwork, ecommerce) {
        if (this.portfolio.includes(artwork)) {
            this.portfolio = this.portfolio.filter(a => a !== artwork);
            ecommerce.addArtwork(artwork);
            console.log(`${this.name} has added '${artwork}' for sale.`);
        } else {
            console.log(`Artwork '${artwork}' is not in the artist's portfolio.`);
        }
    }
}

module.exports = Artist;
