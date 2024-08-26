const express = require("express");
const axios = require("axios");

const app = express();

// Proxy API route
app.get("/api/restaurant/outlet/details", async (req, res) => {
  try {
    const response = await axios.get(
      "https://food.noon.com/_svc/mp-food-api-mpnoon/consumer/restaurant/outlet/details/guest",
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": process.env.API_KEY, // Use an environment variable for the API key
        },
        params: {
          outletCode: "LMDHRSKJCW", // Add any necessary query parameters here
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
});

module.exports = app;
