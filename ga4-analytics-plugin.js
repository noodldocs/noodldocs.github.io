(function () {

  function trackPageViews(hook) {
    hook.beforeEach(() => {
      gtag('config', 'G-D19FJBKRP1', {'page_path': location.hash});
    });
  };
  
  $docsify.plugins = [].concat(trackPageViews, $docsify.plugins);
  
}());