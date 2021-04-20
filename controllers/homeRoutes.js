const router = require("express").Router();
const {    } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
    res.render("homepage");
});

router.get("/list/:id", async (req, res) => {
    console.log(req.params.id);
    res.render("list");
});

router.get("/profile", async (req, res) => {
    res.render("profile");
});

router.get('/login', async (req, res) => {
    res.render("login");
});

module.exports = router;