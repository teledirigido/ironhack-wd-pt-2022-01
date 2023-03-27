/**
 *
 * @function displayMissionPatches
 *
 * Display Mission launches only
 * using async and await
 *
 */
async function displayMissionPatches() {
  try {

    const my_var = '123123';
    const response = await fetch("https://api.spacexdata.com/v4/launches");
    const responseJson = await response.json();
    const firstObj = responseJson[0];

  } catch (error) {
    // Handle error or a rejected Promise
    console.log("Something went wrong!", error);
  }
}

displayMissionPatches();

/**
 *
 * @function displayMissionPatches
 *
 * Display Mission launches Promises
 *
 */
function displayMissionPatchesPromises() {
  return fetch("https://api.spacexdata.com/v4/launches");
}

displayMissionPatchesPromises().then( (response) => {
  return response.json()
}).then( (data) => {
  console.log(data[0]);
});
