import { useSteps } from "@/composables/step-form";

describe("useSteps", () => {
  it("Change current step to 1 when call nextStep function", () => {
    let { nextStep, currentStep } = useSteps();
    nextStep();

    expect(currentStep.value).toBe(1);
  });

  it("Change current step to 1 when call prevStep function", () => {
    let { prevStep, currentStep } = useSteps();
    currentStep.value = 2;

    prevStep();

    expect(currentStep.value).toBe(1);
  });

  it("CurrentStep should be changes when call prevStep function on 0 step", () => {
    let { prevStep, currentStep } = useSteps();

    prevStep();

    expect(currentStep.value).toBe(0);
  });
});

// TODO: Check that the entered data from all steps are correct
// TODO: Check nextStep function does not change next step if form is invalid
