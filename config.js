require("dotenv").config();

const KAFKA_TOPIC = process.env.KAFKA_TOPIC || "";
const KAFKA_HOST = process.env.KAFKA_HOST || "";
const KAFKA_PORT = process.env.KAFKA_PORT || "";
const KAFKA_BROKER = `${KAFKA_HOST}:${KAFKA_PORT}`;

module.exports = {
  KAFKA_TOPIC,
  KAFKA_HOST,
  KAFKA_PORT,
  KAFKA_BROKER,
};
