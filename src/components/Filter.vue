<template>
  <div class="flex flex-col justify-start w-full font-title text-xl">
    <input
      type="text"
      placeholder="Search for name..."
      v-model="filter.name"
      class="m-2 bg-gray-100 rounded text-2xl p-2 text-gray-900 font-display"
    />

    <label class="mt-5" for="ABV">ABV</label>
    <Slider id="abv-slider" :max="67.5" v-model="filter.abv" />

    <label class="mt-5" for="IBU">IBU</label>
    <Slider id="ibu-slider" :max="120" v-model="filter.ibu" />
    <label class="mt-5" for="EBC">EBC</label>
    <Slider id="ebc-slider" :max="138" v-model="filter.ebc" />

    <div
      v-on:click="filterBeer"
      class="shadow-md bg-gray-100 text-gray-900 my-5 :hover:bg-gray-100 rounded-md cursor-pointer"
    >
      Find my beer
    </div>
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  components: { Slider },

  data() {
    return {
      filter: {
        name: "",
        abv: [0, 25],
        ibu: [5, 120],
        ebc: [4, 130],
      },
    };
  },
  methods: {
    filterBeer() {
      this.$emit("filter", this.filter);
    },
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>
