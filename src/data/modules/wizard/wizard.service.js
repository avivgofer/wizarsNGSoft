import Axios from "axios";
const wizardUrl = "https://my-json-server.typicode.com/galits/testNgsoft";

async function getIngredients() {
  const url = `${wizardUrl}/ingredients`;
  return Axios.get(url);
}

async function getCategories() {
  const url = `${wizardUrl}/categories`;
  return Axios.get(url);
}

async function getUnits() {
  const url = `${wizardUrl}/unitMeasures`;
  return Axios.get(url);
}

async function getOrigins() {
  const url = `${wizardUrl}/origins`;
  return Axios.get(url);
}

export { getIngredients, getCategories, getUnits, getOrigins };
