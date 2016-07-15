import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function(){
});

Template.hello.onRendered(function(){
	var target = new Date('2016-07-16T16:00:00.000Z');
	function tick() {
		var now = new Date();
		var diff = Math.floor((target.getTime() - now.getTime())/1000);
		
		var seconds = diff % 60;
		var minutes = Math.floor(diff%3600 / 60);
		var hours = Math.floor(diff%86400 / 3600);
		var days = Math.floor(diff / (60 * 60 * 24));
		
		$('.counter .d').html(days<10?"0"+days:days);
		$('.counter .h').html(hours<10?"0"+hours:hours);
		$('.counter .m').html(minutes<10?"0"+minutes:minutes);
		$('.counter .s').html(seconds<10?"0"+seconds:seconds);
	}

	$(document).ready(function() {
		window.setInterval(tick, 1000);
		tick();
	});
});

Template.hello.helpers({
});

Template.hello.events({
	'click #volume': function() {
		console.log('clicked');
		var vid = document.getElementById("music");
		if(vid.volume==1) {
			vid.volume=0;
			$('#volume').html('<i class="material-icons">volume_off</i>');
		} else {
			vid.volume=1;
			$('#volume').html('<i class="material-icons">volume_up</i>');
		}
	}
});
