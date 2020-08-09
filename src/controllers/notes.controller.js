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
    res.redirect('/notes');
};

notesController.renderEditNote = (req, res) => {
    res.sed('edit note');
};

notesController.updateNote = (req, res) => {
    res.send('edit new note');
};

notesController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');
};

module.exports = notesController;