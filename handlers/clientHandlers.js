const { v4: uuidv4 } = require("uuid");
const { clients } = require("../data/clients");

// write your handlers here...
// write your handlers here...
const handleClients = (req, res) => {
  res.status(200).json({ status: 200, data: clients });
};

const clientById = (req, res) => {
  let found = false;
  clients.forEach((client) => {
    if (client.id === req.params.id) {
      res.status(200).json({ status: 200, data: client });
      found = true;
    }
  });

  if (!found) {
    res
      .status(404)
      .json({ status: 404, error: "Could not find this customer" });
  }
};

const addClient = (req, res) => {
  let alreadyExists = false;
  clients.forEach((client) => {
    if (client.email === req.body.email) {
      alreadyExists = true;
    }
  });

  if (alreadyExists) {
    res
      .status(400)
      .json({ status: 400, message: "This email is already taken." });
  } else {
    const id = uuidv4();
    data.id = id;
    clients.push(data);
    res.status(201).json({ status: 201, message: "client registered" });
  }
};

const deleteClient = (req, res) => {
  let found = false;
  clients.forEach((client) => {
    if (client.id === req.params.id) {
      res.status(200).json({ status: 200, data: client });
      found = true;
    }
  });

  if (!found) {
    res.status(404).json({ status: 404, error: "Clients not found" });
  }
};

module.exports = { handleClients, clientById, addClient, deleteClient };
