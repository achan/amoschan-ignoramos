(function () {
  var DateField = function (element) {
    this.element = element;
    element.innerHTML = moment(element.innerHTML).fromNow();
  }

  var dates = document.querySelectorAll('date');
  var index;

  for (index in dates) {
    new DateField(dates[index]);
  }
})();
