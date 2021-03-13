<template>
  <div
    v-if="!beer[0]"
    class="flex justify-center items-center w-screen h-screen"
  >
    <svg
      class="animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4335 4335"
      width="100"
      height="100"
    >
      <path
        fill="#999"
        d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"
      />
    </svg>
  </div>

  <div
    v-if="beer[0]"
    class="flex justify-center bg-main bg-cover bg-top w-screen overflow-hidden h-screen overflow-y-hidden "
  >
    <div
      class="bg-yellow-500 flex flex-row mx-2 my-auto  md:m-auto opacity-90 border-yellow-700 border-2 z-50 rounded-md fit-content font-base max-w-xl shadow text-gray-100"
    >
      <div class="self-center " v-on:click="previousBeer">
        <svg
          class="w-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div>
        <div
          class="pt-5 text-4xl text-gray-100 px-4 md:px-8 capitalize font-title flex items-center justify-center"
        >
          <div>{{ beer[activeBeer].name }}</div>

          <div class="w-8 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </div>
        </div>
        <div
          class="grid grid-cols-1 pt-5 text-xl text-white capitalize px-4 md:px-8 py-4 md:py-8 text-justify"
        >
          <div class="capitalize">{{ beer[activeBeer].description }}</div>
        </div>
        <div
          class="grid grid-cols-4 border-yellow-700 border-t-2 p-2 md:px-4 rounded-t-md   text-xl bg-yellow-700 text-gray-100 capitalize"
        >
          <div class="">
            <div class="">ABV</div>
            <div>{{ beer[activeBeer].abv }}%</div>
          </div>
          <div>
            <div>IBU</div>
            <div>{{ beer[activeBeer].ibu }}</div>
          </div>
          <div>
            <div>EBC</div>
            <div>{{ beer[activeBeer].ebc }}</div>
          </div>
          <div>
            <div>PH</div>
            <div>{{ beer[activeBeer].ph }}</div>
          </div>
        </div>
      </div>
      <div class=" self-center" v-on:click="nextBeer">
        <svg
          class="w-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>

    <img
      class="h-screen absolute md:relative transform rotate-12 mr-auto mt-auto mb-auto z-0 select-none"
      :src="imgURL"
      :alt="beer[activeBeer].name"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      beer: [],
      activeBeer: 0,
    };
  },
  computed: {
    imgURL() {
      console.log("hajrá");
      if (this.beer[this.activeBeer].image_url) {
        return this.beer[this.activeBeer].image_url;
      }
      return "no puic";
    },
  },

  methods: {
    fetchRandomBeer() {
      axios.get("https://api.punkapi.com/v2/beers/random").then((response) => {
        this.beer = response.data;
      });
    },

    fetchAllBeer() {
      axios.get("https://api.punkapi.com/v2/beers").then((response) => {
        this.beer = response.data;
        this.activeBeer = Math.floor(Math.random() * this.beer.length);
      });
    },

    nextBeer() {
      if (this.beer.length > 1 && this.activeBeer - 1 < this.beer.length) {
        this.activeBeer++;
        return;
      } else if (
        this.beer.length > 1 &&
        this.activeBeer - 1 === this.beer.length
      ) {
        return;
      }
      this.fetchRandomBeer();
    },

    previousBeer() {
      if (this.beer.length > 1 && this.activeBeer > 1) {
        this.activeBeer--;
        return;
      } else if (this.beer.length > 1 && this.activeBeer === 1) {
        return;
      }
      this.fetchRandomBeer();
    },
  },

  created() {
    this.fetchRandomBeer();
  },
};
</script>

<style scoped></style>
