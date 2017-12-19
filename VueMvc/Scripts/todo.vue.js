var vm = new Vue({
    el: "#todo-list",
    data: {
        todoSummary: "",
        todoList: [
            {
                summary: "1つ目のtodo",
                done: false
            },
            {
                summary: "2つ目のtodo",
                done: false
            }
        ]
    },
    methods: {
        addTodo : function (event) {
            var todo = {
                summary: this.todoSummary,
                done: false
            };

            this.todoList.push(todo);
            this.todoSummary = "";
        }
    }
})