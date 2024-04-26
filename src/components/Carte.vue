<template>
    <v-container>
        <v-table>
            <thead>
                <tr>
                    <th>Numéro</th>
                    <th>Nom</th>
                    <th>CB</th>
                    <th>Statut</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in this.$store.state.donneesEnCours" :key="item.numero" @click="getStation(item)">
                    <td>{{ item.stationcode }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.is_renting }}</td>
                    <td>{{ item.is_returning ? 'Ouvert' : 'Fermé' }}</td>
                </tr>
            </tbody>
        </v-table>
    </v-container>
    
  </template>
  
  <script>
  export default {
      name: 'CarteProjet',
      data() {
          return{
            nomStation : "",
          }
      },
      mounted() {
        
      },
      methods:{
        // cette fonction va permettre de récupérer les données de la station sélectionnée 
      getStation(item){ 
            this.$store.state.donneesVelib.forEach(element => { 
                if  (element.stationcode == item.stationcode ){ //parcours donneesVelib et si le code de la station de donneesVelib est le même que celui de l'item sélectionné
                    this.$store.state.stationChoisi = element; //on affecte les données dans stationChoisi
                }
                this.$parent.maj++;
            });
        }
      }
  
  }
  </script>
  
  <style>
  
  </style>