import { defineStore } from 'pinia'
import { eventBus } from '@/utils/event-bus'
import { useTaskStore } from './tasks'

export const useTimerStore = defineStore('timer', {
  state: () => ({
    pomodoro: '2500',
    shortBreak: '0500',
    longBreak: '1000',
    remainingTime: ""
  }),
  actions: {
    stringToSeconds(timeStr){
      if (!/^\d{3,4}$/.test(timeStr)) {
        throw new Error('Invalid format. Use MMSS format, e.g., "2530" for 25 minutes and 30 seconds.');
      }

      // Pad to ensure 4 digits
      const padded = timeStr.padStart(4, '0')
      const minutes = parseInt(padded.slice(0, 2), 10)
      const seconds = parseInt(padded.slice(2, 4), 10)

      return minutes * 60 + seconds
    },
    secondsToString(totalSeconds) {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      const minutesStr = minutes.toString().padStart(2, '0');
      const secondsStr = seconds.toString().padStart(2, '0');

      return minutesStr + secondsStr;
    },
    setPomodoro(time: string){
      this.pomodoro=time;
      console.log(time);
    },
    startPomodoro(){
      this.remainingTime=this.stringToSeconds(this.pomodoro);

      const interval = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
          eventBus.emit('time',{time: this.secondsToString(this.remainingTime)});
        }

        if (this.remainingTime === 0) {
          clearInterval(interval);
          eventBus.emit('timer:done');
          
        const taskStore = useTaskStore();
        const taskToUpdate = taskStore.tasks.find(t => t.completedSessions < t.sessions);

          if (taskToUpdate) {
            taskToUpdate.completedSessions++;
            taskStore.updateSessions(taskToUpdate);  
          }
        }
      }, 1000);
    },
    setShortBreak(time){
      this.shortBreak=time;
      console.log(this.shortBreak);
    },
    startShortBreak(){
      this.remainingTime=stringToSeconds(this.shortBreak);
      setInterval(()=>this.remainingTime--,1000);
      if(this.remainingTime==0){
        //display toast
        console.log("Done");
      }
    },
    setLongBreak(time){
      this.longBreak=time;
      console.log(this.longBreak);
    },
    startLongBreak(){
      this.remainingTime=stringToSeconds(this.longBreak);
      setInterval(()=>this.remainingTime--,1000);
      if(this.remainingTime==0){
        //display toast
        console.log("Done");
      }
    }
  }
})
