<template>
  <div class="container">
    <div class="section">
      <div class="mb-6">
        <div class="mb-6">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="title is-3 has-text-centered has-text-white">
                  <span class="icon mr-4">
                    <i class="fas fa-user-tie"></i>
                  </span>
                  Datos Conductor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="field-label is-normal mb-3">
          <label class="label is-size-4">Precio/km</label>
        </div>
        <div class="field-body">
          <div class="field mb-5">
            <p class="control is-expanded">
              <input
                v-model.number="registrationData.price_km"
                class="input is-size-5"
                type="number"
                placeholder="Precio/km"
              />
            </p>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="field-label is-normal mb-3">
          <label class="label is-size-4">Dirección</label>
        </div>
        <div class="field-body">
          <div class="field mb-5">
            <p class="control is-expanded">
              <input
                v-model="registrationData.address"
                class="input is-size-5"
                type="text"
                placeholder="Dirección"
              />
            </p>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="field-label is-normal mb-3">
          <label class="label is-size-4">Licencia de conducir</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input
                v-model="registrationData.driver_license"
                class="input is-size-5"
                type="text"
                placeholder="Licencia de conducir"
              />
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="mb-6">
        <div class="mb-6">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="title is-3 has-text-centered has-text-white">
                  <span class="icon is-large">
                    <i class="fas fa-car"></i>
                  </span>
                  Datos Vehículo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="field-label is-normal mb-3">
          <label class="label is-size-4">Coordenadas</label>
        </div>
        <div class="field-body">
          <div class="field mb-5">
            <p class="control is-expanded">
              <input
                v-model="registrationData.position"
                class="input is-size-5"
                type="text"
                placeholder="Coordenadas"
              />
            </p>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="field-label is-normal mb-3">
          <label class="label is-size-4">Modelo</label>
        </div>
        <div class="field-body">
          <div class="field mb-5">
            <p class="control is-expanded">
              <input
                v-model="registrationData.vehicle_model"
                class="input is-size-5"
                type="text"
                placeholder="Modelo del vehículo"
              />
            </p>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="field-label is-normal mb-3">
          <label class="label is-size-4">Capacidad</label>
        </div>
        <div class="field-body">
          <div class="field mb-5">
            <p class="control is-expanded">
              <input
                v-model.number="registrationData.capacity"
                class="input is-size-5"
                type="number"
                placeholder="Numero de plazas"
              />
            </p>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="field-label is-normal mb-3">
          <label class="label is-size-4">Adaptado a niños</label>
        </div>
        <div class="field-body">
          <div class="field mb-5">
            <div class="select">
              <select v-model="registrationData.adapted_children" class="input is-size-5">
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="field-label is-normal mb-3">
          <label class="label is-size-4">Medidas Covid</label>
        </div>
        <div class="field-body">
          <div class="field mb-5">
            <div class="select">
              <select v-model="registrationData.covid_measures" class="input is-size-5">
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="field-label is-normal mb-3">
          <label class="label is-size-4">Tipo de vehículo</label>
        </div>
        <div class="field-body">
          <div class="field mb-5">
            <div class="select">
              <select v-model="registrationData.type_vehicle" class="input is-size-5">
                <option>Sedán</option>
                <option>Furgoneta</option>
                <option>Todoterreno</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="field-label is-normal mb-3">
          <label class="label is-size-4">Imagen</label>
        </div>
        <div class="field-body">
          <div class="field mb-5">
            <p class="control is-expanded">
              <input
                v-model="registrationData.image"
                class="input is-size-5"
                type="text"
                placeholder="Imagen"
              />
            </p>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="field-label is-normal mb-3">
          <label class="label is-size-4">Color</label>
        </div>
        <div class="field-body">
          <div class="field mb-5">
            <p class="control is-expanded">
              <input
                v-model="registrationData.color"
                class="input is-size-5"
                type="text"
                placeholder="Color"
              />
            </p>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="field-label is-normal mb-3">
          <label class="label is-size-4">Matrícula</label>
        </div>
        <div class="field-body">
          <div class="field mb-5">
            <p class="control is-expanded">
              <input
                v-model="registrationData.enrolment"
                class="input is-size-5"
                type="text"
                placeholder="Matrícula"
              />
            </p>
          </div>
        </div>
      </div>

      <div class="field-body mt-5">
        <div class="field">
          <div class="control">
            <button
              @click="enviar"
              class="button is-dark is-focused is-fullwidth title is-4"
            >Sé conductor</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ConfigPage",
  data() {
    return {
      token: "",
      requestHeaders: "",

      currentUserId: "",
      registrationData: {
        price_km: "",
        address: "",
        driver_license: "",
        position: [36.62, -4.32],
        vehicle_model: "",
        capacity: "",
        adapted_children: false,
        covid_measures: false,
        type_vehicle: "Sedán",
        image: "",
        color: "",
        enrolment: ""
      }
    };
  },
  methods: {
    loadUserData() {
      this.currentUserId = this.$store.state.user.id;

      if (this.$store.state.user != null) {
        this.currentUserId = this.$store.state.user.id;
      }
    },
    loadCurrentUserData() {
      let token = this.$store.state.token;
      this.user = this.$store.state.user;
      this.requestHeaders = {
        headers: { Authorization: "Bearer " + token }
      };
    },
    async enviar() {
      this.registrationData.adapted_children = Boolean(
        this.registrationData.adapted_children
      );
      this.registrationData.covid_measures = Boolean(
        this.registrationData.covid_measures
      );
      try {
        let result = await this.axios.patch(
          "https://grupo3-backend-coffeby.herokuapp.com/users/" + this.currentUserId,
          this.registrationData,
          this.requestHeaders
        );
        this.$buefy.toast.open({
          duration: 2500,
          message: "You are already a driver!",
          type: "is-success"
        });

        this.$store.dispatch("logout");
        this.$router.push("/login");
      } catch (e) {
        this.$buefy.toast.open({
          duration: 2500,
          message: "Something went wrong 😲",
          type: "is-danger"
        });
      }
    }
  },
  created() {
    this.loadCurrentUserData();
  },
  mounted() {
    this.loadUserData();
  }
};
</script>

<style>
#tab-content p {
  display: none;
}

#tab-content p.is-active {
  display: block;
}

#space {
  height: 280px;
}
</style>
