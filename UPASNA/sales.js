//Firebase Connection Config
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

//Sales to UM-ST
const metals = document.querySelector('#metal');
const shapes = document.querySelector('#shape');
const grades = document.querySelector('#grade');
const sizes = document.querySelector('#size');
const quants = document.querySelector('#quantity');
const usages = document.querySelector('#usage');
const wishbutton = document.querySelector('#wishlistbutton');




wishbutton.addEventListener('submit', (e) => {
    e.preventDefault();
    var salesFlag = salesValidation();
    if(salesFlag){
    db.collection('metalsInquiry').add({
        metal: metals.value,
        grade: grades.value,
        shape: shapes.value,
        sizes: sizes.value,
        quantity: quants.value,
        usage: usages.value,
    })
    quants.value = null;
    usages.value = null;
    alert('Stored Succesfully');
    
});


function salesValidation(salesFlag){
    console.log('HEY');
    const metaLS = document.querySelector('#metal').value;
    const gradES = document.querySelector('#grade').value;
    const sizES = document.querySelector('#size').value;
    const quanTS = document.querySelector('#quantity').value;
    const usagES = document.querySelector('#usage').value;
    const shapES = document.querySelector('#shape').value;
    if(metaLS == null){
        alert('Enter details of metal');
        return false;
    }
    else if(gradES == null){
        alert('Enter details of Grades');
        return false;
    }
    else if(sizES == null){
        alert('Enter details of Sizes');
        return false;
    }
    else if(quanTS == ''){
        alert('Enter details of Quantity');
        return false;
    }
    else if(usagES == ''){
        alert('Enter details of Usage');
        return false;
    }
    else if(shapES == null){
        alert('Enter details of Shapes');
        return false;
    }
    else {
      return true; 
    }
}