<script>
    import TextField from "@smui/textfield"
    import Button from "@smui/button"

    let adresseMail = ""
    let motDePasse = ""
</script>

<h1>Connexion</h1>

<style>
    .formulaire {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>

<form action="" method="post" class="formulaire">
    <TextField type="text" bind:value={adresseMail} label="adresse mail" name="adresseMail"></TextField>
    <TextField type="text" bind:value={motDePasse} label="mot de passe"></TextField>
    <Button color="primary">Se connecter</Button>
</form>
