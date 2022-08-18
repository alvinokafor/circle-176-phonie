function startApp() {
  const mtnNumbers = [
    "0803",
    "0806",
    "0704",
    "0703",
    "0706",
    "0813",
    "0816",
    "0814",
    "0903",
    "0906",
    "0810",
    "0913",
    "0916",
  ];
  const airtelNumbers = [
    "0802",
    "0808",
    "0702",
    "0708",
    "0812",
    "0701",
    "0901",
    "0818",
    "0902",
    "0904",
    "0912",
    "0907",
  ];
  const gloNumbers = ["0805", "0807", "0705", "0815", "0811", "0905", "0915"];
  const nineMobileNumbers = ["0809", "0818", "0817", "0909", "0908"];

  const phoneNumber = document.getElementById("phone_number");
  const button = document.getElementById("button");
  const img = document.getElementById("img");

  function validatePhoneNumber() {
    const value = phoneNumber.value; // will be more than 4 characters
    const first4 = value.substring(0, 4); // first 4 characters

    const mtnBool = mtnNumbers.includes(first4);
    const airtelBool = airtelNumbers.includes(first4);
    const gloBool = gloNumbers.includes(first4);
    const nineMobileBool = nineMobileNumbers.includes(first4);
    // console.log('mtnBool', mtnBool)

    if (mtnBool) {
      img.src = "./images/MTN.png";
      img.style.visibility = "visible";
    } else if (airtelBool) {
      img.src = "./images/Airtel.png";
      img.style.visibility = "visible";
    } else if (gloBool) {
      img.src = "./images/Glo.png";
      img.style.visibility = "visible";
    } else if (nineMobileBool) {
      img.src = "./images/9mobile.png";
      img.style.visibility = "visible";
    } else {
      img.style.visibility = "hidden";
    }
  }

  button.addEventListener("click", validatePhoneNumber);
  phoneNumber.addEventListener("keyup", validatePhoneNumber);

};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //