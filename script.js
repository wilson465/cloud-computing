const form = document.getElementById('personalForm');
const table = document.getElementById('personalTable');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    if (nombre && email && telefono) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${nombre}</td>
            <td>${email}</td>
            <td>${telefono}</td>
            <td class="actions">
                <button onclick="editRow(this)">Editar</button>
                <button onclick="deleteRow(this)">Eliminar</button>
            </td>
        `;

        table.appendChild(row);
        form.reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    table.removeChild(row);
}

function editRow(button) {
    const row = button.parentNode.parentNode;
    const cells = row.querySelectorAll('td');

    document.getElementById('nombre').value = cells[0].textContent;
    document.getElementById('email').value = cells[1].textContent;
    document.getElementById('telefono').value = cells[2].textContent;

    deleteRow(button);
}
