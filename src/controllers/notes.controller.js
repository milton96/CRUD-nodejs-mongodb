const notesController = {};
const Note = require('../models/Note');
const { SUCCESS, WARNING } = require('../helpers/messages.helper');

notesController.renderNotes = async (req, res) => {
    // -1 = 'desc', 1 = 'asc'
    const notes = await Note.find({ user: req.user._id }).sort({ createdAt: -1 });
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
    note.user = req.user._id;
    await note.save();
    req.flash(SUCCESS, 'Nota agregada correctamente.');
    res.redirect('/notes');
};

notesController.renderEditNote = async (req, res) => {
    let note = await Note.findById(req.params.id);
    if (note.user != req.user._id) {
        req.flash(WARNING, 'No puedes modificar las notas de otro usuario.');
        return res.redirect('/notes');
    }
    res.render('notes/edit-note.hbs', { note });
};

notesController.updateNote = async (req, res) => {
    const { title, description } = req.body;
    let note = await Note.findById(req.params.id);
    if (note.user != req.user._id) {
        req.flash(WARNING, 'No puedes modificar las notas de otro usuario.');
        return res.redirect('/notes');
    }
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash(SUCCESS, 'Nota modificada correctamente.');
    res.redirect('/notes');
};

notesController.deleteNote = async (req, res) => {
    let note = await Note.findById(req.params.id);
    if (note.user != req.user._id) {
        req.flash(WARNING, 'No puedes eliminar las notas de otro usuario.');
        return res.redirect('/notes');
    }
    await Note.findByIdAndDelete(req.params.id);
    req.flash(SUCCESS, 'Nota eliminada correctamente.');
    res.redirect('/notes');
};

module.exports = notesController;