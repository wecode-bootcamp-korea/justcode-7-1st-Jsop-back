const { createApp } = require('./app');

const app = createApp();

// init
// TODO 1 - remove '|| 8000' 
const PORT = process.env.PORT
app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server is running on port ${PORT}.`);
});
