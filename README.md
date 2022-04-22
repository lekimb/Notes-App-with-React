# Notes-App-with-React
This is a basic notes web-app. You can add notes and delete them, and also select single notes to dynamically edit them. 

## Data Structure
The data structure is simple: an array of `notes` containing all notes and a `selectedId` numeric variable to reference the currently selected note by its id. For the note objects, each one has the following attributes: `id`, `title`, `body` and `date`.

## Events
The events that trigger the different actions are the following:
- `onClick` 'Add New Note' button: 
    - A new blank note is added to the existing ones. By default, if the title property is blank, its value will be replaced on the rendering by "Nueva nota", so that it doesn't appear nothing when a new note is created.
    - Set new note as the selected one.
- `onClick` a note in the sidebar:
    - Set that note as the selected one.
- `onChange` a field of the note preview:
    - Edit note in notes array to match the changes.
    - Update the date property.
    - Sort notes by date.
- `onBlur` a field of the note preview:
    - If the selected note (that is also the displayed on the preview) title and body fields are empty, delete selected note.
    - If there are still notes in the notes array, set the first one as the selected note. If not, set it equal to null.
- `onClick` the delete icon of a note in the sidebar:
    - Delete note in notes array.
    - If there are still notes in the notes array, set the first one as the selected note. If not, set it equal to null.
