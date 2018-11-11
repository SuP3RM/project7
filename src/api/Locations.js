const CLIENT_ID = "NFSDDABK3EVRTAF23N4GRJWKUI0MSV4GOS0LQY0OJYFB3F4S";
const CLIENT_SECRET = "NFSDDABK3EVRTAF23N4GRJWKUI0MSV4GOS0LQY0OJYFB3F4S";

export const getLocations = () => {
  fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&near=chicago&%client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20181101`)
    .then(resp => resp.json())
    .then(result => result.response.groups[0].items);
};
