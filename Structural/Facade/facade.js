
/**
 * The Facade
function getFetch(url,params = {}){
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&');

    return fetch(`${url}?${queryString}`,{
        method:"GET",
        headers : {"Content-Type": "application/json"}
    }).then(res => res.json())
}
*/
/**
 * This function is the facade function that acts as an operator to the apis
 * @param {*string} url api endpoint
 * @param {*string} params api possible addition :/ 
 * @returns the data fetched after the api call
 */
function getFetch(url,params = {}){
    return axios({
        url:url,
        method:"GET",
        params: params
    }).then(res => res.data)
}

/**
 * The function for getting users
 * @returns the users
 */
function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
}
/**
 * The functio of getting a posts of a user
 * @param {*string} userId the user id  
 * @returns the posts of the user with the given id
 */
function geUserPosts(userId){
    return getFetch(`https://jsonplaceholder.typicode.com/posts`,{
        userId: userId
    })
}
/**
 * Client Code 
 */
getUsers().then(users => {
    users.forEach(user => {
        -geUserPosts(user.id).then(posts => {
            console.log(user.name);
            console.log(posts.length);
        })
    });
})