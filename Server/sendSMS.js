const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking


const africastalking = AfricasTalking({
    apiKey: 'atsk_fa2af2a7985cbfcafcb6c7e5ceaaa4dde6dcd456f097740eb761d15bbc4746f082f80f0b', 
    username: 'eric2578'
  });

module.exports = async function sendSMS() {
    
    // TODO: Send message
    try {
  const result=await africastalking.SMS.send({
    to: '+254757876614', 
    message: 'Hey AT Ninja! Wassup...',
  });
  console.log(result);
} catch(ex) {
  console.error(ex);
} 

};