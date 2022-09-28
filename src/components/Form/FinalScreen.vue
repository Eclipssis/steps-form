<template>
  <div class="flex flex-col min-h-[320px]">
    <h2 class="sans text-2xl font-bold py-4 px-6 border-b border-gray-200">
      Finish
    </h2>

    <div class="text-left">
      <div
        v-if="data.firstName"
        class="flex justify-between px-6 border-b border-gray-200 py-2"
      >
        <span class="block w-full font-light">First name</span>
        <span class="block min-w-[150px]"> {{ data.firstName }}</span>
      </div>

      <div
        v-if="data.lastName"
        class="flex justify-between px-6 border-b border-gray-200 py-2"
      >
        <span class="block w-full font-light">Last name</span>
        <span class="block min-w-[150px]"> {{ data.lastName }}</span>
      </div>

      <div
        v-if="data.middleName"
        class="flex justify-between px-6 border-b border-gray-200 py-2"
      >
        <span class="block w-full font-light">Middle name</span>
        <span class="block min-w-[150px]"> {{ data.middleName }}</span>
      </div>

      <div
        v-if="data.birthDate"
        class="flex justify-between px-6 border-b border-gray-200 py-2"
      >
        <span class="block w-full font-light">Birth date</span>
        <span class="block min-w-[150px]"> {{ data.birthDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  setup() {
    return {};
  },
};
</script>
