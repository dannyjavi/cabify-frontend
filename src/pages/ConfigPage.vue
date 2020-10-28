<template>
  <div>
    <div class="tabs is-boxed" id="tabs">
      <ul class="columns is-gapless">
        <li v-for="(item, index) in tabs" :key="index" :class="isSelected" class="column">
          <a class="has-background-dark has-text-white is-size-4">
            <span class="icon is-medium"
              ><i :class="item.icon" aria-hidden="true"></i
            ></span>
            <span class="py-2">{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div v-for="(item, index) in contentDriver" :key="index" class="field container">
      <label class="label is-size-4">{{ item.title }}</label>
      <div class="control">
        <input class="input is-medium" :type="item.input" :placeholder="item.placeholder" />
      </div>
    </div>
    <div id="space"></div>
  </div>
</template>

<script>
export default {
  name: "ConfigPage",
  data() {
    return {
      tabs: [
        {
          title: "Conductor",
          icon: "fas fa-user-tie",
          selected: true,
          class: "is-active",
        },
        {
          title: "Vehículo",
          icon: "fas fa-car",
          selected: false,
          class: "",
        },
      ],
      isSelected: "",
      contentDriver: [
        { title: "Precio/km",
          input: "number",
          placeholder: "Precio/km"
         },
        { title: "Vehículo",
          input: "text",
          placeholder: "Tipo de vehículo"
         },
        { title: "Dirección",
          input: "text",
          placeholder: "Dirección"
        },
        { title: "Licencia de conducción",
          input: "text",
          placeholder: "Licencia"
        },
      ]
    };
  },
  methods: {
    selectTab(item) {
      let selectedTab = this.tabs.filter((tab) => tab.title == item.title);
      selectTab.class = "is-active";
      tab.class = "is-active";
    },
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

#space {
  height: 280px;
}
</style>
