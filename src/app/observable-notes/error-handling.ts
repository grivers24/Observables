// The Observables produce values asynchronously; that is why try/catch block will not effectively work here to catch the errors. So In the sense of Observables, you can handle the errors by specifying an error callback on the observer.

// Producing an error also causes the observable to clean up subscriptions and stop producing values. An observable can either produce the values (calling the next callback), or it can complete, calling either the complete or error callback.

myObservable.subscribe({
  next(num) { console.log('Next num: ' + num)},
  error(err) { console.log('Received an errror: ' + err)}
});
// Disposing observables
// When you subscribe to the Observable, you get back the subscription, which represents an ongoing execution. Just call unsubscribe() to cancel the execution. So you are free to that Observable.
