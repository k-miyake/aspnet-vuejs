(function () {
    function ViewModel() {
        var self = this;

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
    }

    ko.applyBindings(new ViewModel());
})();