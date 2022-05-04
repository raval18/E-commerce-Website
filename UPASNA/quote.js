const form = document.querySelector('#percent');

const firebaseConfig = {
    apiKey: "AIzaSyCELspb5D7Q6xaFsHh5tCVYlYadd5H9R_0",
    authDomain: "upasana-metals.firebaseapp.com",
    databaseURL: "https://upasana-metals.firebaseio.com",
    projectId: "upasana-metals",
    storageBucket: "upasana-metals.appspot.com",
    messagingSenderId: "1059840499678",
    appId: "1:1059840499678:web:a3ea75a968204c63f4074f",
    measurementId: "G-1XS0T5DEZZ"
  };
   
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // firebase firestore
  const db = firebase.firestore();
 
  db.settings({ timestampsInSnapshots : true });  


const percent = document.querySelector('#percent');
const payment = document.querySelector('#payment');
const delivery = document.querySelector('#delivery');

const wishbutton = document.querySelector('#button-quote');




wishbutton.addEventListener('submit', (e) => {
    e.preventDefault();
    var salesFlag = salesValidation();
    if(salesFlag){
    db.collection('Quotation').add({
       percentAdded : percent.value,
       paymentTerms : payment.value,
       deliveryTerms : delivery.value
    });    
    alert('Stored Succesfully');
}
});

function salesValidation(salesFlag){
    console.log('HEY');
    const Payment = document.querySelector('#payment').value;
    const Percent= document.querySelector('#percent').value;
    const Delivery= document.querySelector('#delivery').value;
   
    if(Percent == null){
        alert('Enter details of percent');
        return false;
    }
   
    else {
      return true; 
    }
}