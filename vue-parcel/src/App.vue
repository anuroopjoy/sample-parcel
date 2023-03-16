<template>
  <section>
    Parcel component with {{ name }} is mounted!
    <br />
    Passed props from Parent
    <div style="color: red">{{ customProp1 }}</div>
  </section>
</template>

<script>
export default {
  name: "RootParcel",
  props: ["name", "customProp1", "mountParcel", "singleSpa"],
};
</script>
