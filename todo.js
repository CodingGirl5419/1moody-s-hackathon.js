var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todoData"));

data = data || {};
function addButtonEvent(){
  var value = document.getElementById("todo-text").value;
  var list = document.getElementById('unordered');
  var element = document.createElement('li');
  //var innerDom = '<input type = "checkbox'
  element.innerHTML = value;
  element.className = 'list-group-item';
  list.appendChild(element);
  // alert(value);
  //alert("Hello");
}
(function (todo, data, $) {


    todo.init = function () {


        $.each(data, function (index, params) {

        });


        $('#add-btn').click(function (e) {

        });



    };

    var removeElement = function (id) {

    };

    todo.add = function () {
        var todotext = $('#todo-text').val();

    };


})(todo, data, jQuery);
