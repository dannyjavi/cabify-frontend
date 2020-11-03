<template>
  <div>
    <b-notification
      ref="element"
      :closable="false"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit</b-notification>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFullPage: true
    };
  },
  methods: {
    open() {
      const loadingComponent = this.$buefy.loading.open({
        container: this.$refs.element.$el
      });
      setTimeout(() => loadingComponent.close(), 3 * 1000);
    }
  }
};
</script>