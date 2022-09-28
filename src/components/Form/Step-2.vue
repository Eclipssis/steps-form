<template>
  <div class="flex flex-col min-h-[320px]">
    <h2 class="sans text-2xl font-bold py-4 px-6 mb-6 border-b border-gray-200">
      Step 2
    </h2>

    <div class="max-w-xs w-full mx-auto text-left">
      <!-- TODO: make component for INPUT -->
      <div class="mb-4">
        <label class="block w-full font-light">Middle name</label>
        <input
          v-model="form.middleName"
          placeholder="Enter middle name"
          class="border border-gray-200 shadow-sm h-10 w-full px-4 text-sm outline-1 outline-blue-200"
        />
      </div>
    </div>

    <div class="flex max-w-xs w-full mx-auto mt-auto pb-6">
      <!-- TODO: make component for BUTTON -->
      <button
        @click="onPrevStep"
        class="min-w-[120px] py-2 bg-gray-400 hover:bg-gray-500 text-white cursor-pointer"
      >
        Prev step
      </button>
      <!-- TODO: make component for BUTTON -->
      <button
        @click="onNextStep"
        class="min-w-[120px] py-2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer ml-auto"
      >
        Next step
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useSteps } from "@/composables/step-form";

export default {
  setup(props, { emit }) {
    let form = reactive({
      middleName: "",
    });

    const steps = useSteps();

    const onNextStep = () => {
      emit("next", form);
      steps.nextStep();
    };

    return {
      form,
      onPrevStep: steps.prevStep,
      onNextStep,
    };
  },
};
</script>
