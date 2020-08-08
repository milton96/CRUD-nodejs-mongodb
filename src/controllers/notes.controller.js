const notesController = {};

notesController.renderNotes = (req, res) => {
    res.send('notes');
};

notesController.renderNoteForm = (req, res) => {
    res.send('note add');
};

notesController.createNewNote = (req, res) => {
    res.send('create new note');
};

notesController.renderEditNote = (req, res) => {
    res.send('render edit form');
    console.log(req.params);
};

notesController.updateNote = (req, res) => {
    res.send('edit new note');
};

notesController.deleteNote = (req, res) => {
    res.send('note deleted');
};

module.exports = notesController;