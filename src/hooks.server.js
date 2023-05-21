import connection from "$lib/server/db.js" 


/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ request, fetch }) {
    console.log(request.url)
    if (request.url.startsWith("sql:")) {
        console.log("requete SQL")
        return await connection.execute(request.url.slice(4));
    }
    else if (request.url.startsWith("getuser:")) {
        console.log("requete client")
        return await connection.execute(`SELECT * FROM Client WHERE mail='${request.url.slice(8)}'`)
    }
    else {
        console.log("autre requete")
        return fetch(request.url)
    }

}