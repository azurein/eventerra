import { Template } from 'meteor/templating';
 
import { Events } from '../api/events.js';
 
import './body.html';
 
Template.body.helpers({
  events() {
    // Show newest tasks at the top
    return Events.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
	'submit .new-event'(e) {
		// Prevent default browser form submit
	    e.preventDefault();
	 
	    // Get value from form element
	    const target = e.target;
	    const text = target.text.value;

	    const newDate = new Date();
	 
	    // Insert a task into the collection	
	    Events.insert({
	    	text,
	    	createdAt: newDate // current time
	    });

	    // Clear form
		target.text.value = '';
	}	
});