const notesController = {};

notesController.renderNotes = (req, res) => {
    res.send('notes');
};

notesController.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesController.createNewNote = (req, res) => {
    res.send('create new note');
    console.log(req.body);
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