<script>
    import Radio from "@smui/radio"
    import Button from "@smui/button";
    import FormField from "@smui/form-field"
    import Select, {Option} from "@smui/select"
    import Textfield from "@smui/textfield";

    export let data;

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

<h1>Bonjour {data.nom}</h1>

<form method="post">

    {#if etapeCourante== 1}
    <div>
        <h2>Quel type de sinistre voulez-vous déclarer ?</h2>
        <FormField>
            <Radio bind:group={typeSelectionne} value="auto"></Radio>
            <span slot="label">Auto</span>
        </FormField>
        <FormField>
            <Radio bind:group={typeSelectionne} value="habitation"></Radio>
            <span slot="label">Habitation</span>
        </FormField>
    </div>
    
    {:else if etapeCourante == 2}
    
    <div>
        <h2>Quel est la nature du sinistre ?</h2>
    <Select>
        {#if typeSelectionne == "auto"}
        {#each causeSinistreAuto as cause}
        <Option value={cause}>{cause}</Option>
        {/each}
        {:else}
        {#each causeSinistreHabitation as cause}
        <Option value={cause}>{cause}</Option>
        {/each}
        {/if}
    </Select>
</div>
{:else if etapeCourante == 3}
<div>
    <h2>Décrivez-le le plus précisement possible</h2>
    <Textfield textarea input$name="description" value=""></Textfield>
</div>
{:else if etapeCourante == 4}
<div>
    <h2>Décrivez-le le plus précisement possible</h2>
    <Textfield type="file" input$name="documents" value=""></Textfield>
</div>
{/if}

{#if etapeCourante == 4}
<Button formaction="?/submit">Envoyer</Button>
{/if}
</form>
{#if etapeCourante > 1}
<Button on:click={() => etapeCourante--}>Précédent</Button>
{/if}
{#if etapeCourante != 4}
<Button on:click={() => etapeCourante++}>Suivant</Button>
{/if}