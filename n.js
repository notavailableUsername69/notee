const noteForm = document.getElementById('note-form');
const noteList = document.getElementById('note-list');

noteForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = document.getElementById('note-title').value;
  const content = document.getElementById('note-content').value;

  if (title && content) {
    const existingNote = document.querySelector('.note.editing');
    if (existingNote) {
      updateNoteElement(existingNote, title, content);
      existingNote.classList.remove('editing');
    } else {
      createNoteElement(title, content);
    }
    noteForm.reset();
  }
});

function createNoteElement(title, content) {
  const note = document.createElement('div');
  note.classList.add('note');

  const noteTitle = document.createElement('h2');
  noteTitle.textContent = title;

  const noteContent = document.createElement('p');
  noteContent.textContent = content;

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function () {
    enterEditMode(note, title, content);
  });

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', function () {
    note.remove();
  });

  note.appendChild(noteTitle);
  note.appendChild(noteContent);
  note.appendChild(editButton);
  note.appendChild(removeButton);

  noteList.appendChild(note);
}

function enterEditMode(note, title, content) {
  exitEditMode();

  note.classList.add('editing');
  document.getElementById('note-title').value = title;
  document.getElementById('note-content').value = content;
}

function updateNoteElement(note, title, content) {
  const noteTitle = note.querySelector('h2');
  const noteContent = note.querySelector('p');
  noteTitle.textContent = title;
  noteContent.textContent = content;
}

function exitEditMode() {
  const editingNote = document.querySelector('.note.editing');
  if (editingNote) {
    editingNote.classList.remove('editing');
  }
  noteForm.reset();
}