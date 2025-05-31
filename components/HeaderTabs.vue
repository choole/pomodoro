<template>
  <div class="card flex justify-center">
    <Tabs :value="activeTab" @update:value="handleTabChange">
      <TabList>
        <Tab value="0" class="tab-btn">Pomodoro</Tab>
        <Tab value="1" class="tab-btn">Short break</Tab>
        <Tab value="2" class="tab-btn">Long break</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <ImageGif :image="Pomodoro" />
        </TabPanel>
        <TabPanel value="1">
          <ImageGif :image="ShortBreak" />
        </TabPanel>
        <TabPanel value="2">
          <ImageGif :image="LongBreak" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ImageGif from './ImageGif.vue';
import Pomodoro from '../assets/cat-reading.gif';
import ShortBreak from '../assets/cat-massage.gif';
import LongBreak from '../assets/cat-sleep.gif';

const activeTab = ref(0);

function handleTabChange(newIndex) {
  activeTab.value = newIndex;
}
</script>

<style scoped>
.p-tablist {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
</style>
