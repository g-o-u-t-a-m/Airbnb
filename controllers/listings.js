const Listing = require("../models/listing.js");

const axios = require("axios");

async function getCoordinates(location) {
    const res = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: location,
                format: "json",
                limit: 1
            },
            headers: {
                "User-Agent": "wanderlust-app" // 🔥 REQUIRED
            }
        }
    );

    if (!res.data || res.data.length === 0) {
        throw new Error("Location not found");
    }

    return [
        parseFloat(res.data[0].lon),
        parseFloat(res.data[0].lat)
    ];
}

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });;
}

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}

module.exports.createListing = async (req, res) => {
    try {
        let newListing = new Listing(req.body.listing);
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
        // 🔥 Convert location → coordinates
        const coords = await getCoordinates(req.body.listing.location);

        newListing.geometry = {
            type: "Point",
            coordinates: coords
        };

        newListing.owner = req.user._id;

        await newListing.save();

        req.flash("success", "New listing created!");
        res.redirect("/listings");

    } catch (err) {
        req.flash("error", "Invalid location");
        res.redirect("/listings/new");
    }
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
}

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
}