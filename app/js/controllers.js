'use strict';

/* Controllers */

myApp
  .controller('TodoController', ['$scope', function($scope) {
  	$scope.todos = [
  		{
  			name: 'Wake up in the morning',
  			completed: true
  		},
  		{
  			name: 'Hurry to Work',
  			completed: false
  		},
  		{
  			name: 'Complete Daily Work',
  			completed: false
  		},
  		{
  			name: 'Send Status report',
  			completed: false
  		}
  	];

  	$scope.showNewTodo = function(){
  		$scope.addNewTodo = true;
  	};

  	$scope.saveNewTodo = function(event){
  		var value = event.target.value;

  		if(value !== ''){
	  		$scope.todos.push({
  				name: event.target.value,
  				completed: false
  			});
  		}
  		$scope.addNewTodo = false;
		$scope.newValue = '';
  	};

  	$scope.newValue = '';
}]);
