// the address of our rails backend, saved as a constant value, because we never want to accidentally change it
// Cloud9 users: This will be your IP address found under the 'Share' link
const BASE = 'http://127.0.0.1:3000/'

let getUsers = function() {
// the function name getUsers is intended to remind you of the restful rails route --> GET '/users'.
	return fetch(BASE + '/users') // this would be equivalent to going to localhost:3000/users in your browser. Do that - - what do you see?
		.then((resp) => {
           	// resp will be whatever you saw on the page localhost:3000/users, it is the result of our fetch call
			let json = resp.json() // we want to make sure what we have is just the json part of the response
			console.log(json);
			return json
		})
}


let createUser = function(user) {
	return fetch(BASE + '/users', {
		body: JSON.stringify(user),  // <- we need to stringify the json for fetch
		headers: {  // <- We specify that we're sending JSON, and expect JSON back
			'Content-Type': 'application/json'
		},
		method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
	})
		.then((resp) => {
			let json = resp.json()

			return json
		})
}

export  {
	getUsers,
    createUser
}
