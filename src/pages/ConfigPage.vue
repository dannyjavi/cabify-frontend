<template>
  <div class="tabs is-boxed" id="tabs">
    <ul>
      <li class="is-active" data-tab="1">
        <a>
          <span class="icon is-small"
            ><i class="fas fa-user-tie" aria-hidden="true"></i
          ></span>
          <span>Datos del conductor</span>
        </a>
      </li>

      <li data-tab="2">
        <a>
          <span class="icon is-small"
            ><i class="fas fa-car" aria-hidden="true"></i
          ></span>
          <span>Datos del vehículo</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ConfigPage",
  data() {
    return {
      driverData: {
        price_km: 1,
        vehicle: "",
        address: "",
      },
      vehicleData: {
          position: [],
          vehicle_model: "",
          capacity: 4,
          adapted_children: true,
          covid_measures: true,
          type_vehicle: "",
          image: "",
          color: "",
          enrolment: ""
      }
    };
  },
};
</script>

<style>
#tab-content p {
  display: none;
}

#tab-content p.is-active {
  display: block;
}
</style>
