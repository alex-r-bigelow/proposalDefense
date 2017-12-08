/* globals Reveal, hljs, allBuilds, handleStep */

Reveal.initialize({
  width: 1920,
  height: 1080,
  margin: 0,
  // minScale: 1,
  // maxScale: 1,
  controls: false,
  slideNumber: true,
  transition: 'fade',
  transitionSpeed: 'fast',
  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js',
      async: true
    },
    { src: 'plugin/highlight/highlight.js',
      async: true,
      callback: function () {
        hljs.initHighlightingOnLoad();
      }
    }
  ],
  history: true,
  center: false
});

Reveal.addEventListener('slidechanged', function (event) {
  let eventId = event.currentSlide.getAttribute('id');
  if (allBuilds[eventId]) {
    let build = allBuilds[eventId];
    Reveal.addEventListener('fragmentshown', build.callback);
    // Handle the first step immediately
    handleStep(build.sectionId, 0);
  }
});
