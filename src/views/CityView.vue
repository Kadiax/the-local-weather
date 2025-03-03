<template>
  <div class="page-content overview">
    <!--City Header-->
    <div class="overview-header">
      <h2 class="main-title">Overview</h2>
      <div class="buttons">
        <RouterLink :to="{ name: 'dashboard' }">
          <div class="button go-back">
            <span><i class="fa-solid fa-circle-arrow-left"></i></span>
            <span class="title">Go back</span>
          </div>
        </RouterLink>
        <div v-if="route.query.preview" class="button save" @click="addCity()">
          <span><i class="fa-regular fa-floppy-disk"></i></span>
          <span class="title">Save</span>
        </div>
      </div>
    </div>
    <!--City Content-->
    <Suspense>
      <AsyncCityView />
      <template #fallback>
        <AsyncCityViewSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
  import { uid } from 'uid';
  import { RouterLink, useRoute, useRouter } from 'vue-router';
  import { useCityStore } from '@/stores/cityStore';
  import AsyncCityView from '@/components/cityView/AsyncCityView.vue';
  import AsyncCityViewSkeleton from '@/components/cityView/skeleton/AsyncCityViewSkeleton.vue';

  const route = useRoute();
  const router = useRouter();
  const cityStore = useCityStore();

  // City Header
  const addCity = () => {
    const newCity = {
      id: uid(),
      state: route.params.state,
      city: route.params.city,
      coords: {
        lat: route.query.lat,
        lng: route.query.lng
      }
    };

    cityStore.addCity(newCity);

    const updatedQuery = structuredClone(route.query);
    delete updatedQuery.preview;
    updatedQuery.id = newCity.id;

    router.replace({ query: updatedQuery });
  };
</script>
<style>
  .overview-header {
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
  }

  .overview-header .buttons {
    display: flex;
    align-items: center;
    gap: 34px;
    margin-top: 13px;
  }

  .overview-header .buttons .save i {
    color: var(--color-text-success);
  }

  /*Tablets*/
  @media (max-width: 1024px) {
    .overview-header {
      width: 95%;
    }
  }

  /*Mobiles*/
  @media (min-width: 360px) and (max-width: 700px) {
    .overview-header {
      width: 100%;
    }

    .overview-header .buttons .title {
      display: none;
    }

    .overview-header .buttons {
      margin-right: 25px;
    }

    .overview-header .buttons .button {
      width: 0;
      height: 0;
    }
  }
</style>
