FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('layout1', {content: 'index'});
    }
});

FlowRouter.route('/routeToThisPage', {
    action: function(params, queryParams) {
        BlazeLayout.render('layout1', {content: 'schedules'});

        function onLoad() {
        	try {
	        	document.getElementsByClassName('navSection')[2].childNodes[0].innerHTML = 'Settings';
	        	document.getElementsByClassName('toggleSettings')[0].classList.add('hidden');
	        	document.getElementsByClassName('toggleSettings')[1].classList.remove('hidden');

				var addEmployee = document.getElementsByClassName('addEmployee');
				var scheduleTaken = document.getElementsByClassName('scheduleTaken');
				var scheduleContainer = document.getElementsByClassName('scheduleContainer');
				var li = document.getElementsByTagName('li');
				var typeAndIndex;

				document.getElementById('rightArrow').addEventListener('click', function() {
					console.log('right');
					for (var i=0; i<scheduleContainer.length; i++) {
						if (!scheduleContainer[i].classList.contains('hidden') && schedules[i+1]) {
							scheduleContainer[i].classList.add('hidden');
							i++;
							scheduleContainer[i].classList.remove('hidden');
							document.getElementsByClassName('dayDate')[0].innerHTML = i == 0 ? 'Saturday, March 3' : i == 1 ? 'Sunday, March 4' : i == 2 ? 'Monday, March 5' : i == 3 ? 'Tuesday, March 6' : 'Not Found';
						}
					}
				});

				document.getElementById('leftArrow').addEventListener('click', function() {
					console.log('right');
					for (var i=0; i<scheduleContainer.length; i++) {
						if (!scheduleContainer[i].classList.contains('hidden') && schedules[i-1]) {
							scheduleContainer[i].classList.add('hidden');
							i--;
							scheduleContainer[i].classList.remove('hidden');
							document.getElementsByClassName('dayDate')[0].innerHTML = i == 0 ? 'Saturday, March 3' : i == 1 ? 'Sunday, March 4' : i == 2 ? 'Monday, March 5' : i == 3 ? 'Tuesday, March 6' : 'Not Found';
						}
					}
				});

				//Add employee button
				for (var i=0; i<addEmployee.length; i++) {
					addEmployee[i].addEventListener('click', function() {
						document.getElementsByClassName('employeeModal')[0].classList.add('fadeIn');
						document.getElementsByClassName('employeeModal')[0].classList.remove('fadeOut');
						typeAndIndex = this;

						for (var i=0; i<li.length; i++) {
							if (li[i].classList.contains('selectedEmployee')) {
								li[i].classList.remove('selectedEmployee');
							}
						}
					});
				}

				slotState();
				function slotState() {
					//Already scheduled slot
					for (var i=0; i<scheduleTaken.length; i++) {
						scheduleTaken[i].addEventListener('click', function() {
							document.getElementsByClassName('employeeModal')[0].classList.add('fadeIn');
							document.getElementsByClassName('employeeModal')[0].classList.remove('fadeOut');
							typeAndIndex = this;

							for (var i=0; i<li.length; i++) {
								if (li[i].innerHTML == this.innerHTML) {
									li[i].classList.add('selectedEmployee');
								}
								else if (li[i].classList.contains('selectedEmployee')) {
									li[i].classList.remove('selectedEmployee');
								}
							}
						});
					}
				}

				//Employee list
				for (var i=0; i<li.length; i++) {
					li[i].addEventListener('click', function() {
						document.getElementsByClassName('employeeModal')[0].classList.remove('fadeIn');
						document.getElementsByClassName('employeeModal')[0].classList.add('fadeOut');
						if (typeAndIndex.classList.contains('addEmployee')) {
							typeAndIndex.classList.add('scheduleTaken');
							typeAndIndex.classList.remove('addEmployee');
							typeAndIndex.innerHTML = this.innerHTML;
							slotState();
						}
						else if (typeAndIndex.innerHTML == this.innerHTML) {
							typeAndIndex.classList.add('addEmployee');
							typeAndIndex.classList.remove('scheduleTaken');
							typeAndIndex.innerHTML = '+';
						}
						else if (typeAndIndex.innerHTML != this.innerHTML) {
							typeAndIndex.innerHTML = this.innerHTML;
						}
						typeAndIndex = null;
					});
				}
			}
			catch(e) {
				//Regular onload won't work in this scenario, hence the hacky work-around
				setTimeout(function() {
					onLoad();
				},1);
			}
		}
		onLoad();
	}
});
