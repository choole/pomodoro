import mitt from 'mitt'

type Events = {
  'time': {time: number}
  'timer:done': void
}

export const eventBus = mitt<Events>()
