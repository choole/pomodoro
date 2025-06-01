import mitt from 'mitt'

type Events = {
  'time': {time: number}
  'timer:done': void
  'timer:paused': void
  'activeTab': {tab: number}
}

export const eventBus = mitt<Events>()
