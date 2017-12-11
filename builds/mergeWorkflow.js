/* globals addBuild */

addBuild('mergeWorkflow', [
  {
    showBuildTags: [],
    circles: {
      automated: {
        x: 0.25,
        y: 0.5,
        scale: 3,
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
      drawing: {
        x: 0.25,
        y: 0.5,
        scale: 3,
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
  {
    showBuildTags: [],
    circles: {
      automated: {
        x: 0.25,
        y: 0.5,
        scale: 3,
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
      drawing: {
        x: 0.75,
        y: 0.5,
        scale: 3,
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
  {
    showBuildTags: [
      'drawingChange'
    ],
    circles: {
      automatedShell: {
        x: 0.25,
        y: 0.5,
        scale: 3,
        colors: {
          west: 'darkBlue',
          northwestwest: 'darkBlue',
          southwestwest: 'darkBlue'
        }
      },
      drawingShell: {
        x: 0.75,
        y: 0.5,
        scale: 3,
        colors: {
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southeasteast: 'darkGreen'
        }
      },
      automated: {
        x: 0.25,
        y: 0.5,
        scale: 3,
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
      drawing: {
        x: 0.75,
        y: 0.5,
        scale: 3,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  {
    showBuildTags: [
      'drawingChange',
      'automatedChange'
    ],
    circles: {
      automatedShell: {
        x: 0.25,
        y: 0.5,
        scale: 3,
        colors: {
          west: 'darkBlue',
          northwestwest: 'mediumBlue',
          southwestwest: 'darkBlue'
        }
      },
      drawingShell: {
        x: 0.75,
        y: 0.5,
        scale: 3,
        colors: {
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southeasteast: 'darkGreen'
        }
      },
      automated: {
        x: 0.25,
        y: 0.5,
        scale: 3,
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
      drawing: {
        x: 0.75,
        y: 0.5,
        scale: 3,
        colors: {
          northwest: 'lightgrey',
          north: 'lightGreen',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  {
    showBuildTags: [
      'drawingChange',
      'automatedChange',
      'mergedChanges'
    ],
    circles: {
      automatedShell: {
        x: 0.25,
        y: 0.5,
        scale: 3,
        colors: {
          west: 'darkBlue',
          northwestwest: 'mediumBlue',
          southwestwest: 'darkBlue'
        }
      },
      drawingShell: {
        x: 0.75,
        y: 0.5,
        scale: 3,
        colors: {
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southeasteast: 'darkGreen'
        }
      },
      automated: {
        x: 0.5,
        y: 0.75,
        scale: 3,
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
      drawing: {
        x: 0.5,
        y: 0.75,
        scale: 3,
        colors: {
          northwest: 'lightBlue',
          north: 'teal',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  },
  {
    showBuildTags: [
      'drawingChange',
      'automatedChange',
      'mergedChanges'
    ],
    circles: {
      automatedShell: {
        x: 0.25,
        y: 0.5,
        scale: 3,
        colors: {
          west: 'darkBlue',
          northwestwest: 'mediumBlue',
          southwestwest: 'darkBlue'
        }
      },
      drawingShell: {
        x: 0.75,
        y: 0.5,
        scale: 3,
        colors: {
          northeasteast: 'mediumGreen',
          east: 'darkGreen',
          southeasteast: 'darkGreen'
        }
      },
      automated: {
        x: 0.25,
        y: 0.5,
        scale: 3,
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
      drawing: {
        x: 0.75,
        y: 0.5,
        scale: 3,
        colors: {
          northwest: 'lightBlue',
          north: 'teal',
          northeast: 'lightGreen',
          southwest: 'lightgrey',
          southeast: 'lightgrey',
          south: 'lightgrey',
          center: 'lightgrey'
        }
      }
    }
  }
]);
