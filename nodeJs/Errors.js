process.on('uncaughtException', (err) => {
  console.error('234', err);
  process.exit(1);
});

const doSomething1 = () => {
  try {
  } catch (err) {
    throw new Error(err.message);
  }
};

doSomething1()
  .then(doSomething2)
  .then(doSomething2)
  .catch((err) => console.error(err));

doSomething1()
  .then(() => {
    return doSomething2().catch((err) => {
      throw err;
    });
  })
  .then(() => {
    return doSomething2().catch((err) => {
      throw err;
    });
  })
  .catch((err) => console.error(err));

async function someFunction() {
  try {
    await someOtherFunction();
  } catch (err) {
    console.error(err.messageq);
  }
}
