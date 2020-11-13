//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

//lets spotify take care of API stuff
export const authEndpoint = "https://accounts.spotify.com/authorize";

//set previously on Spotify
const redirectUri = "http://localhost:3000/";

//login id
const clientId = "901e38936e814b059dba2e2c008dd65a"

//SCOPES - what you want to use and do from target API and gives proper permissions
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]; 

export const getTokenFromUrl = () => {
    //pulls access token from hash in url
    return window.location.hash
        .substring(1)
        //ends at &
        .split('&')
        // #token=secret&name=me&word=other
        .reduce((initial, item) => {
            var parts = item.split('=');
            //acces token 0 pull secret
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial
        }, {});
}

//makes url code to get back token
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;