document.addEventListener('DOMContentLoaded', () => {
  const tacheInput = document.getElementById('tacheInput')
  const addTacheBtn = document.getElementById('addTacheBtn')
  const listeTaches = document.getElementById('listeTaches')
  const heure = document.getElementById('heure')

  // Function pour avoir l'heure et la date de la tâche
  const getCurrentDateTime = () => {
    const now = new Date()
    const date = now.toLocaleDateString()
    const time = now.toLocaleTimeString()
    return `${date} ${time}`
  }

  // Actualiser l'horloge digital
  const actuHeure = () => {
    const now = new Date()
    const timeString = now.toLocaleTimeString()
    heure.textContent = timeString
  }

  // Actualiser l'horloge a chaque segonde
  setInterval(actuHeure, 1000)
  actuHeure()

  // Funtion pour ajouter une tâche
  const addTache = () => {
  const textTache = tacheInput.value.trim()
  if (textTache !== '') {
    const li = document.createElement('li')
    const dateTime = getCurrentDateTime()
    li.innerHTML =
      `
      <span>${textTache}</span>
      <span class="datetime">${dateTime}</span>
      <button>Delete</button>
      `
    listeTaches.appendChild(li)
    tacheInput.value = ''

    // Marqué la tache comme faite
    li.querySelector('span').addEventListener('click', () => {
      li.classList.toggle('Tache faite')
    })

    // Eliminé une tâche
    li.querySelector('button').addEventListener('click', () => {
      listeTaches.removeChild(li)
    })
  }
}

  // Événement pour ajouter une tâche en cliquant sur le bouton
  addTacheBtn.addEventListener('click', addTache)

  // Événement en pressionant ENTER pour ajouter
  tacheInput.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
      addTache()
    }
  })
})





/* 
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Función para obtener la fecha y hora actuales en formato legible
    const getCurrentDateTime = () => {
        const now = new Date();
        const date = now.toLocaleDateString(); // Obtiene la fecha en formato local
        const time = now.toLocaleTimeString(); // Obtiene la hora en formato local
        return `${date} ${time}`;
    };

    // Función para agregar una tarea
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            const dateTime = getCurrentDateTime();
            li.innerHTML = `
                <span>${taskText}</span>
                <span class="datetime">${dateTime}</span>
                <button>Eliminar</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';

            // Marcar la tarea como completada
            li.querySelector('span').addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            // Eliminar una tarea
            li.querySelector('button').addEventListener('click', () => {
                taskList.removeChild(li);
            });
        }
    };

    // Evento para agregar una tarea al hacer clic en el botón
    addTaskBtn.addEventListener('click', addTask);

    // Evento para agregar una tarea al presionar Enter
    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
 */