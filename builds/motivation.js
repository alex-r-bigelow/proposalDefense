/* globals addBuild */

addBuild('motivation', [
  {}, // blank
  { // show
    images: {
      hbo: {
        src: 'images/hbo_original.jpg',
        x: 0.5,
        y: 0.5,
        scale: 0.8
      }
    }
  },
  { // zoom
    images: {
      hbo: {
        src: 'images/hbo_original.jpg',
        x: 1,
        y: -0.8,
        scale: 4
      }
    }
  },
  { // apology
    images: {
      hbo: {
        src: 'images/hbo_original.jpg',
        x: 0.65,
        y: -1,
        scale: 3
      }
    }
  },
  { // pies
    images: {
      pies: {
        src: 'images/pies.png',
        x: 0.5,
        y: 0.5,
        scale: 1
      }
    }
  }
]);
