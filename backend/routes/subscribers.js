const express = require("express");
const router = express.Router();

//crud

router.get("/", (req, res) => {
	res.send("hello world");
});
router.get("/:id", (req, res) => {
	req.params.id;
});
router.post("/", (req, res) => {});
//update
router.patch("/", (req, res) => {});
router.delete("/:id", (req, res) => {});

module.exports = router;
