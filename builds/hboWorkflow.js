/* globals addBuild */

addBuild('hboWorkflow', [
  {}, // blank
  { // generate w/d3
    showBuildTags: [
      'd3Header'
    ],
    images: {
      d3: {
        src: 'images/1.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      transition: {
        src: 'images/1.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      transition: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // copy to illustrator
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/1.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      transition: {
        src: 'images/1.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      transition: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northeasteast: 'darkGreen',
          east: 'darkGreen',
          southeasteast: 'darkGreen'
        }
      }
    }
  },
  { // change colors / typography
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/1.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      illustrator: {
        src: 'images/2.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // zoom in
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/1.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      illustrator: {
        src: 'images/2.svg',
        x: 0.65,
        y: 1.7,
        scale: 3.5
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // zoom out, prep for merge
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/1.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      d3Transition: {
        src: 'images/1.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      iTransition: {
        src: 'images/2.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      },
      illustrator: {
        src: 'images/2.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      d3Transition: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      iTransition: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // merge
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/1.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      d3Transition: {
        src: 'images/1.svg',
        x: 0.5,
        y: 0.67,
        scale: 0.6
      },
      iTransition: {
        src: 'images/2.svg',
        x: 0.5,
        y: 0.67,
        scale: 0.6
      },
      illustrator: {
        src: 'images/2.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      d3Transition: {
        x: 0.5,
        y: 0.27,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      iTransition: {
        x: 0.5,
        y: 0.27,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // reintegrate
    autoNext: true,
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/1.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      d3Transition: {
        src: 'images/2.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      iTransition: {
        src: 'images/2.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      },
      illustrator: {
        src: 'images/2.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      d3Transition: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      iTransition: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // zoom in
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.0.svg',
        x: 0.65,
        y: 1.7,
        scale: 3.5
      },
      d3Transition: {
        src: 'images/2.svg',
        x: 0.65,
        y: 1.7,
        scale: 3.5,
        popFront: true
      },
      illustrator: {
        src: 'images/2.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // sort by last name
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.0.svg',
        x: 0.65,
        y: 1.7,
        scale: 3.5,
        popFront: true
      },
      illustrator: {
        src: 'images/2.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          northeasteast: 'darkGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // zoom out
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.0.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      iTransition: {
        src: 'images/2.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      },
      d3Transition: {
        src: 'images/3.0.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      illustrator: {
        src: 'images/2.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'mediumBlue',
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      iTransition: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      d3Transition: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          northeasteast: 'darkGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // merge
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.0.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      iTransition: {
        src: 'images/2.svg',
        x: 0.5,
        y: 0.67,
        scale: 0.6
      },
      d3Transition: {
        src: 'images/3.0.svg',
        x: 0.5,
        y: 0.67,
        scale: 0.6
      },
      illustrator: {
        src: 'images/2.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'mediumBlue',
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      iTransition: {
        x: 0.5,
        y: 0.27,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      d3Transition: {
        x: 0.5,
        y: 0.27,
        scale: 1.5,
        colors: {
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          northeasteast: 'darkGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // reintegrate
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.0.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      iTransition: {
        src: 'images/3.0.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6,
        popFront: true
      },
      d3Transition: {
        src: 'images/3.0.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      iMask: {
        src: 'images/2.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      },
      illustrator: {
        src: 'images/2.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'mediumBlue',
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      iTransition: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        },
        popFront: true
      },
      d3Transition: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          northeasteast: 'darkGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // clean
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.0.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      iMask: {
        src: 'images/3.0.svg',
        x: 0.83,
        y: 0.57,
        scale: 0.6,
        popFront: true
      },
      illustrator: {
        src: 'images/3.1.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          northeasteast: 'darkGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // crop
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.0.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      d3Mask: {
        src: 'images/3.0.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6,
        popFront: true
      },
      illustrator: {
        src: 'images/3.1.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // new layout
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.2.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      d3Transition: {
        src: 'images/3.2.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      iTransition: {
        src: 'images/3.1.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      },
      illustrator: {
        src: 'images/3.1.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'mediumBlue',
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      d3Transition: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      iTransition: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // merge
    autoNext: true,
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.2.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      d3Transition: {
        src: 'images/3.2.svg',
        x: 0.5,
        y: 0.67,
        scale: 0.6,
        popFront: true
      },
      iTransition: {
        src: 'images/3.3.svg',
        x: 0.5,
        y: 0.603,
        scale: 0.6
      },
      illustrator: {
        src: 'images/3.1.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'mediumBlue',
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      d3Transition: {
        x: 0.5,
        y: 0.27,
        scale: 1.5,
        colors: {
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      iTransition: {
        x: 0.5,
        y: 0.27,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // mergeClean
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.2.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      d3Transition2: {
        src: 'images/3.3.svg',
        x: 0.5,
        y: 0.603,
        scale: 0.6
      },
      iTransition: {
        src: 'images/3.3.svg',
        x: 0.5,
        y: 0.603,
        scale: 0.6
      },
      illustrator: {
        src: 'images/3.1.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'mediumBlue',
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      d3Transition: {
        x: 0.5,
        y: 0.27,
        scale: 1.5,
        colors: {
          northwest: 'lightBlue',
          north: 'teal',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      iTransition: {
        x: 0.5,
        y: 0.27,
        scale: 1.5,
        colors: {
          northwest: 'lightBlue',
          north: 'teal',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // reintegrate
    autoNext: true,
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.2.svg',
        x: 0.17,
        y: 0.57,
        scale: 0.6
      },
      d3Transition2: {
        src: 'images/3.3.svg',
        x: 0.17,
        y: 0.503,
        scale: 0.6,
        popFront: true
      },
      iTransition: {
        src: 'images/3.3.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6,
        popFront: true
      },
      illustrator: {
        src: 'images/3.1.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'mediumBlue',
          northwest: 'lightBlue',
          north: 'lightBlue',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      d3Transition: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightBlue',
          north: 'teal',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      iTransition: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightBlue',
          north: 'teal',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        },
        popFront: true
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // reintegrateClean
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.3.svg',
        x: 0.17,
        y: 0.503,
        scale: 0.6
      },
      illustrator: {
        src: 'images/3.3.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'mediumBlue',
          northwest: 'lightBlue',
          north: 'teal',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightBlue',
          north: 'teal',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // clean
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.3.svg',
        x: 0.17,
        y: 0.503,
        scale: 0.6
      },
      illustrator: {
        src: 'images/3.3.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      },
      illustratorMask: {
        src: 'images/3.3.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          northeasteast: 'darkGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // move title
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.3.svg',
        x: 0.17,
        y: 0.503,
        scale: 0.6
      },
      d3Transition: {
        src: 'images/3.3.svg',
        x: 0.17,
        y: 0.503,
        scale: 0.6
      },
      iTransition: {
        src: 'images/4.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      },
      illustrator: {
        src: 'images/4.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      d3Transition: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      iTransition: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // merge
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.3.svg',
        x: 0.17,
        y: 0.503,
        scale: 0.6
      },
      d3Transition: {
        src: 'images/3.3.svg',
        x: 0.5,
        y: 0.603,
        scale: 0.6,
        popFront: true
      },
      iTransition: {
        src: 'images/4.svg',
        x: 0.5,
        y: 0.603,
        scale: 0.6,
        popFront: true
      },
      illustrator: {
        src: 'images/4.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      d3Transition: {
        x: 0.5,
        y: 0.27,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      iTransition: {
        x: 0.5,
        y: 0.27,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        },
        popFront: true
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  { // reintegrate
    showBuildTags: [
      'd3Header',
      'illustratorHeader'
    ],
    images: {
      d3: {
        src: 'images/3.3.svg',
        x: 0.17,
        y: 0.503,
        scale: 0.6
      },
      d3Transition: {
        src: 'images/4.svg',
        x: 0.17,
        y: 0.503,
        scale: 0.6,
        popFront: true
      },
      iTransition: {
        src: 'images/4.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6,
        popFront: true
      },
      illustrator: {
        src: 'images/4.svg',
        x: 0.83,
        y: 0.503,
        scale: 0.6
      }
    },
    circles: {
      d3: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          northwest: 'lightgrey',
          north: 'lightgrey',
          northeast: 'lightgrey',
          southwest: 'lightgrey',
          southwestwest: 'darkBlue',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      d3Transition: {
        x: 0.17,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      },
      iTransition: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        },
        popFront: true
      },
      illustrator: {
        x: 0.83,
        y: 0.17,
        scale: 1.5,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          southeasteast: 'darkGreen',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  }
]);
