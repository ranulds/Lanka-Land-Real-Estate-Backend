const express = require("express");
const router = express.Router();

// Load Inquiry model
const Inquiry = require("../../models/Inquiry");

// @route POST api/add
// @description add/save inquiry
// @access Public
router.post("/add", (req, res) => {
  Inquiry.create(req.body)
    .then((inquiry) => res.json({ msg: "Inquiry added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this inquiry" })
    );
});

// @route GET api/inquiries
// @description Get all inquiries
// @access Public
router.get("/inquiries", (req, res) => {
  Inquiry.find()
    .then((inquiries) => res.json(inquiries))
    .catch((err) =>
      res.status(404).json({ noinquiriesfound: "No inquiries found" })
    );
});

// @route DELETE api/inquiry/:id
// @description Delete inquiry by id
// @access Public
router.delete("/inquiry/:id", (req, res) => {
  Inquiry.findByIdAndDelete(req.params.id, req.body)
    .then((inquiry) => res.json({ mgs: "Inquiry entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such inquiry" }));
});

// @route PUT api/inquiry/:id
// @description Update inquiry
// @access Public
router.put("/inquiry/:id", (req, res) => {
  Inquiry.findByIdAndUpdate(req.params.id, req.body)
    .then((inquiry) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/inquiry/:id
// @description Get single inquiry by id
// @access Public
router.get("/inquiry/:id", (req, res) => {
  Inquiry.findById(req.params.id)
    .then((inquiry) => res.json(inquiry))
    .catch((err) =>
      res.status(404).json({ noinquiryfound: "No inquiry found" })
    );
});

module.exports = router;
