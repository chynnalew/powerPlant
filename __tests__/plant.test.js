import { storeState, stateControl, changeState, feed, blueFood, hydrate, superWater } from '../src/plant.js';

describe('storeState', () => {
  
  test('should return an empty object when no functions are passed in', () => {
    let plant = {};
    expect(stateControl()).toEqual(plant);
  })

  test('should return an object with soil:1 when feed func is passed in', () => {
    let plant = stateControl(feed);
    expect(plant).toEqual({ soil: 1 });
  });

  // test.only('should returnstore different states for individual variables', () => {
  //   let plantFeed = stateControl(feed);
  //   let plantTest = stateControl(blueFood);
  //   let plantTest2 = stateControl(blueFood);
  //   expect(plantFeed).toEqual({ soil: 1 });
  //   expect(plantTest2).toEqual({ soil: 5 });
  //   expect(plantTest).toEqual({ soil: 5 });
  // })

});

describe('changeState', () => {
  test('should add key value happy: 2 when prop = happy and value = 2', () => {
    const test = changeState('happy')(2);
    expect(stateControl(test)).toEqual({ happy: 2, soil:1 });
  })
})
