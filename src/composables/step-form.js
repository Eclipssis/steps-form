import { ref } from "vue";

let currentStep = ref(0);

export function useSteps() {
  const prevStep = () => {
    if (currentStep.value >= 1) {
      currentStep.value -= 1;
    }
  };

  const nextStep = () => {
    currentStep.value += 1;
  };

  return { prevStep, nextStep, currentStep };
}
