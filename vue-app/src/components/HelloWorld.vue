<template>
  <Parcel
    v-on:parcelMounted="parcelMounted()"
    :config="parcelConfig"
    :mountParcel="mountParcel"
    :wrapWith="wrapWith"
    :wrapStyle="wrapStyle"
    :parcelProps="getParcelProps()"
  />
  <Parcel
    v-on:parcelMounted="ngparcelMounted()"
    :config="ngparcelConfig"
    :mountParcel="mountParcel"
    :wrapWith="wrapWith"
    :wrapStyle="ngwrapStyle"
    :parcelProps="nggetParcelProps()"
  />
  <Parcel
    v-on:parcelMounted="vueparcelMounted()"
    :config="vueparcelConfig"
    :mountParcel="mountParcel"
    :wrapWith="wrapWith"
    :wrapStyle="vuewrapStyle"
    :parcelProps="vuegetParcelProps()"
  />
</template>

<script>
import Parcel from "single-spa-vue/parcel";
import { mountRootParcel } from "single-spa";

export default {
  components: {
    Parcel,
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      parcelConfig: System.import("@app/react-parcel"),
      mountParcel: mountRootParcel,
      wrapWith: "h1",
      wrapStyle: {
        color: "blue",
      },
      // eslint-disable-next-line no-undef
      ngparcelConfig: System.import("@app/angular-parcel"),
      ngwrapStyle: {
        color: "green",
      },
      // eslint-disable-next-line no-undef
      vueparcelConfig: System.import("@app/vue-parcel"),
      vuewrapStyle: {
        color: "yellow",
      },
    };
  },
  methods: {
    getParcelProps() {
      return {
        customProp1: `Parent prop1 to react`,
      };
    },
    parcelMounted() {
      console.log("React parcel mounted");
    },
    nggetParcelProps() {
      return {
        customProp1: `Parent prop1 to angular`,
      };
    },
    ngparcelMounted() {
      console.log("Angular parcel mounted");
    },
    vuegetParcelProps() {
      return {
        customProp1: `Parent prop1 to vue`,
      };
    },
    vueparcelMounted() {
      console.log("Vue parcel mounted");
    },
  },
};

</script>
