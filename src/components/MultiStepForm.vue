<template>
  <div class="shadow-lg max-w-lg mx-auto font-roboto">
    <keep-alive>
      <component :is="currentComponent" @next="onNextStep"></component>
    </keep-alive>

    <FinalScreen v-if="isFinalScreen" :data="formData"></FinalScreen>
  </div>
</template>

<script>
import FinalScreen from "@/components/Form/FinalScreen.vue";
import { computed, ref } from "vue";
import { useSteps } from "@/composables/step-form";

export default {
  components: {
    FinalScreen,
  },

  props: {
    steps: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    const { currentStep } = useSteps();
    const currentComponent = computed(() => {
      return props.steps[currentStep.value];
    });

    const isFinalScreen = computed(() => {
      return props.steps.length === currentStep.value;
    });

    let formData = ref({});

    const onNextStep = (value) => {
      formData.value = { ...formData.value, ...value };
    };

    return {
      isFinalScreen,
      formData,
      onNextStep,
      currentStep,
      currentComponent,
    };
  },
};
</script>
