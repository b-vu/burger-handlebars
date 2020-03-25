const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all(data => {
        console.log(data);
        res.render("index", {burgers: data});
    })
});

router.post("/api/burgers", (req, res) => {
    console.log(req.body);

    burger.create("burger_name", req.body.name, result => {
        res.json({ id: result.insertId });
    })
})

router.put("/api/burgers/:id", (req, res) => {
    burger.update("devoured", true, "id", req.params.id, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    })
})

module.exports = router;