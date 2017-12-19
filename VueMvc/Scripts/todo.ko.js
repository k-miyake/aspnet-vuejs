(function () {
    function ViewModel() {
        var self = this;

        self.todoSummary = ko.observable("");
        self.todoList = ko.observableArray([
            {
                summary: ko.observable("1つ目のtodo"),
                done: ko.observable(true)
            },
            {
                summary: ko.observable("2つ目のtodo"),
                done: ko.observable(false)
            }
        ]);
        

        self.addTodo = function () {
            var todo = {
                summary: self.todoSummary(),
                done: ko.observable(false)
            };

            self.todoList.push(todo);
            self.todoSummary("");
        };
    }

    ko.applyBindings(new ViewModel(), document.getElementById("#todo-list"));
})();