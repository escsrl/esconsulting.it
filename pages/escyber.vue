<template>
  <div>
    <hero-section
      top-classes="businessUno backgroundSchermataCinque"
      slide-class="slideBusinessWA"
      image="/img/new_service/webapplication_header.png"
      alt-text="ESCYBER"
      text="ESCYBER VALUTA' LE TUE CONOSCENZE SULLA CYBER SECURITY"
    />

    <div class="row pt-md-5 pt-sm-3 pt-3 pt-integrazioni ">
      <div
        class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
      >
        Escyber
      </div>
    </div>
    <b-container
      class="text-center pt-md-5 pb-md-5 pt-sm-3 pb-sm-3 pt-3 pb-3 mb-xl-5"
    >
      <b-row
        class="col-9 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
      >
        <p>
          Una soluzione a impatto zero sui percorsi aziendali, con l'obiettivo
          di alzare il livello di attenzione e il grado di consapevolezza e
          competenza nei dipendenti.<br />
          EsCyber inoltre ti fornirà statistiche e indicatori di rischio sempre
          aggiornati.
        </p>
      </b-row>

      <b-row align-v="center">
        <b-col>
          <div
            class="click_link game_download"
            style="margin-top: 5%;"
            @click="goToLink('https://game.esconsulting.it/quiz/cyberSecurity')"
          >
            <b-img src="/img/game/cyber_security.jpg" />
            <div class="testo fontGrayText">
              Gioca ora!
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
import HeroSection from '../components/HeroSection'

export default {
  name: 'EsCyber',
  components: { HeroSection },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.keyToOmit = 1
    })
  },
  layout: 'services',
  data() {
    return {}
  },
  computed: {
    keyToOmit: sync('service/keyToOmit')
  },
  methods: {
    goToLink(link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style scoped></style>
