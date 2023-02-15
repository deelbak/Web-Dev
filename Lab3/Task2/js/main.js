const form =document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
console.log("Im JS");
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskText =taskInput.value;
    console.log(taskText);
    const taskHTML = `<li class="list-group-item d-flex justify-content-between task-item">
    <!-- <p style="font-size:small; color:rgb(173, 171, 171)">Пример:</p> -->
    <small id="emailHelp" class="form-text text-muted">Пример:</small>
    <span class="task-title">Пробежать 3 км</span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
            <img src="img/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
            <img src="img/cross.svg" alt="Done" width="18" height="18">
        </button>
    </div>
</li>`
})