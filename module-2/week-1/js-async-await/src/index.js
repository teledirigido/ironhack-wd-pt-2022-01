const directions = [
  "Starting point: Ironhack Paris",
  "🚗 Head northwest on Bd Voltaire toward Rue Léon Frot",
  "⬅️ Turn left onto Rue Chanzy",
  "☕️ Café Titon, 34 Rue Titon, 75011 Paris, France",
];


function obtainDirections(step, timing) {
  return new Promise ( (resolve, reject) => {
    setTimeout(() => {
      console.log( directions[step] );
      if (!directions[step]){
        reject("Instructions not found.");
      }
      else {
        resolve();
      }
    }, timing);
  })
}

async function getCoffee() {
  await obtainDirections(0, 1000);
  await obtainDirections(1, 100);
  await obtainDirections(2, 2000);
  await obtainDirections(3, 1500);
  console.log("🎉 You arrived at your destination!");
}

getCoffee();
