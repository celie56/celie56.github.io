// List.js 
var options = { valueNames: ['order', 'department', 'desc', 'num']};
var courses = new List('courses', options);

courses.sort('order', {order: 'asc'});
