
let loggedIn = false;

let uInfo = [];

function setLogged() {
    console.log('here');
    loggedIn = true;
}

function setInfo(data) {

    uInfo = data;
    console.log(uInfo);
}

export default { setLogged , setInfo , uInfo, loggedIn};