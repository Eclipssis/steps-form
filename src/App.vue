<template>
  <MultiStepForm :steps="stepsComponents"></MultiStepForm>
</template>

<script>
import MultiStepForm from "@/components/MultiStepForm.vue";

import Step1 from "@/components/Form/Step-1.vue";
import Step2 from "@/components/Form/Step-2.vue";
import Step3 from "@/components/Form/Step-3.vue";

export default {
  components: {
    MultiStepForm,
  },

  setup() {
    let stepsComponents = [Step1, Step2, Step3];

    return {
      stepsComponents,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.form-group {
  margin-bottom: 15px;
}
</style>
