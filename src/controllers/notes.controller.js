const notesController = {};
const Note = require('../models/Note');
const { SUCCESS } = require('../helpers/messages.helper');

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
    req.flash(SUCCESS, 'Nota agregada correctamente.');
    res.redirect('/notes');
};

notesController.renderEditNote = async (req, res) => {
    let note = await Note.findById(req.params.id);
    res.render('notes/edit-note.hbs', { note });
};

notesController.updateNote = async (req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash(SUCCESS, 'Nota modificada correctamente.');
    res.redirect('/notes');
};

notesController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash(SUCCESS, 'Nota eliminada correctamente.');
    res.redirect('/notes');
};

module.exports = notesController;