<script>
    import TopAppBar, {Row, Section, Title} from "@smui/top-app-bar"
    import {page} from "$app/stores"

</script>

<TopAppBar color="primary">
    <Row>
        <Section>
            <Title>Assuer Plus</Title>
        </Section>
        <Section align="end">
            {#if $page.data.nom}
                <Title>{$page.data.prenom} {$page.data.nom}</Title>
            {:else}
                <Title>Veuillez-vous connecter</Title>
            {/if}
            <Title></Title>
        </Section>
    </Row>
</TopAppBar>
<div>
    <slot></slot>
</div>