// Towers of Hanoi


function Hanoi () {
  this.stacks = [[1,2,3], [], []]

}

Hanoi.prototype.isWon = function () {
  this.stacks[0].length === 0 &&
  (this.stacks[1].length === 3 || this.stacks[2].length === 3 )
}

Hanoi.prototype.isValidMove = function (startTowerIndex, endTowerIndex) {
  var currentDisc = this.stacks[startTowerIndex][0]
    if (this.stacks[endTowerIndex].length === 0){
      return true;
    }
    else {
      var destinationDisc = this.stacks[endTowerIndex][0];
    }

  if (currentDisc < destinationDisc) {
    return true;
  }
  else{
    return false;
  }
}

Hanoi.prototype.move(startTowerIndex, endTowerIndex) {
  if this.isValidMove(startTowerIndex, endTowerIndex){
    var movingDisc = this.stacks[startTowerIndex].shift
    this.stacks[endTowerIndex].unshift(movingDisc);
    return true;
  }
  else {
    return false;
  }
}

Hanoi.prototype.print = function() {
  console.log(this.stacks)
}
