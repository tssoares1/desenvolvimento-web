document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#todo-form");
    const taskContainer = document.getElementById("todo-items-container");
    const taskTemplate = document.getElementById("todo-item-template");
    const countSpan = document.getElementById("visible-count");
    const emptyState = document.getElementById("empty-state");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { task } = Object.fromEntries(formData.entries());

        if (!task) return;

        // clonar template
        const clone = taskTemplate.content.cloneNode(true);

        // preencher
        clone.querySelector(".todo-item__text").textContent = task;
        clone.querySelector(".todo-item__date").textContent = new Date().toLocaleString("pt-BR");
        clone.querySelector(".todo-item").dataset.id = Date.now();

        // adicionar ao container
        taskContainer.appendChild(clone);

        // limpar input
        e.target.reset();

        // atualizar contador e esconder estado vazio
        updateCount();
    };

    const updateCount = () => {
        countSpan.textContent = taskContainer.children.length;
        emptyState.style.display = taskContainer.children.length > 0 ? "none" : "block";
    };

    form.addEventListener("submit", handleSubmit);

    taskContainer.addEventListener("click", (e) => {
        if (e.target.dataset.action === "delete") {
            const item = e.target.closest(".todo-item");
            item.remove();
            updateCount();
        }
    });
});
