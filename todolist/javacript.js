const todoList = [
'Tôi đi siêu thị',
'Tôi đi chơi',
'Tôi đi làm',
'Tôi đi học'
];
let ul = document.createElement('ul');
ul.classList.add('styleUl');
let display = document.getElementsByTagName('body')[0].appendChild(ul);
const newItem = document.getElementById('new-item');
newItem.addEventListener('click',addItem);


function render(lists){

	let itemlist = lists.map(
		(item) => `<li>${item}<i class="far fa-edit" onclick="editItem(this)"></i><i class="far fa-trash-alt" onclick="removeItem(this)"></i>  </li>`)
		
	display.innerHTML = itemlist.join('');
}
	render(todoList);


function addItem(){
		let valueItem = document.getElementById('text-value');
		
		if(valueItem.value ==""){alert("chưa có tên cv")}
		else {
			todoList.push(valueItem.value);
			
			
		}
		
		render(todoList);
		valueItem.value='';
	}
//hàm xóa item
	function removeItem(obj){
		for (var i = 0; i < todoList.length; i++) {
			if (todoList[i] == obj.parentNode.innerText) {
				todoList.splice(i,1);
			}
		}
		render(todoList);
	}
function editItem(obj){
	let editText= document.getElementById("edit-item");
	for (let i = 0; i < todoList.length; i++) {
		if(todoList[i] == obj.parentNode.innerText){
			editText.value = todolist[i].value;
			index = i;
		}
	}
	return index;
}

























/*// tạo nút xóa
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}
//End
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

*/