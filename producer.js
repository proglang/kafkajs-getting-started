const { Kafka } = require("kafkajs");
const sleep = require("./sleep");
const { nanoid } = require("nanoid");
const { KAFKA_TOPIC, KAFKA_BROKER } = require("./config");

const kafka = new Kafka({
  clientId: "kafkajs-getting-started-app",
  brokers: [KAFKA_BROKER],
});

const produceMessages = async () => {
  const producer = kafka.producer();

  await producer.connect();

  let i = 1;
  while (1) {
    const message = { _id: nanoid(), data: `This is message ${i}` };
    console.log(`Producing message ${i}`);
    console.log(JSON.stringify(message));

    await producer.send({
      topic: KAFKA_TOPIC,
      messages: [{ value: JSON.stringify(message) }],
    });

    await sleep(500);
    i++;
  }
};

(async () => {
  try {
    await produceMessages();
  } catch (error) {
    console.log(error);
  }
})();
