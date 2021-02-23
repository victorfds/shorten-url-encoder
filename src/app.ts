import server from './server';

const port = parseInt(process.env.PORT || '3000');

const appServer = server();

appServer.dbConnect();

const starter = appServer
  .start(port)
  .then((port) => console.log(`Running on port ${port}`))
  .catch((error) => {
    console.log(error);
  });

export default starter;
