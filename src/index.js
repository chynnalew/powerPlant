import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stateControl, blueFood, hydrate, lightItUp, negFeed, dryItUp, darknessFalls } from '../src/plant.js';
import soundfile from './assets/youLose.wav';

let secondsPassed = 0;
let time = setInterval(timer, 1000);
function timer() {
  secondsPassed += 1;
  $("#secondsUpdate").html(secondsPassed);
}

let hurtEm = setInterval(hurtPlant, 5000);

function hurtPlant() {
  const newState = stateControl();
  stateControl(negFeed);
  stateControl(dryItUp);
  stateControl(darknessFalls);
  $('#soil-value').text(`Soil: ${newState.soil}`);
  $('#water-value').text(`Hydration: ${newState.water}`);
  $('#light-value').text(`Mood: ${newState.light}`);
  if (newState.soil === -10 || newState.water === -10 || newState.light === -10) {
    const youLose = new Audio(soundfile);
    youLose.volume = .5;
    youLose.play();
    clearInterval(hurtEm);
    clearInterval(time);
    $('#feed, #water, #light, #happy, #water-value, #light-value').hide();
    $('#soil-value').html(`You killed it :(`);
    $('#dead, #dude').show();
  }
}


$(document).ready(function () {
  
  $('#feed').click(function () {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#water').click(function() {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Hydration: ${newState.water}`);
  });

  $('#light').click(function() {
    const newState = stateControl(lightItUp);
    $('#light-value').text(`Mood: ${newState.light}`);
  });
  
  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
  
  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    $('#water-value').text(`Hydration: ${currentState.water}`);
    $('#light-value').text(`Mood: ${currentState.light}`);
  });
});