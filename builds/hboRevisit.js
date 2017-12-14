/* globals addBuild */

addBuild('hboRevisit', [
  { // intial
    images: {
      hbo: {
        src: 'images/5.svg',
        x: 0.5,
        y: 0.5,
        scale: 1
      },
      mask: {
        src: 'images/4.svg',
        x: 0.5,
        y: 0.5,
        scale: 1
      }
    }
  },
  { // zoom
    images: {
      hbo: {
        src: 'images/5.svg',
        x: 0.75,
        y: 1.3,
        scale: 3.5
      },
      mask: {
        src: 'images/4.svg',
        x: 0.75,
        y: 1.3,
        scale: 3.5
      }
    }
  },
  { // add JD Williams
    images: {
      hbo: {
        src: 'images/5.svg',
        x: 0.75,
        y: 1.3,
        scale: 3.5
      }
    }
  },
  { // show code
    images: {
      hbo: {
        src: 'images/5.svg',
        x: 1.4,
        y: 1.3,
        scale: 3.5,
        popFront: true
      },
      code: {
        src: 'images/hboCode1.jpg',
        x: 0.5,
        y: 0.5,
        scale: 2
      }
    }
  },
  { // highlight font
    images: {
      hbo: {
        src: 'images/5.svg',
        x: 1.4,
        y: 1.3,
        scale: 3.5,
        popFront: true
      },
      code: {
        src: 'images/hboCode2.jpg',
        x: 0.7,
        y: 0.6,
        scale: 3
      }
    }
  },
  { // scroll to JD Williams
    images: {
      hbo: {
        src: 'images/5.svg',
        x: 1.4,
        y: 1.3,
        scale: 3.5,
        popFront: true
      },
      code: {
        src: 'images/hboCode2.jpg',
        x: 0.7,
        y: -0.35,
        scale: 3
      }
    }
  },
  { // font rule
    popBuildTags: true,
    showBuildTags: [
      'constantRule'
    ],
    images: {
      hbo: {
        src: 'images/5.svg',
        x: 1.4,
        y: 1.3,
        scale: 3.5,
        popFront: true
      },
      code: {
        src: 'images/hboCode2.jpg',
        x: 0.7,
        y: -0.35,
        scale: 3
      }
    }
  },
  { // zoom to structure
    popBuildTags: true,
    showBuildTags: [
      'constantRule'
    ],
    images: {
      hbo: {
        src: 'images/5.svg',
        x: 1.4,
        y: 1.3,
        scale: 3.5,
        popFront: true
      },
      code: {
        src: 'images/hboCode3.jpg',
        x: 0.5,
        y: 0.5,
        scale: 2
      }
    }
  },
  { // structure label
    popBuildTags: true,
    showBuildTags: [
      'constantRule',
      'structureRule'
    ],
    images: {
      hbo: {
        src: 'images/5.svg',
        x: 1.4,
        y: 1.3,
        scale: 3.5,
        popFront: true
      },
      code: {
        src: 'images/hboCode3.jpg',
        x: 0.5,
        y: 0.5,
        scale: 2
      }
    }
  },
  { // transform
    popBuildTags: true,
    showBuildTags: [
      'constantRule',
      'structureRule'
    ],
    images: {
      hbo: {
        src: 'images/5.svg',
        x: 1.4,
        y: 1.3,
        scale: 3.5,
        popFront: true
      },
      code: {
        src: 'images/hboCode4.jpg',
        x: 0.7,
        y: 0.6,
        scale: 3
      }
    }
  },
  { // data rule
    popBuildTags: true,
    showBuildTags: [
      'constantRule',
      'structureRule',
      'dataRule'
    ],
    images: {
      hbo: {
        src: 'images/5.svg',
        x: 1.4,
        y: 1.3,
        scale: 3.5,
        popFront: true
      },
      code: {
        src: 'images/hboCode4.jpg',
        x: 0.7,
        y: 0.6,
        scale: 3
      }
    }
  },
  { // data rule
    images: {
      hbo: {
        src: 'images/5.svg',
        x: 1.2,
        y: 1.3,
        scale: 3.5,
        popFront: true
      },
      data: {
        src: 'images/hboData.png',
        x: 0.3,
        y: 0.9,
        scale: 2
      }
    }
  }
]);
