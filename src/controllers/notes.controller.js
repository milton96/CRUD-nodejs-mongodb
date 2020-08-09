const notesController = {};
const Note = require('../models/Note');

notesController.renderNotes = async (req, res) => {
    const notes = await Note.find();
    res.render('notes/all-notes', { notes });
};

notesController.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesController.createNewNote = async (req, res) => {
    const { title, description } = req.body;
    let note = new Note({
        title, description
    });
    await note.save();
    res.status(200).send('Ok');
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