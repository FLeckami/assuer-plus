<script>
    import Radio from "@smui/radio"
    import Button from "@smui/button";
    import FormField from "@smui/form-field"
    import Select, {Option} from "@smui/select"
    import Textfield, {Textarea} from "@smui/textfield";

    let etapeCourante = 1
    let typeSelectionne = ""

    let causeSinistreAuto = ["accident", "vol", "bris de glace", "autre"]
    let causeSinistreHabitation = [
        "dégat des eaux", 
        "vol par effraction", 
        "bris de glace", 
        "dommage électrique",
        "évènement climatique",
        "incendie",
        "casse du mobilier",
        "dommage à autruis",
        "autre"
    ]

</script>

<style>
    .formulaire {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items:flex-start;
        gap: 20px;
    }
</style>

<form method="post" class="formulaire">
    <div>
        <h2>Quel type de sinistre voulez-vous déclarer ?</h2>
        <FormField name="typeSinistreAuto">
            <Radio input$name="auto" bind:group={typeSelectionne} value="auto"></Radio>
            <span slot="label">Auto</span>
        </FormField>
        <FormField name="typeSinistreHabitation">
            <Radio bind:group={typeSelectionne} value="habitation"></Radio>
            <span slot="label">Habitation</span>
        </FormField>
    </div>
    
    <div>
        <h2>Quel est la nature du sinistre ?</h2>
    <select name="natureSinistre">
        {#if typeSelectionne == "auto"}
        {#each causeSinistreAuto as cause}
        <option value={cause}>{cause}</option>
        {/each}
        {:else}
        {#each causeSinistreHabitation as cause}
        <option value={cause}>{cause}</option>
        {/each}
        {/if}
    </select>
</div>
<div>
    <h2>Décrivez-le le plus précisement possible</h2>
    <textarea cols="50" rows="10" name="description" value=""></textarea>
</div>
<div>
    <h2>Chargez vos documents et photos du sinistre</h2>
    <input type="file" multiple name="documents" value=""/>
</div>

<Button formaction="?/submit">Envoyer</Button>
</form>