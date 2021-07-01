<template>
  <div>
    <h2 class="text-4xl">{{ headingText }}</h2>
    <p>{{ bodyText }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    headingText: String,
    bodyText: String,
  },
})
export default class FirstComponent extends Vue {
  headingText = "";
  bodyText = "";
}
</script>

<style scoped></style>
