const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking


const africastalking = AfricasTalking({
    apiKey: 'atsk_1941837088948334b580403b0dd13471c559d8065bc3aa3e6feeeb86967dcfef8209174e', 
    username: 'sandbox'
  });

module.exports = async function sendSMS() {
    
    // TODO: Send message
    try {
  const result=await africastalking.SMS.send({
    to: '+254757876614', 
    message: 'Hey AT Ninja! Wassup...',
    from: '32053'
  });
  console.log(result);
} catch(ex) {
  console.error(ex);
} 

};