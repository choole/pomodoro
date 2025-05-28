<template>
    <div class="card flex justify-center">
        <Tabs value="0">
            <TabList>
								<Tab 
									value="0"
									 class="text-white font-semibold px-6 py-2 border-none shadow-none bg-gray-800 hover:bg-gray-700 focus:bg-gray-600">
									Pomodoro
								</Tab>
                <Tab value="1">Short break</Tab>
                <Tab value="2">Long break</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                  <!---Insert ImageGif and Timer -->
									<ImageGif :image="Pomodoro"/>
                </TabPanel>
                <TabPanel value="1">
                  <!---Insert ImageGif and Timer -->
									<ImageGif :image="Pomodoro"/>
                </TabPanel>
                <TabPanel value="2">
                  <!---Insert ImageGif and Timer -->
									<ImageGif :image="Pomodoro"/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
	import ImageGif from './ImageGif.vue';
	import Pomodoro from '../assets/cat-reading.gif';
</script>
<style scoped>
.p-tablist{
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	align-content: center;
}
</style>
    