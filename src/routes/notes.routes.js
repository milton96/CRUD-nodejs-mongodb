const { Router } = require('express');
const router = Router();

const { 
    renderNotes, 
    renderNoteForm, 
    createNewNote, 
    renderEditNote, 
    updateNote, 
    deleteNote 
} = require('../controllers/notes.controller');

const { isAuthenticated } = require('../helpers/validateAuth');

router.get('/notes', isAuthenticated, renderNotes);
router.get('/notes/new-note', isAuthenticated, renderNoteForm);
router.post('/notes/new-note', isAuthenticated, createNewNote);
router.get('/notes/edit/:id', isAuthenticated, renderEditNote);
router.put('/notes/edit/:id', isAuthenticated, updateNote);
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);

module.exports = router;