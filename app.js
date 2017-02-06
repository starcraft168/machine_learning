/*
Assumes this is a linear regression gradient descent algorithm

Assumes the input_array is a training sample with one feature (not including bias term) and y term,
ie, [[2104, 460], [1416,232], [1534, 315], [852,178]], where [x,y] = [house sq ft, house price]

h(x) = a0 + a1*x

Let alpha be the learning rate = 0.1
Let params = [-20,10], a random vector of parameters
Let input_array = [[2104, 460], [1416,232], [1534, 315], [852,178]]
Let m be the number of training samples


Goal is to continuously train the sample until the parameters converge.
*/

var gradientDescent = function(input_array, alpha, params, iterations) {
	var m = input_array.length;
	var a0 = params[0];
	var a1 = params[1];

	var j = 0;
	while(j < iterations) {
		var cost_a0 = 0;
		var cost_a1 = 0;

		//iterate through the training sample 
		for(var i=0; i<m; i++) {
			var xi = input_array[i][0];
			var yi = input_array[i][1];
			cost_a0 += (1/m)*(a0+a1*xi-yi)
			cost_a1 += (1/m)*(a0+a1*xi-yi)*xi
		}


		a0 = a0 - alpha*cost_a0;
		a1 = a1 - alpha*cost_a1;
		j++;
	}



	var results = [a0,a1];
	return results;

}
