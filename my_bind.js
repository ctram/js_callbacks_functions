// myBind

Function.prototype.myBind = function (context) {
  // ageOneYear
  var fn = this;
  var fun = function() {
    fn.apply(context);
  }
  return fun;
};

// `times` is the same:
function times(num, fun) {
  for (var i = 0; i < num; i++) {
    fun(); // call is made "function-style"
  }
}

var cat = {
  age: 5,
  height: 5,
  color: 'blue',
  // console.log(this[age]);

  ageOneYear: function () {
    this.age += 1;
  }
};

// Function argument is different:

times(10, cat.ageOneYear.myBind(cat));
