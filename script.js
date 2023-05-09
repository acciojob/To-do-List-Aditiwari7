var input = document.getElementById("newTodoInput");
var btn = document.getElementById("addTodoBtn");
var list = document.getElementById("todoList");

btn.addEventListener("click", function() {
	const newtodo = input.value.trim();
	if(newtodo !== ""){
		const listItem = document.createElement("li");
		listItem.innerText = newtodo;
		list.appendChild(listItem);
		input.value = "";
	}
});