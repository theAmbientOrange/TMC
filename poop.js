/* What the fuck did you fucking say to me you fucking fagot.*/


/*devices is an array of DeviceInfo of local device*/
function getLocal(devices){
  /* Sanity Checking*/
  if(devices.length <= 1){
    alert("Hey fuck you");
  }
}

/*Test run of get local devices.  Fuck your mom.*/
chrome.signedInDevices.onDeviceInfoChange.addListener(getLocal);
