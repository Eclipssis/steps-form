<template>
  <div class="flex flex-col min-h-[320px]">
    <h2 class="sans text-2xl font-bold py-4 px-6 mb-6 border-b border-gray-200">
      Step 3
    </h2>

    <div class="max-w-xs w-full mx-auto text-left">
      <!-- TODO: make component for INPUT -->
      <div class="mb-4">
        <label class="block w-full font-light">Date of birth</label>
        <input
          v-model="form.birthDate"
          placeholder="Enter date of birth"
          class="border border-gray-200 shadow-sm h-10 w-full px-4 text-sm outline-1 outline-blue-200"
          :class="[
            v$.birthDate.$dirty && v$.birthDate.required.$invalid
              ? 'border-red-300'
              : 'border-gray-200',
          ]"
        />
        <span
          v-if="v$.birthDate.$dirty && v$.birthDate.required.$invalid"
          class="text-sm font-light text-red-500"
        >
          Date of birth field is required
        </span>
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
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup(props, { emit }) {
    const steps = useSteps();

    let form = reactive({
      birthDate: "",
    });

    const rules = {
      // TODO: add rule for correct date
      birthDate: { required },
    };

    const v$ = useVuelidate(rules, form);

    const onNextStep = () => {
      v$.value.$touch();
      if (!v$.value.$invalid) {
        emit("next", form);
        steps.nextStep();
      }
    };

    return {
      form,
      onPrevStep: steps.prevStep,
      onNextStep,
      v$,
    };
  },
};
</script>

<style lang="scss" scoped></style>
