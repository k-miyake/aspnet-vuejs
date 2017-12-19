var app = new Vue({
    el: "#todo-list",
    data: {
        todoList: [
            {
                summary: "1つ目のtodo",
                done: true
            },
            {
                summary: "2つ目のtodo",
                done: false
            }
        ]
    }
});