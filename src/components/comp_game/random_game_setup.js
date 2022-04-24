const memoryCardsToUse = [];const orderCardsSetup = [];

const randomMemorySetup = () => {
  while (memoryCardsToUse.length !== 12) {
    const num = Math.floor(Math.random() * (16 - 2) + 2);
    const random = num % 2 === 0 ? num : num - 1;
    if (!memoryCardsToUse.includes(random)) {
      memoryCardsToUse.push(random);
      memoryCardsToUse.push(random - 1);
    }
  }
  while (orderCardsSetup.length !== memoryCardsToUse.length) {
    const random = Math.floor(Math.random() * 12);
    if (!orderCardsSetup.includes(memoryCardsToUse[random]))
      orderCardsSetup.push(memoryCardsToUse[random]);
  }
  return orderCardsSetup;
};

module.exports = randomMemorySetup;
