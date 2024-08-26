document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("changeTextButton");

    button.addEventListener("click", () => {
        const myText = document.getElementById("myText");
        if (myText) {
            myText.textContent = "Hello, Check!";
        }
    });

    fetchAndDisplayTodos();
});

function fetchAndDisplayTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(todos => {
            const firstFiveTitles = todos.slice(0, 5).map(todo => todo.title);

            const ul = document.createElement("ul");
            firstFiveTitles.forEach(title => {
                const li = document.createElement("li");
                li.textContent = title;
                ul.appendChild(li);
            });

            document.getElementById("todoList").appendChild(ul);
        })
        .catch(error => console.error("Erreur lors de la récupération des tâches:", error));
}
