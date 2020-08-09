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

router.get('/notes', renderNotes);
router.get('/notes/new-note', renderNoteForm);
router.post('/notes/new-note', createNewNote);
router.get('/notes/edit/:id', renderEditNote);
router.put('/notes/edit/:id', updateNote);
router.delete('/notes/delete/:id', deleteNote);

module.exports = router;