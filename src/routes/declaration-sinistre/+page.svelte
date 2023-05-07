<script>
    import Radio from "@smui/radio"
    import Button from "@smui/button";
    import FormField from "@smui/form-field"
    import Select, {Option} from "@smui/select"

    let etapeCourante = 1

    let nomUtilisateur = "Joe"
    let typeSelectionne = ""

    let causeSinistreAuto = ["accident", "vol"]
    let causeSinistreHabitation = ["dégat des eaux", "vol par effraction", ]
</script>

<h1>Bonjour {nomUtilisateur}</h1>

{#if etapeCourante== 1}
    <div>
        <h2>Quel type de sinistre voulez-vous déclarer ?</h2>
        <FormField>
            <Radio bind:group={typeSelectionne} value="auto">Auto</Radio>
            <Radio bind:group={typeSelectionne} value="habitation">Habitation</Radio>
        </FormField>
    </div>
    
{:else if etapeCourante == 2}

<div>
    <h2>Quel est la cause du sinistre ?</h2>
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
{/if}

<Button on:click={() => etapeCourante++}>Suivant</Button>