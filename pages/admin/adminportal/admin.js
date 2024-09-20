    // Toggle Add Student Modal
    const addStudentButton = document.getElementById('add-student-button');
    const addStudentModal = document.getElementById('add-student-modal');
    const closeModalButton = document.getElementById('close-modal');

    addStudentButton.addEventListener('click', () => {
        addStudentModal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', () => {
        addStudentModal.classList.add('hidden');
    });

    // Handle form submission
    const addStudentForm = document.getElementById('add-student-form');
    addStudentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Here you can handle the form data and send it to the backend for further processing
        alert('Student added successfully!');
        addStudentModal.classList.add('hidden');
    });