const CLIENT_ID = "NFSDDABK3EVRTAF23N4GRJWKUI0MSV4GOS0LQY0OJYFB3F4S";
const CLIENT_SECRET = "GIRXZFHZEMIID0A12MB3ISZ1DVFEZ5TEHZZ1OTDFQRSDNMQR";
/*
export const getLocations = () => {
  return fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&near=chicago&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20181101`)
    .then(response => response.json())
    .then(result => result.response.groups[0].items);
};
*/

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const getLocations = () => {
  return fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&near=chicago&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20181101`)
  .then(handleErrors)
  .then(response => response.json())
  .then(result => result.response.groups[0].items)
  .catch(error => console.log(error) );
};
