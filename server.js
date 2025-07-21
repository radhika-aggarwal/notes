const express= require('express');
const fs= require('fs');
const cors = require('cors');
const path = require('path');
const app= express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const notes= [];
app.get('/notes', (req,res)=>{
	res.json(notes);
	
});

app.post('/notes', (req, res)=>{
	const data= req.body;
	const file= {id: Date.now(),
		title:  data.title,
		content:  data.content};
	notes.push(file);
	res.json(file);
});

app.listen(3000);
