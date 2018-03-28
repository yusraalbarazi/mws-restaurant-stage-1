if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./sw.js')
        .then(function(registeration) {
            console.log("service worker registered", registeration);
        }).catch(function(err) {
            console.log("service worker failed to register s", err);
        })
}