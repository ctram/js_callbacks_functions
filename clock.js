function Clock () {
}

Clock.TICK = 5000;

Clock.prototype.printTime = function (currentTime) {
  // Format the time in HH:MM:SS
  var hours = Math.floor(currentTime / 3600000);
  var remaining_time = Math.floor(currentTime % 3600000);
  var minutes = Math.floor(remaining_time / 60000);
  remaining_time = Math.floor(remaining_time % 60000)
  var seconds = Math.floor(remaining_time / 1000);

  console.log('Time: ' + hours + ':' + minutes + ':' + seconds);
};

var tick = function () {
  // 1. Increment the currentTime.
  // 2. Call printTime.
  var updatedTime = this.currentTime += Clock.TICK;
  this.printTime(updatedTime);
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.
  var startingTime = new Date();
  var hours = startingTime.getHours();
  var minutes = startingTime.getMinutes();
  var seconds = startingTime.getSeconds();

  var total_milliseconds = hours * 3600000 + minutes * 3600000 + seconds * 1000;

  this.currentTime = total_milliseconds;
  var that = this;
  var fun = function () { that._tick(); }
  setInterval(fun, Clock.TICK);
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  // 2. Call printTime.
  var updatedTime = this.currentTime += Clock.TICK;
  this.printTime(updatedTime);
};

var clock = new Clock();
clock.run();

// var newClock = new Clock();
// newClock.TICK = 2000;
// newClock.run();

// class Human
//   SPECIES = "human"
//
//   def initialize
//     @species = SPECIES
