/*
Assumes this is a linear regression gradient descent function

Assumes the input_array is a training sample with one feature (not including bias term) and y term,
ie, [[2104, 460], [1416,232], [1534, 315], [852,178]], where [x,y] = [house sq ft, house price]

h(x) = a0 + a1*x

Let alpha be the learning rate = 0.1
Let params = [-20,10], a random vector of parameters
Let input_array = [[2104, 460], [1416,232], [1534, 315], [852,178]]
Let m be the number of training samples


Goal is to continuously train the sample until the parameters converge.
*/

var gradientDescent = function(input_array, alpha, params) {
	var m = input_array.length;
	var a0 = params[0];
	var a1 = params[1];

}