<template>
  <div class="flex flex-col min-h-[320px]">
    <h2 class="sans text-2xl font-bold py-4 px-6 mb-6 border-b border-gray-200">
      Step 1
    </h2>

    <div class="max-w-xs w-full mx-auto text-left">
      <!-- TODO: make component for INPUT -->
      <div class="mb-4">
        <label class="block w-full font-light">First name</label>
        <input
          v-model="form.firstName"
          placeholder="Enter first name"
          class="border shadow-sm h-10 w-full px-4 text-sm outline-1 outline-blue-200"
          :class="[
            v$.lastName.$dirty && v$.firstName.required.$invalid
              ? 'border-red-300'
              : 'border-gray-200',
          ]"
        />
        <span
          v-if="v$.lastName.$dirty && v$.firstName.required.$invalid"
          class="text-sm font-light text-red-500"
        >
          First name field is required
        </span>
      </div>

      <div class="mb-4">
        <!-- TODO: make component for INPUT -->
        <label class="block w-full font-light">Last name</label>
        <input
          v-model="form.lastName"
          placeholder="Enter last name"
          class="border border-gray-200 shadow-sm h-10 w-full px-4 text-sm outline-1 outline-blue-200"
          :class="[
            v$.lastName.$dirty && v$.lastName.required.$invalid
              ? 'border-red-300'
              : 'border-gray-200',
          ]"
        />
        <span
          v-if="v$.lastName.$dirty && v$.lastName.required.$invalid"
          class="text-sm font-light text-red-500"
        >
          Last name field is required
        </span>
      </div>
    </div>

    <div class="flex max-w-xs w-full mx-auto mt-auto pb-6">
      <!-- TODO: make component for BUTTON -->
      <button
        @click="onPrevStep"
        disabled
        class="min-w-[120px] py-2 bg-gray-200 opacity-75 text-white cursor-not-allowed"
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
      firstName: "",
      lastName: "",
    });

    const rules = {
      firstName: { required },
      lastName: { required },
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
