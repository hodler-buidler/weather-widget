<script>
import OpenWeatherSdk from '@/api/open-weather-sdk';

export default {
  name: 'MainView',

  async created() {
    try {
      const response = await OpenWeatherSdk.weather.byCityName({
        city: 'Санкт-Петербвывыург',
      });

      console.log(response);
    } catch (RequestError) {
      console.log(RequestError);
    }
  },
};
</script>

<template>
  <div>{{ $t('settingsForm.labels.addLocation') }}</div>
</template>

<style lang="scss" scoped></style>
