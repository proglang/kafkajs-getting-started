require("dotenv").config();

module.exports = {
  KAFKA_TOPIC: process.env.KAFKA_TOPIC || "",
  KAFKA_BROKER: process.env.KAFKA_BROKER || "",
};
