const Address = require("../models/addressModel");


const saveAddress = async (req, res) => {
  const { houseDetails, category, location } = req.body;

  try {
    const newAddress = new Address({
      houseDetails,
      category,
      location,
    });

    const savedAddress = await newAddress.save();
    res.status(201).json(savedAddress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { saveAddress, getAllAddresses };
