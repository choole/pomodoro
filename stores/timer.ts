import { defineStore } from 'pinia'
import { eventBus } from '@/utils/event-bus'
import { useTaskStore } from './tasks'

export const useTimerStore = defineStore('timer', {
  state: () => ({
    defaultPomodoro: '2500',
    defaultShortBreak: '0500',
    defaultLongBreak: '1000',
    pomodoro: '2500',
    shortBreak: '0500',
    longBreak: '1000',
    remainingTime: "",
    interval: ''
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
    replayTimer(tab){
      clearInterval(this.interval);
      switch (tab) {
        case "0":
          this.pomodoro=this.defaultPomodoro;
          eventBus.emit('timer:replay',{time: this.pomodoro});
          break;
        case "1":
          this.shortBreak=this.defaultShortBreak;
          eventBus.emit('timer:replay',{time: this.shortBreak});
          break;
        case "2":
          this.longBreak=this.defaultLongBreak;
          eventBus.emit('timer:replay',{time: this.longBreak});
          break;
        default:
          console.log("Tab is neither 0,1 or 2 somehow");
          break;
      }
    },
    startTimer(tab){
      switch (tab) {
        case "0":
          this.startPomodoro();
          break;
        case "1":
          this.startShortBreak();
          break;
        case "2":
          this.startLongBreak();
          break;
        default:
          console.log("Tab is neither 0,1 or 2 somehow");
          break;
      }
    },
    pauseTimer(tab){
      clearInterval(this.interval);
      eventBus.emit('timer:paused');
      const remainingString=this.secondsToString(this.remainingTime);
      switch (tab) {
        case "0":
          this.pomodoro=remainingString;
          break;
        case "1":
          this.shortBreak=remainingString;
          break;
        case "2":
          this.longBreak=remainingString;
          break;
        default:
          console.log("Tab is neither 0,1 or 2 somehow");
          break;
      }
    },
    setPomodoro(time: string){
      this.pomodoro=time;
      this.defaultPomodoro=time;
      console.log(time);
    },
    startPomodoro(){
      this.remainingTime=this.stringToSeconds(this.pomodoro);

      this.interval = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
          eventBus.emit('time',{time: this.secondsToString(this.remainingTime)});
        }

        if (this.remainingTime === 0) {
          this.pomodoro=this.defaultPomodoro;
          clearInterval(this.interval);
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
      this.defaultShortBreak=time;
      console.log(this.shortBreak);
    },
    startShortBreak(){
      this.remainingTime=this.stringToSeconds(this.shortBreak);
      this.interval = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
          eventBus.emit('time',{time: this.secondsToString(this.remainingTime)});
        }

      if(this.remainingTime==0){
        this.shortBreak=this.defaultShortBreak;
        clearInterval(this.interval);
        //display toast
        console.log("Done");
      }
      }, 1000);
    },
    setLongBreak(time){
      this.longBreak=time;
      this.defaultLongBreak=time;
      console.log(this.longBreak);
    },
    startLongBreak(){
      this.remainingTime=this.stringToSeconds(this.longBreak);
      this.interval = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
          eventBus.emit('time',{time: this.secondsToString(this.remainingTime)});
        }

      if(this.remainingTime==0){
        this.longBreak=this.defaultLongBreak;
        clearInterval(this.interval);
        //display toast
        console.log("Done");
      }
      }, 1000);
    }
  }
})
