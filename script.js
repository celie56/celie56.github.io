 function Ctrl($scope) {
   $scope.templates =
     [ { name: 'template1.html', url: 'pages/about.html'},
       { name: 'template2.html', url: 'template2.html'} ];
   $scope.template = $scope.templates[0];
 }