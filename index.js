//Write code in a functional style to convert the input to the output:
// input = { tag: 'JAVASCRIPT” } output = “(javascript) ” 

import { pipe } from 'lodash/fp';

const pickTag = object => object.tag;
const toLowerCase = str => str.toLowerCase();
const addBracket = str => `(${str})`;

const result = pipe(pickTag, toLowerCase, addBracket);
const output = result({ tag: "JAVASCRIPT" })
console.log(output);
//----------------------------------------------------------------------------


//2.We have a recipe object as follows: 
//recipe = { name: “Spaghetti Bolognese”, ingredients: [“egg”, “salt”] }
// Assuming that this object is immutable, 
//write code to
// - Add a new ingredient(“cream”) 
//- Replace “egg” with “egg white”
// -Remove an ingredient(“egg”)

const recipe = { name: 'Spaghetti Bolognese', ingredients: ['egg', 'salt'] }

//Add an ingredients
const added = {
  ...recipe,
  ingredients: [
    ...recipe.ingredients, 'cream']
};

//Update an ingredient
const updated = {
  ...recipe,
  ingredients: recipe.ingredients.map(ingredient => ingredient === "egg" ? "egg white" : ingredient)
};

//Remove an ingredient
const removed = {
  ...recipe,
  ingredients: recipe.ingredients.filter(ingredient => ingredient !== "agg")
};

//----------------------------------------------------------------------------------------