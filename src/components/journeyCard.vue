<template>  
    <section  @click.prevent="$emit('click', item._id)" class="section">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-one-third">
              <article class="notification media has-background-white">
                <figure class="media-left">
                  <span class="icon has-text-primary">
                    <i class="fa fa-lg fa-car"></i>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Viaje pendiente {{num+1}} </h1>
                    <p class="is-size-5 subtitle">
                     <strong>Origen:</strong> {{item.start_point.name}} <br>
                      <strong>Destino:</strong> {{item.destiny_point.name}}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
  
</template>

<script>
export default {
  name: "HeroPage",
  props: {
    item: {
      type: Object,
    },
    num:{
      type: Number
    }
   
  },
};
</script>

<style>
</style>