
import { fail, redirect } from '@sveltejs/kit';
import bcrypt from "bcrypt"

/** @type {import('./$types').Actions} */
export const actions = {
    login: async (event) => {
        const data = await event.request.formData()

        const email = data.get('adresseMail')
        const motDePasse = data.get('motDePasse')
        console.log(`mail = ${email}, mdp = ${motDePasse}`)

        if (email == null || motDePasse == null || email == "" || motDePasse == "") {
            console.log("un des champs vide")
            return fail(400, {email, missing: true})
            
        }

        const [row, field] = await event.fetch(`sql:SELECT * FROM Client WHERE mail='${email}';`)

        if (row.length == 0) {
            console.log("un des champs incorrects")
            return fail(400, {email, incorrect: true})
        }
        console.log(row[0])

        // comparer les hash
        if (!bcrypt.compareSync(motDePasse, row[0].motDePasse)) {
            return fail(400, {email, incorrect: true})
        }

        // accéder au formulaire lorsque tous les champs sont validé
        console.log("redirection")
        event.cookies.set('email', email.toString())
        throw redirect(302, "/declaration-sinistre")
        //return {success: true}
    }
};