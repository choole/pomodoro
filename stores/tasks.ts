import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as TaskInfo[],
    hoveredItem: null
  }),
  actions: {
    addTask() {
      this.tasks.push( { name: '', code: Date.now(), sessions:0, completedSessions:0 } )
      console.log(this.tasks);
    },
    removeTask(code) {
      this.tasks = this.tasks.filter(t => t.code !== code)
    },
    handleUpdateTask(task) {
      const index = this.tasks.findIndex(t => t.code === task.code)
      this.tasks.splice(index,1,task);
    },
    showDelete(itemCode) {
      this.hoveredItem = itemCode;
    },
    hideDelete() {
      this.hoveredItem = null;
    },
    updateSessions(task){
      const index = this.tasks.findIndex(t => t.code === task.code);
      this.tasks.splice(index,1,task);
    },
    updateCompletedSessions(taskCode,sessions){
      const index = this.tasks.findIndex(t => t.code === taskCode);
      const task= this.tasks[index];
      task.completedSessions=sessions;
      this.tasks.splice(index,1,task);
      console.log(this.tasks);
    }
  }
})

interface TaskInfo {
  name: string;
  code: number;
  sessions: number;
  completedSessions: number;
}
