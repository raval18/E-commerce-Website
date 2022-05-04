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
const auth = firebase.auth();
const sect = document.querySelector('.section-1-quot');
const order = document.querySelector('#textarea');
const TCreport = document.querySelector('.b');
const slip = document.querySelector('#slip');

const wishbutton = document.querySelector('#but');
let content = sect.innerHTML;
let orderArray = [];
auth.onAuthStateChanged((user) => {
  if(user){
    const purchMail = auth.currentUser.email;

    db.collection('confirmOrder').where('orderId', '<', Date.now()).orderBy('orderId', "desc").get().then(snapshot => {
      snapshot.docs.forEach(doc => {
          orderArray.push(doc.data().orderId);
          orderArray.push(doc.data().salesComapny);
          if(orderId){
            sect.innerHTML = content;
            wishbutton.addEventListener('submit', (e) => {
              e.preventDefault();
              db.collection('finalOrder').add({
                completedOrderDetails : order.value,
                report : TCreport.value,
                weightSlip : slip.value,
                orderId: orderArray[0],
                salesEmail: orderArray[1]
              });
              alert('Order Confirmed');  
            });
          } 
          else{
            sect.innerHTML = `<h2>Order not confirmed for last quotation</h2>`
          } 
      })
    });
  }
  else{
    sect.innerHTML = `<h2>Please log-in</h2>`
  }
})


