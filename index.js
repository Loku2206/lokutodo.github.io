const addButton = document.querySelector('#add')
const upateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
// console.log(textAreaData)
    
    textAreaData.forEach((note) => {
        return notes.push(note.value)
        
    })

    localStorage.setItem('notes', JSON.stringify(notes));
}
const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note')

    const htmlData = `
    <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
 `;

    note.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(note)

    //getting references
    const editButton = note.querySelector('.edit')
    const delButton = note.querySelector('.delete')
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea')
             //deletion perform
    delButton.addEventListener('click', () => {
        note.remove();
        upateLSData();

    })
                //toggle using edit btn
          textArea.value = text;
          mainDiv.innerHTML = text;
         editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
         })
    textArea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;

        upateLSData();
    })
 
        
        
    document.body.appendChild(note);
    //to add something 
    
};
           //get data from localstorage
const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) { notes.forEach((note) => addNewNote(note)) };
addButton.addEventListener('click', () => {
    addNewNote();
});
