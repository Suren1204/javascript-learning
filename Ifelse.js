// let age = 20;

// if (age > 18){
//     console.log ('Elgibile to watch the Xumo Play 18+ content');
// }

// else{
//     console.log ('Not eligible to watch the Xumo Play 18+ content');
// }


// let number = 10;

// if (number % 'even'){
//     console.log('Yes, Its even number');
// }
// else{
//     console.log('No, its Odd number');
// }


// let username = 'Vetri',
//     password = '1234';

// if (username = 'Vetri', password = '1234') {
//     console.log('Login sucessfully');
// }

// else{
//      console.log('Username or Password mistach');
// }


// let appInstalled = true;
// let appLaunched = true;

// if (appInstalled = true){
//     console.log(PASS);
// } else {
// (appLaunched = true)
//     console.log(FAIL);
// }

// let videoLoaded = true;
// let audioLoaded = false;
// let playbackStarted = true;

// if (videoLoaded && audioLoaded && playbackStarted){
//     console.log("TEST PASS")
// } else {
//     console.log("TEST FAIL")
// }

// let wifiConnected = false;
// let ethernetConnected = true;

// if(wifiConnected || ethernetConnected){
//     console.log("NETWORK AVAILABLE")
// } else {
//     console.log("NETWORK UNAVAILABLE")
// }

// let deviceConnected = false;
// let appCrashed = true;

// if (deviceConnected && !appCrashed){
//     console.log("AUTOMATION CAN CONTINUE")
// } else {
//     console.log("STOP AUTOMATION")
// }


// let videoLoaded = true;
// let audioLoaded = false;
// let subtitlesEnabled = true;

// if (videoLoaded && audioLoaded && subtitlesEnabled){
//     console.log("Playback Ready")
// } else{
//     console.log("Playback Failed")
// }

// let installedVersion = 150;
// let requiredVersion = 150;
// let deviceConnected = true;

// if(installedVersion >= requiredVersion && deviceConnected){
//     console.log("BUILD READY FOR TESTING")
// } else{
//     console.log("BUILD NOT READY")
// }


let appInstalled = true;
let deviceConnected = true;
let appCrashed = false;
let buildVersion = 145;
let minimumVersion = 150;

if(appInstalled && 
    deviceConnected && 
    !appCrashed &&
    buildVersion >= minimumVersion){
    console.log("AUTOMATION TEST STARTED")
} else{
    console.log("AUTOMATION TEST BLOCKED")
}