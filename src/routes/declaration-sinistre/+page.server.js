import { redirect } from '@sveltejs/kit'

var client

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const email = event.cookies.get('email')
    if (email == undefined) throw redirect(303, "/connexion")

    const [rows, field] = await event.fetch(`getUser:${email}`);
    client = rows[0]
    return client
}

/** @type {import('./$types').Actions} */
export const actions = {
	submit: async (event) => {
        const [r, f] = await event.fetch(`getUser:${event.cookies.get('email')}`)
        let user = r[0]
        let data = await event.request.formData()
		await event.fetch(`sql:INSERT INTO DeclarationSinistre (idClient, typeSinistre, natureSinistre, description, documents) VALUES 
        (${user.id}, '${data.get('typeSinistre')}', '${data.get('natureSinistre')}', '${data.get('description')}', '${data.get('documents')}')`
        )
        throw redirect(303, "/confirmation-envoi")
	}
};