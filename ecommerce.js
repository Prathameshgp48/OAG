class EcommercePortal {
    constructor() {
        this.artworks = [];
        this.orders = [];
    }

    addArtwork(artwork) {
        this.artworks.push(artwork);
    }

    buyArtwork(artwork, customer) {
        if (this.artworks.includes(artwork)) {
            this.orders.push({ artwork, customer });
            this.artworks = this.artworks.filter(a => a !== artwork);
            console.log(`${customer} has purchased '${artwork}'.`);
        } else {
            console.log(`Artwork '${artwork}' is not available.`);
        }
    }

    viewOrders() {
        console.log('List of Orders:');
        for (const order of this.orders) {
            console.log(`Artwork: ${order.artwork}, Customer: ${order.customer}`);
        }
    }
}

module.exports = EcommercePortal;
