window.onload = function () {
    let items = JSON.parse(localStorage.getItem("tasks"))
    if (items === undefined) {
        const tasks =
            [
                {
                    'id': Math.floor(Math.random() * (100 - 1 + 1)) + 1,
                    'name': "test",
                    'status': 0
                },
                {
                    'id': Math.floor(Math.random() * (100 - 1 + 1)) + 1,
                    'name': "test2",
                    'status': 1
                },
            ];

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
        var tasks = JSON.parse(localStorage.getItem('tasks'));
        let result = ""
        for(var i = 0; i < tasks.length; i++)
        {
            var id = tasks[i].id;
            var text = tasks[i].name;
            result += `<li id="task_${id}" class="task-item"> 
            <button onclick='Delete(${id})'>mark as done</button>${text}</li>` + '\n'
        }
        console.log(result)
        document.getElementById("UL").innerHTML = result;
};



function newElement() {
    var task = document.getElementById("Input").value;
    var li = document.createElement("li");
    var t = document.createTextNode(task);
    li.appendChild(t);
    var id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    result = `<li id="task_${id}" class="task-item"> 
            <button onclick='Delete(${id})'>mark as done</button>${task}</li>` + '\n'

    document.getElementById("UL").innerHTML += result;
    document.getElementById("Input").value = "";
    var restoredTasks = JSON.parse(localStorage.getItem('tasks'));
    restoredTasks.push({
        'name': task,
        'id':  id,
    })

    localStorage.setItem('tasks', JSON.stringify(restoredTasks));

}




function Delete(id){
    document.getElementById("task_" + id).outerHTML= ""

    let restoredTasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < restoredTasks.length; i++) {
        if (restoredTasks[i].id === id) {
            //delete restoredTasks[i];
            restoredTasks.splice(i,1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(restoredTasks));
}

