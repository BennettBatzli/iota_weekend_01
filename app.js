$(document).ready(function() {
	var empArray = [0];

	$('#employeeForm').on('submit', function(event) {
		event.preventDefault();

		var values = {};

		$.each($('#employeeForm').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});

		$('#employeeForm').find('input[type=text]').val('');
		appendDom(values);
	});

	function appendDom(empInfo) {
		$('#container').append('<div><strong>Employee:</strong></div>');
		var $el = $('#container').children().last();

		var $cool = $('.totalSalaries h1');

		var sal = parseFloat(empInfo.empSalary);

		$el.append('<p>First Name: ' + empInfo.empFirstName + '</p>');
		$el.append('<p>Last Name: ' + empInfo.empLastName + '</p>');
		$el.append('<p>ID Number: ' + empInfo.empID + '</p>');
		$el.append('<p>Job Title: ' + empInfo.empJobTitle + '</p>');
		$el.append('<p>Salary: $' + sal + '</p>');
		
		$el.append('<button class="deleter">Delete Employee</button>');
		
		var calcTotalSal = function(value){
			empArray.push(value);
			var sum = 0;
			$.each(empArray, function(){sum+=parseFloat(this) || 0;});
			return sum;
		};

		var call = calcTotalSal(sal);
		
		$cool.replaceWith('<h1>Salary of All Employees: $' + call + '</h1>');
		$('.totalSalaries h2').replaceWith('<h2>Monthly Cost of Salaries: $' + (call / 12) + '</h2>');
	

		$('#container div').on('click', '.deleter', function(){
		   $(this).parent().remove();
		});	
	}
});