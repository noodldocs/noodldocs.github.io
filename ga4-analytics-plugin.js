(function () {

  function trackPageViews(hook) {
    hook.doneEach(() => {
      window.dataLayer.push({
        'event': 'virtualPageview',
        'pageUrl': window.location.href,
        'pageTitle': document.title
        });
    });
  };
  
  $docsify.plugins = [].concat(trackPageViews, $docsify.plugins);
  
}());