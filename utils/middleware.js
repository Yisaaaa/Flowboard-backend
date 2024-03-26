const unknownEndpoint = (request, response) => {
    response.status(400).json({ error: "unknown endpoint" });
};

module.exports = { unknownEndpoint };
