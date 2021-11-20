const { Kafka } = require("kafkajs");
const sleep = require("./sleep");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const produceMessages = async (numberOfMessages = 10) => {
  const producer = kafka.producer();

  await producer.connect();

  let i = 1;
  while (1) {
    console.log(`Producing message ${i}`);
    await producer.send({
      topic: "topicTest.v1",
      messages: [{ value: `Message ${i}` }],
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
