module.exports = {
	 todos: [
		'Listen to punk rock music fresh tunes', 
		'Clean my room, NOT!', 
		'Stick it to the man!',
		'Tell moms new boyfriend Ron to suck it!'
	],

	addTodo(todo){
		const newTodoList = [...this.todos, todo];
		this.todos = newTodoList;
	},
	removeTodo(itemPosition){
    if(itemPosition > this.todos.length){
      throw new Error('That item does not exists!');
		}
		if(this.todos.length === 0){
			throw new Error('No more items!');
		}
		const newTodoList = this.todos.filter((todo, i) => itemPosition !== i);
		this.todos = newTodoList;
	},
	getAllTodos() {
		return this.todos;
	},
	removeAllTodos(){
		this.todos = [];
	},
	editTodo(newContent, itemPosition){
		if(!this.todos[itemPosition]){
			throw new Error('No item at that position');
		}
		this.todos[itemPosition] = newContent;
	}
}
