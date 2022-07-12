const firebaseConfig = {
    apiKey: "AIzaSyChUhYRpsthBDi9CUJFm1W90QnqsAUKYHQ",
    authDomain: "accountform-3cdfe.firebaseapp.com",
    databaseURL: "https://accountform-3cdfe-default-rtdb.firebaseio.com",
    projectId: "accountform-3cdfe",
    storageBucket: "accountform-3cdfe.appspot.com",
    messagingSenderId: "99639939855",
    appId: "1:99639939855:web:15341af408613ee3cc647a"
};

firebase.initializeApp(firebaseConfig);

const AccountFormDB = firebase.database().ref('AccountForm');

document.getElementById('AccountForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var firstName = getElementval('create_firstname');
    var lastName = getElementval('create_lastname');
    var email = getElementval('email');
    var phone = getElementval('dob');
    var city = getElementval('City');
    var pass = getElementval('password2');

    saveData(firstName, lastName, email, phone, city, pass);
    document.querySelector('.alert').style.display = "block";

    setTimeout(()=>{
        document.querySelector('.alert').style.display = "none";
    },5000);


    document.getElementById('AccountForm').reset();
}

const saveData = (firstName, lastName, email, phone, city, pass) =>{
    var newAccountForm = AccountFormDB.push();

    newAccountForm.set({
        firstname : firstName,
        lastName : lastName,
        email : email,
        phone : phone,
        city : city,
        pass: pass,

    });
}

const getElementval = (id) =>{
    return document.getElementById(id).value;
}