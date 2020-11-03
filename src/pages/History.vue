<template>
  <section class="container p-3">
    <b-table
      v-if="data.length > 0"
      :data="data"
      :columns="columns"
      class="p-3 m-2"
    ></b-table>
    <b-message
      v-if="data.length === 0"
      aria-close-label="Close message"
      class="column"
      >No tienes ningún viaje realizado</b-message
    >
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      requestHeaders: "",
      journey: [],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true,
        },
        {
          field: "destiny_point",
          label: "To",
        },
        {
          field: "start_point",
          label: "From",
        },
        {
          field: "arrived_date",
          label: "Date",
          centered: true,
        },
        {
          field: "action",
          label: "Delete",
        },
      ],
    };
  },
  computed: {},
  methods: {
    async loadJouerneyData() {
      try {
        const result = await this.axios.get(
          "https://grupo3-backend-coffeby.herokuapp.com/journeys/me",
          this.requestHeaders
        );
        
        let res = result.data;
        res.forEach((item, index) => {
          this.data.push({

            id: index + 1,
            destiny_point: item.destiny_point.name,
            start_point: item.start_point.name,
            arrived_date: this.$options.filters.pasarFecha(item.arrived_date) ,
            action: '<i  class="far fa-trash-alt"></i>',
          });
        });
      } catch (e) {
        throw new Error("Error al cargar los datos del Viaje");
      }
    },
  },
  mounted() {
    let token = this.$store.state.token;

    this.requestHeaders = {
      headers: { Authorization: "Bearer " + token },
    };
    this.loadJouerneyData();
  },
};
</script>