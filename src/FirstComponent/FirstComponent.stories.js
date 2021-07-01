import FirstComponent from "./FirstComponent.vue";

export default {
  title: "Examples/FirstComponent",
  component: FirstComponent,
};

export const Default = () => ({
  components: { FirstComponent },
  template:
    '<FirstComponent headingText="blah blah blah!" bodyText="bodytext">',
});

export const Primary = () => ({
  components: { FirstComponent },
  template:
    '<FirstComponent class="bg-blue-500" headingText="Primary!" bodyText="bodytext">',
});
