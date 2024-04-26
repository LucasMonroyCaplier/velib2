<template>
    <div>
        <StationProjet :key="maj" />
        <CarteProjet :key="maj" />
    </div>
    
</template>

<script>
import CarteProjet from '../components/Carte.vue';
import StationProjet from '../components/Station.vue';

export default {
    name: "FenetreView",
    
    data() {
        return {
            maj: 0,
        }
    },
    components: {
        CarteProjet,
        StationProjet,
    },
    methods: {
    },
    mounted(){
        this.$store.state.controller.load()
                .then(
                    (data) => {
                        this.$store.state.donneesVelib = data;
                        this.$store.state.donneesEnCours = data;
                    }
                )
                .catch(() => {
                    console.log('error');

                });
    }
}
</script>

<style></style>