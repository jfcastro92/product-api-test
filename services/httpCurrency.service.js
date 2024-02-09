import axios from "axios";

//Function Http Currency Exchange : Return current Currency between USD / CAD
async function getCurrency() {
    // "convert" - convert $1 USD to $1 CAD
    console.log("Requesting exchange rate USD/CAD");  
    const response = await axios.get(
        `http://api.currencylayer.com/convert?access_key=changeme&from=USD&to=CAD&amount=1`);

    return response;
  }
  
  export { getCurrency }