<template>
  <div class="page-content about">
    <h2 class="main-title">About</h2>
    <div class="container">
      <div class="description">
        <p class="description-text">
          The Local Weather allows you to track the current and future weather
          of cities of your choosing.
        </p>
        <div class="info-box">
          <div class="info-content">
            <span class="info-title">How it works:</span>
            <p class="info-details">
              1. Search for your city by entering the name into the search
              bar.<br />
              2. Select a city within the results, this will take you to the
              current weather for your selection.<br />
              3. Track the city by clicking on the "save" icon in the top right.
              This will save the city to view at a later time on the home page.
            </p>
          </div>
        </div>
      </div>
      <div class="info-box">
        <div class="info-content">
          <span class="info-title">Removing a city:</span>
          <p class="info-details">
            If you no longer wish to track a city, simply select the city within
            the home page. At the bottom of the page, there will be an option to
            delete the city.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
/*About Page*/

.about .container {
  padding: 36px 18px;
  margin-top: 25px;
  margin-left: 25px;
  background: radial-gradient(circle, #162850 0%, #121a2d 100%);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
}

.about .container .description {
  display: flex;
  flex-direction: column;
}

.about .container .description .description-text {
  color: var(--color-text-primary);
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
}

.about .container .info-box {
  height: 100%;
  background: var(--color-bg-secondary);
  border-radius: 20px;
  padding: 25px;
}

.about .container .info-box .info-content {
  color: var(--color-text-primary);
}

.about .container .info-box .info-content .info-title {
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 500;
}

.about .container .info-box .info-content .info-details {
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  margin-top: 10px;
}

/*Tablets*/
@media (max-width: 1024px) {
  .about .container {
    width: auto;
    margin-left: 0px;
  }
}
</style>
