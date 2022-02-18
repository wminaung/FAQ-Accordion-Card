/* Fetch API */
const url = "https://fakestoreapi.com/products";
let products;
fetch(url)
  .then((response) => {
    const responseData = response.json();

    return responseData;
  })
  .then((productsDataFromServer) => {
    products = productsDataFromServer;
    console.log(products);
  })
  .catch((err) => {
    console.log("ERR", err);
  });
