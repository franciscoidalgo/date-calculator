<script setup>
const amount = ref(0);
const selectedUnit = ref(0);
const options = ref([
  { text: 'Days', value: 0 },
  { text: 'Weeks', value: 1 },
]);
const selectedDate = ref(null);
const calendar = ref(null);
const calendarAttributes = computed(() => {
  if (selectedDate.value == null) {
    return null;
  }
  const daysToAdd = selectedUnit.value === 0 ? amount.value : amount.value * 7;
  const parsedSelectedDate = new Date(selectedDate.value);
  const userOffset = parsedSelectedDate.getTimezoneOffset() * 60000;
  const initialDate = new Date(parsedSelectedDate.getTime() + userOffset);
  const calculatedDate = new Date(initialDate);
  calculatedDate.setDate(initialDate.getDate() + daysToAdd);
  calendar.value.move(calculatedDate);
  const dateRange = initialDate.getTime() <= calculatedDate.getTime()
    ? [initialDate, calculatedDate] : [calculatedDate, initialDate]
  return [
    {
      highlight: true,
      dates: [
        dateRange
      ]
    }
  ]
}
)
</script>

<template>

  <body class="bg-gray-900 text-white min-h-screen py-4">
    <div class="container mx-auto flex justify-center">
      <div class="flex flex-col gap-0.5">
        <div class="flex flex-row">
          <div class="flex flex-col">
            <h1 class="text-3xl">Date calculator</h1>
            <h2 class="text-xl text-gray-400">For cats and dogs alike</h2>
          </div>
          <img src="/img/black_cat.png" alt="Cute black cat" class="size-20">
        </div>
        <label for="date">Start date</label>
        <input type="date" class="text-gray-800" v-model="selectedDate" id="date">
        <label for="unit">Unit</label>
        <select v-model="selectedUnit" id="unit" class="text-gray-800">
          <option v-for="option in options" :value="option.value">
            {{ option.text }}
          </option>
        </select>
        <label for="amount">Amount</label>
        <input type="number" class="text-gray-800" v-model="amount" id="amount">
        <VCalendar :attributes="calendarAttributes" is-dark="true" ref="calendar" class="mt-5" />
      </div>

    </div>
  </body>

</template>