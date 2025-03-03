<template>
  <div class="page-content home">
    <h2 class="main-title">{{ $t('DashboardView.title') }}</h2>
    <!-- City Search Bar -->
    <div class="search">
      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input v-model="searchQuery" @input="fetchCityResults" type="text" placeholder="Search for a city or state" />
      </div>
      <ul class="search-results">
        <p v-if="hasSearchError">{{ $t('DashboardView.citySearch.error') }}</p>
        <p v-if="!hasSearchError && cityResults?.length === 0">{{ $t('DashboardView.citySearch.noResults') }}</p>
        <template v-else>
          <li
            v-for="cityResult in cityResults"
            :key="cityResult.id"
            class="py-2 cursor-pointer"
            @click="navigateToCity(cityResult)">
            {{ cityResult.properties.full_address }}
          </li>
        </template>
      </ul>
    </div>
    <!-- Favorite Cities -->
    <Suspense>
      <CityList />
      <template #fallback>
        <CityCardListSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import CityList from '@/components/dashboardView/CityList.vue';
  import CityCardListSkeleton from '@/components/dashboardView/skeleton/CityCardListSkeleton.vue';
  import * as MapboxService from '@/services/mapboxService';

  const router = useRouter();
  const searchQuery = ref('');
  const debounceTimeout = ref(null);
  const cityResults = ref(null);
  const hasSearchError = ref(false);

  // City Search Bar
  const fetchCityResults = () => {
    clearTimeout(debounceTimeout.value);

    debounceTimeout.value = setTimeout(async () => {
      const query = searchQuery.value.trim();
      if (!query) {
        cityResults.value = null;
        return;
      }

      MapboxService.fetchLocationSearch(query)
        .then((locationSearch) => {
          cityResults.value = locationSearch;
          hasSearchError.value = false;
        })
        .catch(() => {
          hasSearchError.value = true;
          cityResults.value = null;
        });
    }, 300);
  };

  const navigateToCity = (cityData) => {
    const [cityName, stateName] = cityData.properties.full_address.split(',');

    router.push({
      name: 'cityView',
      params: {
        state: stateName.trim(),
        city: cityName.trim()
      },
      query: {
        lat: cityData.geometry.coordinates[1],
        lng: cityData.geometry.coordinates[0],
        preview: true
      }
    });
  };
</script>

<style>
  /*Home page*/
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center the container vertically */
    align-items: center; /* Center the container horizontally */
  }

  .home .search-bar {
    background: var(--color-bg-secondary);
    width: 518px;
    height: 51px;
    display: inline-flex;
    border-radius: 50px;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
  }

  .home .search-bar i {
    font-size: 18px;
    margin-left: 20px;
  }

  .search-bar input {
    border: none;
    background: transparent;
    outline: none;
    margin-left: 10px;
    color: var(--color-text-secondary);
    width: 100%;
    font-size: 14px;
  }

  .search-results {
    width: 518px;
    position: fixed;
    background-color: var(--color-bg-secondary);
    padding-left: 15px;
    cursor: pointer;
  }

  .search {
    margin-top: 60px;
    border-radius: 50px;
    background-color: var(--color-bg-secondary);
  }

  /*Mobiles*/
  @media (min-width: 360px) and (max-width: 700px) {
    .home .search {
      width: 100%;
      margin-top: 25px;
    }

    .home .search-bar,
    .home .search-results {
      width: 93%;
    }
  }
</style>
