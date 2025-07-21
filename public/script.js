const title = document.getElementById('title');
const content = document.getElementById('content');
const button= document.querySelector('button');
const notesList= document.getElementById('notes-container');
const form= document.querySelector('form');
const noteList= document.getElementById('notes-container');


form.addEventListener('submit', (event)=>{
	event.preventDefault();
	const titleval= title.value;
	const contentval= content.value;
	fetch('http://localhost:3000/notes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title: titleval,
			content: contentval
		})
	})
	.then(res=> res.json())
	.then(data=> {
		title.value = '';
      		content.value = '';
      		loadNotes(); 
	})	
	.catch(err=>console.log('post error:', err));
});


const loadNotes= ()=>{
	fetch('http://localhost:3000/notes')
	.then(res=>res.json())
	.then(notes=> { 
		noteList.innerHTML= "";
		notes.forEach(note=> {
			let div= document.createElement('div');
			div.innerHTML= `<h3>${note.title}</h3>
				<p>${note.content}</p>`;
			noteList.appendChild(div);
		});	
	})
	.catch(err=> console.log('error found:', err));
};
