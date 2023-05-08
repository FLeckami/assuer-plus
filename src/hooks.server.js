import connection from "$lib/server/db.js" 


/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ request, fetch }) {
    if (request.url.startsWith("sql:")) {
        console.log("requete SQL")
        return await connection.execute(request.url.slice(4));
    }
    else {
        console.log("autre requete")
        return fetch(request.url)
    }

}