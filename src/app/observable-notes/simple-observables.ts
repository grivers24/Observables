import { Observable } from 'rxjs/Observable'

// create observable
const simpleObservable = new Observable((observer) => {

  // observable execution
  observer.next('hello')
  observer.complete()
})

// subscribe to the observable
simpleObservable.subscribe()

// dispose the observable
simpleObservable.unsubscribe()
