const accountSid = 'AC63971f4d955603f2b2176c4e7b2847ec';
const authToken = 'd13e6769e26dcfac0e2ea00fbe0777e2';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+17205943512',
     to: '+17204704967'
   })
  .then(message => console.log(message.sid))
  .done();