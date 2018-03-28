if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./sw.js', { scope: './' })
        .then(function(registeration) {
            console.log("service worker registered", registeration);
        })
        .catch(function(err) {
            console.log("service worker failed to register", err);
        })
}