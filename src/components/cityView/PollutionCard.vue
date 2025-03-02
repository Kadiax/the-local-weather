<template>
  <div class="pollution-card">
    <div class="title">Pollution</div>

    <div
      class="polluant"
      v-for="(value, name) in polluantComponents"
      :key="name"
    >
      <div class="tooltip-container">
        <p class="name tooltip-trigger">
          {{ formattedPolluantName(name) }}
          <span class="question tooltip-icon">?</span>
        </p>

        <!-- Tooltip -->
        <div class="tooltip-content" v-if="polluantDetails[name]">
          <h2>{{ polluantDetails[name].fullName }}</h2>
        </div>
      </div>

      <progress
        class="progress-bar"
        :value="polluantProgress(name, value)"
        max="100"
        :class="polluantColorClass(name, value)"
      ></progress>

      <div class="values">
        <div class="value">{{ value }}</div>
        <div class="separator">/</div>
        <div class="value-max">
          {{ polluantDetails[name]?.thresholds.poor ?? "--" }}
        </div>
        <div class="unit">μg/m³</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { capitalize } from "@/helpers/capitalize";

const props = defineProps<{
  polluantData: {
    list?: {
      components?: Record<string, number>;
    }[];
  };
}>();

// **Polluant Data Mapping**
const polluantDetails: Record<
  string,
  { fullName: string; thresholds: Record<string, number> }
> = {
  co: {
    fullName: "Carbon monoxide",
    thresholds: { good: 4400, fair: 9400, moderate: 12400, poor: 15400 },
  },
  no: {
    fullName: "Nitrogen monoxide",
    thresholds: { good: 50, fair: 70, moderate: 80, poor: 100 },
  },
  no2: {
    fullName: "Nitrogen dioxide",
    thresholds: { good: 40, fair: 70, moderate: 150, poor: 200 },
  },
  o3: {
    fullName: "Ozone",
    thresholds: { good: 60, fair: 100, moderate: 140, poor: 180 },
  },
  so2: {
    fullName: "Sulphur dioxide",
    thresholds: { good: 20, fair: 80, moderate: 250, poor: 350 },
  },
  pm2_5: {
    fullName: "Fine particles matter",
    thresholds: { good: 10, fair: 25, moderate: 50, poor: 75 },
  },
  pm10: {
    fullName: "Coarse particulate matter",
    thresholds: { good: 20, fair: 50, moderate: 100, poor: 200 },
  },
  nh3: {
    fullName: "Ammonia",
    thresholds: { good: 50, fair: 150, moderate: 100, poor: 200 },
  },
};

// **Computed Properties**
const polluantComponents = computed(
  () => props.polluantData?.list?.[0]?.components || {}
);

// **Format Polluant Name**
const formattedPolluantName = (name: string) =>
  capitalize(name.replace("_", "."));

// **Calculate Progress Value**
const polluantProgress = (name: string, value: number) =>
  polluantDetails[name]
    ? (value / polluantDetails[name].thresholds.poor) * 100
    : 0;

// **Determine Pollution Severity**
const polluantColorClass = (name: string, value: number) => {
  const thresholds = polluantDetails[name]?.thresholds;
  if (!thresholds) return "progress-neutral";

  if (value <= thresholds.fair) return "progress-good";
  if (value <= thresholds.moderate) return "progress-moderate";
  return "progress-poor";
};
</script>

<style scoped>
@import "@/assets/styles/cityView/pollution-card.css";

/* Progress Bar Colors */
.progress-good {
  --progress-color: var(--color-text-success);
}
.progress-moderate {
  --progress-color: var(--color-text-warning-secondary);
}
.progress-poor {
  --progress-color: var(--color-text-error);
}
.progress-neutral {
  --progress-color: gray;
}
</style>
