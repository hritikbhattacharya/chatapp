const express = require("express");
const cors = require("cors");
const {default:axios} = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: { "private-key": "2be51f32-d378-49bf-95c7-c12ca80d00dd" },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.res.status).json(e.res.data);
  }
  
});

app.listen(3001);
