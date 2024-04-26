<template>
  <v-app>
    <div class="big-container">
      <div class="flex-container">
        <v-container>
          <v-table>
            <thead>
              <th>Arrondissement</th>
            </thead>
            <tbody>
              <td><v-checkbox label="1" v-model="selectFiltre" value="1" @change="afficherFiltre();"></v-checkbox></td>
              <td><v-checkbox label="2" v-model="selectFiltre" value="2" @change="afficherFiltre();"></v-checkbox></td>
              <td><v-checkbox label="3" v-model="selectFiltre" value="3" @change="afficherFiltre();"></v-checkbox></td>
              <td><v-checkbox label="4" v-model="selectFiltre" value="4" @change="afficherFiltre();"></v-checkbox></td>
              <td><v-checkbox label="5" v-model="selectFiltre" value="5" @change="afficherFiltre();"></v-checkbox></td>
              <td><v-checkbox label="6" v-model="selectFiltre" value="6" @change="afficherFiltre();"></v-checkbox></td>
              <td><v-checkbox label="7" v-model="selectFiltre" value="7" @change="afficherFiltre();"></v-checkbox></td>
              <td><v-checkbox label="8" v-model="selectFiltre" value="8" @change="afficherFiltre();"></v-checkbox></td>
              <td><v-checkbox label="9" v-model="selectFiltre" value="9" @change="afficherFiltre();"></v-checkbox></td>
              <td><v-checkbox label="10" v-model="selectFiltre" value="10" @change="afficherFiltre();"></v-checkbox>
              </td>
              <td><v-checkbox label="11" v-model="selectFiltre" value="11" @change="afficherFiltre();"></v-checkbox>
              </td>
              <td><v-checkbox label="12" v-model="selectFiltre" value="12" @change="afficherFiltre();"></v-checkbox>
              </td>
              <td><v-checkbox label="13" v-model="selectFiltre" value="13" @change="afficherFiltre();"></v-checkbox>
              </td>
              <td><v-checkbox label="14" v-model="selectFiltre" value="14" @change="afficherFiltre();"></v-checkbox>
              </td>
              <td><v-checkbox label="15" v-model="selectFiltre" value="15" @change="afficherFiltre();"></v-checkbox>
              </td>
              <td><v-checkbox label="16" v-model="selectFiltre" value="16" @change="afficherFiltre();"></v-checkbox>
              </td>
              <td><v-checkbox label="17" v-model="selectFiltre" value="17" @change="afficherFiltre();"></v-checkbox>
              </td>
              <td><v-checkbox label="18" v-model="selectFiltre" value="18" @change="afficherFiltre();"></v-checkbox>
              </td>
              <td><v-checkbox label="19" v-model="selectFiltre" value="19" @change="afficherFiltre();"></v-checkbox>
              </td>
              <td><v-checkbox label="20" v-model="selectFiltre" value="20" @change="afficherFiltre();"></v-checkbox>
              </td>
            </tbody>
          </v-table>
        </v-container>
        <v-container>
          <v-table>
            <thead>
              <th>Département (Hors Paris)</th>
            </thead>
            <tbody>
              <td><v-checkbox label="92" value="21" v-model="selectFiltre" @change="afficherFiltre();"></v-checkbox>
              </td>
              <td><v-checkbox label="93" value="31" v-model="selectFiltre" @change="afficherFiltre();"></v-checkbox>
              </td>
              <td><v-checkbox label="94" value="41" v-model="selectFiltre" @change="afficherFiltre();"></v-checkbox>
              </td>
              <td><v-checkbox label="95" value="51" v-model="selectFiltre" @change="afficherFiltre();"></v-checkbox>
              </td>
            </tbody>
          </v-table>
        </v-container>
        <v-container>
          <v-table>
            <thead>
              <th>Autres</th>
            </thead>
            <tbody>
              <td><v-checkbox label="Mobile" value="92" v-model="selectFiltre" @change="afficherFiltre()"></v-checkbox>
              </td>
            </tbody>
          </v-table>

        </v-container>
      </div>
      <v-container>
        <h3>Station No: {{ numeroStation }}</h3>
        <v-main>
          <p>Nom :{{ nomStation }}</p>
          <p>Arrondissement :{{ nbArrondissement }}</p>
          <p>Ville :{{ nomVille }}</p>
          <p>Ouvert :{{ statutSation }}</p>
        </v-main>
        <v-main>
          <p>Capacité :{{ nbCapacite }}</p>
          <p>Vélos disponibles :{{ nbVeloDispo }}</p>
          <p>Attaches disponibles :{{ nbAttacheDispo }}</p>
          <p>Carte Bleue :{{ moyenPayement ? 'Ouvert' : 'Fermé' }}</p>
        </v-main>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'StationProjet',
  data() {
    return {
      numeroStation: this.$store.state.stationChoisi.stationcode,
      nomStation: this.$store.state.stationChoisi.name,
      nbArrondissement: this.$store.state.stationChoisi.coordonnees_geo,
      nomVille: this.$store.state.stationChoisi.nom_arrondissement_communes,
      statutSation: this.$store.state.stationChoisi.is_returning,
      nbCapacite: this.$store.state.stationChoisi.capacity,
      nbVeloDispo: this.$store.state.stationChoisi.numdocksavailable,
      nbAttacheDispo: this.$store.state.stationChoisi.numbikesavailable,
      moyenPayement: this.$store.state.stationChoisi.is_renting,
      selectFiltre: '',
    }
  },
  methods: {
    //cette fonction permet d'afficher seulement les stations qui correspondent avec le filtre choisi en comparant le numéro de station
    afficherFiltre() {
      this.$store.state.donneesEnCours = [];
      let currentStationCodes = Object.values(this.$store.state.donneesVelib).map(data => data.stationcode); //on stock tous les codes de station de donneesVelib dans currentStationCodes

      if (this.selectFiltre == 1) {
        this.selectFiltre = Number("1");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 2) {
        this.selectFiltre = Number("2");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 3) {
        this.selectFiltre = Number("3");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 4) {
        this.selectFiltre = Number("4");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 5) {
        this.selectFiltre = Number("5");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 6) {
        this.selectFiltre = Number("6");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 7) {
        this.selectFiltre = Number("7");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 8) {
        this.selectFiltre = Number("8");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 9) {
        this.selectFiltre = Number("9");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 10) {
        this.selectFiltre = Number("10");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 11) {
        this.selectFiltre = Number("11");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 12) {
        this.selectFiltre = Number("12");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 13) {
        this.selectFiltre = Number("13");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 14) {
        this.selectFiltre = Number("14");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 15) {
        this.selectFiltre = Number("15");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 16) {
        this.selectFiltre = Number("16");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 17) {
        this.selectFiltre = Number("17");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 18) {
        this.selectFiltre = Number("18");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 19) {
        this.selectFiltre = Number("19");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 20) {
        this.selectFiltre = Number("20");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 21) {
        this.selectFiltre = Number("21");
        let limit = 30;
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) >= this.selectFiltre.toString() &&
            code.slice(0, 2) <= limit.toString();
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 31) {
        this.selectFiltre = Number("31");
        let limit = 40;
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) >= this.selectFiltre.toString() &&
            code.slice(0, 2) <= limit.toString();
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 41) {
        this.selectFiltre = Number("41");
        let limit = 50;
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) >= this.selectFiltre.toString() &&
            code.slice(0, 2) <= limit.toString();
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 51) {
        this.selectFiltre = Number("51");
        let limit = 60;
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) >= this.selectFiltre.toString() &&
            code.slice(0, 2) <= limit.toString();
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }
      else if (this.selectFiltre == 92) {
        this.selectFiltre = Number("92");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length === 5 &&
            code.slice(0, 2) >= this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) => {
          for (var i = 0; i < this.$store.state.donneesVelib.length; i++) {
            if (this.$store.state.donneesVelib[i].stationcode == stationCode) {
              this.$store.state.donneesEnCours.push(this.$store.state.donneesVelib[i])
            }

          }

        });
      }




    }


  },


}
</script>

<style></style>