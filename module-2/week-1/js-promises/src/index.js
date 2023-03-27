/**
 * mi_primera_promesa: Promise recibe como argumento dos variables:
 * @param resolve, una funcion callback
 * @param reject, otra function callback
 *
 */
const mi_primera_promesa = new Promise( (resolve, reject) => {
  let found = true;
  if (found) {
    resolve(found);
  } else {
    reject();
  }
});

mi_primera_promesa.then( (found) => {
  console.log(found);
  console.log('Esta es mi primera promesa');
  return 1000;
}).then( (data) => {
  console.log(data);
})
.catch( () => {
  console.error('Whoopsie, something has gone wrong');
});
