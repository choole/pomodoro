import mitt from 'mitt'

type Events = {
  'time': {time: number}
  'timer:done': void
  'timer:paused': void
  'timer:replay': {time: number}
  'activeTab': {tab: number}
}

export const eventBus = mitt<Events>()
