<template>
    <div class="card flex justify-center">
        <Tabs v-model:value="activeTab" @update:value="eventBus.emit('activeTab',{tab: activeTab})">

            <TabList>
                <Tab value="0" class="tab-btn">Pomodoro</Tab>
                <Tab value="1" class="tab-btn">Short break</Tab>
                <Tab value="2" class="tab-btn">Long break</Tab>
            </TabList>

            <TabPanels>
                <TabPanel value="0">
                    <ImageGif :image="Pomodoro"/>
                    <TimerInput
                        v-if="activeTab === '0'"
                        :time=timerStore.pomodoro
                        @update-value="payload => timerStore.setPomodoro(payload)"
                        @finish="activeTab='1'" />
                </TabPanel>
                <TabPanel value="1">
                    <ImageGif :image="ShortBreak"/>
                    <TimerInput
                        v-if="activeTab === '1'"
                        :time=timerStore.shortBreak
                        @update-value="payload => timerStore.setShortBreak(payload)"
                        @finish="activeTab='0'" />
                </TabPanel>
                <TabPanel value="2">
                    <ImageGif :image="LongBreak"/>
                    <TimerInput
                        v-if="activeTab === '2'"
                        :time=timerStore.longBreak
                        @update-value="payload => timerStore.setLongBreak(payload)"
                        @finish="activeTab='0'" />
                </TabPanel>
            </TabPanels>

        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { eventBus } from '@/utils/event-bus'
import ImageGif from './ImageGif.vue';
import Pomodoro from '../assets/cat-reading.gif';
import ShortBreak from '../assets/cat-massage.gif';
import LongBreak from '../assets/cat-sleep.gif';

const timerStore=useTimerStore();
const activeTab = ref(0);
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
