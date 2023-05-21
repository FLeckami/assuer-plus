<script>
    import Textfield from "@smui/textfield"
    import Button from "@smui/button"
	import { redirect } from "@sveltejs/kit";
	//import { goto } from "$app/navigation";

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<h1 style="text-align: center">Connexion</h1>

<style>
    .formulaire {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px
    }

    .afficheur {
        background-color: rgb(187, 0, 0);
        color: white;
        padding: 10px;
        text-align: center;
    }
</style>

<form action="?/login" method="POST" class="formulaire">
    {#if form?.incorrect}
    <div class="afficheur">
        <p>Le nom d'utilisateur ou le mot de passe est incorrect</p>
    </div>
    {/if}
    {#if form?.missing}
    <div class="afficheur">
        <p>Vous devez remplir tous les champs</p>
    </div>
    {/if}
    <Textfield type="text" label="adresse mail" input$name="adresseMail" value={form?.email ?? ''}></Textfield>
    <Textfield type="password" label="mot de passe" input$name="motDePasse" value=""></Textfield>
    <Button color="primary">Se connecter</Button>
</form>

