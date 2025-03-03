<template>
  <div class="page-content about">
    <h2 class="main-title">About</h2>
    <div class="container">
      <div class="description">
        <p class="description-text">
          {{ $t('AboutView.description') }}
        </p>
        <div class="info-box">
          <div class="info-content">
            <span class="info-title">{{ $t('AboutView.infoBox.first.title') }}</span>
            <p class="info-details">
              {{ $t('AboutView.infoBox.first.details.first') }}<br />
              {{ $t('AboutView.infoBox.first.details.second') }}<br />
              {{ $t('AboutView.infoBox.first.details.third') }}
            </p>
          </div>
        </div>
      </div>
      <div class="info-box">
        <div class="info-content">
          <span class="info-title">{{ $t('AboutView.infoBox.second.title') }}</span>
          <p class="info-details">
            {{ $t('AboutView.infoBox.second.details') }}
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
