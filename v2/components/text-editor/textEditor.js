// Initialize Quill editor
var quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
        toolbar: [
            [{ 'header': '1'}, { 'header': '2'}],
            [{ 'size': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }, { 'align': [] }],
            ['link', 'image', 'video'],
            ['clean']
        ]
    }
    // Enbale { 'font': [] } in first line to set default typeface
});
// Set the initial content in the editor (same as default output)
quill.root.innerHTML = `<h1>This is your area to format your content. Have fun!😎</h1>`;

// Save content button handler
document.getElementById('saveButton').addEventListener('click', function() {
    var htmlContent = quill.root.innerHTML;
    document.getElementById('outputContent').innerHTML = htmlContent;
});

// Toggle editor button handler with effect
document.getElementById('toggleButton').addEventListener('click', function() {
    var editorContainer = document.querySelector('.editor-container');
    if (editorContainer.style.height === '0px' || editorContainer.style.height === '') {
        editorContainer.style.height = '70%';
        editorContainer.style.transition = '0.5s';
        editorContainer.style.opacity = '1';
        editorContainer.style.visibility = 'visible';
        this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M370.67-324 190.33-143.33q-10 10-23.33 10-13.33 0-23.33-9.9-10-9.89-10-23.5 0-13.6 10-23.6L324-370.67h-80q-14.17 0-23.75-9.61-9.58-9.62-9.58-23.84 0-14.21 9.58-23.71t23.75-9.5h160q14.17 0 23.75 9.58t9.58 23.75v160q0 14.17-9.61 23.75-9.62 9.58-23.84 9.58-14.21 0-23.71-9.58t-9.5-23.75v-80Zm266-266h80q14.16 0 23.75 9.62 9.58 9.61 9.58 23.83 0 14.22-9.58 23.72-9.59 9.5-23.75 9.5h-160q-14.17 0-23.75-9.59-9.59-9.58-9.59-23.75v-160q0-14.16 9.62-23.75 9.62-9.58 23.83-9.58 14.22 0 23.72 9.58 9.5 9.59 9.5 23.75v80l179.67-180q10-10 23.33-10 13.33 0 23.33 9.9 10 9.89 10 23.5 0 13.6-10 23.6L636.67-590Z"/></svg>' + 'Hide';
    } else {
        editorContainer.style.height = '0px';
        editorContainer.style.opacity = '0';
        editorContainer.style.visibility = 'hidden';
        this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M153.33-120q-14.33 0-23.83-9.5-9.5-9.5-9.5-23.83v-81q0-13.34 5.33-25.84 5.34-12.5 14.34-21.5l539.66-538.66q9.34-9 21.5-14 12.17-5 25.5-5 12.67 0 25 5 12.34 5 22 14.33L821-772q10 9.67 14.5 22t4.5 24.67q0 12.66-4.83 25.16-4.84 12.5-14.17 21.84L281.67-139.67q-9 9-21.5 14.34-12.5 5.33-25.84 5.33h-81Zm574-560.67L772.67-726l-46-46-45.34 45.33 46 46Z"/></svg>' + 'Edit';
    }
});