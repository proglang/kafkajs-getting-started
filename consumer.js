const { Kafka } = require("kafkajs");
const { KAFKA_TOPIC } = require("./config");

const kafka = new Kafka({
  clientId: "kafkajs-getting-started-app",
  brokers: ["localhost:9092"],
});

const consumeMessages = async () => {
  const consumer = kafka.consumer({
    groupId: "kafkajs-getting-started-group",
  });
  await consumer.connect();
  await consumer.subscribe({ topic: KAFKA_TOPIC });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Receiving message:`);
      console.log(message.value.toString());
    },
  });
};

(async () => {
  await consumeMessages();
})();
