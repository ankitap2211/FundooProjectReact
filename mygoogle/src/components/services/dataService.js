//here we featching data
//we need authorised person then only server allows you to featch data
import axios from "axios";

const headerConfig = {
    headers: { Authorization: localStorage.getItem('token') }
    //here whole token comes in headers
}

export const getNoteList = () => {
    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', headerConfig)

    return response
}

export const postNoteList = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', noteObj, headerConfig)

    return response
}

export const changesColorNotes = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes', noteObj, headerConfig)

    return response
}

export const archivedNotes = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes', noteObj, headerConfig)

    return response
}

export const trashNotes = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes', noteObj, headerConfig)

    return response
}

export const updateNotes = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes', noteObj, headerConfig)

    return response
}

//headerConfig use as a object to featching API
//headerConfig use here to authenticate user