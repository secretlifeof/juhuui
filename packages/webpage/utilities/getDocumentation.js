// @preval
// +//

const path = require('path');
const fs = require('fs');

const DIR = path.join(process.cwd(), './documentation/');
const componentsDIR = `${DIR}components/`;
const recipesDIR = `${DIR}recipes/`;

const fileNamesDocumentation =
  fs.readdirSync(DIR).filter((file) => file.endsWith('.md')) || [];
const fileNamesComponents =
  fs.readdirSync(componentsDIR).filter((file) => file.endsWith('.md')) || [];
const fileNamesRecipes =
  fs.readdirSync(recipesDIR).filter((file) => file.endsWith('.md')) || [];

const filesRoot = fileNamesDocumentation.reduce((obj, file) => {
  const name = path.join(DIR, file);
  const extension = path.extname(name);
  const fileName = path.basename(name, extension);
  const contents = fs.readFileSync(name, 'utf8');
  return { ...obj, [fileName]: { name: fileName, contents } };
}, {});

const filesComponents = fileNamesComponents.reduce((obj, file) => {
  const name = path.join(componentsDIR, file);
  const extension = path.extname(name);
  const fileName = path.basename(name, extension);
  const contents = fs.readFileSync(name, 'utf8');
  return { ...obj, [fileName]: { name: fileName, contents } };
}, {});

const filesRecipes = fileNamesRecipes.reduce((obj, file) => {
  const name = path.join(recipesDIR, file);
  const extension = path.extname(name);
  const fileName = path.basename(name, extension);
  const contents = fs.readFileSync(name, 'utf8');
  return { ...obj, [fileName]: { name: fileName, contents } };
}, {});

module.exports = {
  filesRoot,
  filesComponents,
  filesRecipes
};
