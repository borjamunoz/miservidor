var app = angular.module('myApp', []);

  app.controller('AlumnosController', function($scope) {
      $scope.alumnos=[
        {nombre:"Borja", apellidos:"Muñoz", telefono:"660924913"},
        {nombre:"Eider", apellidos:"Suarez", telefono:"652987456"},
        {nombre:"Aitor", apellidos:"Apellido", telefono:"623025458"},
    ];
        
    $scope.Save = function(){
        
        $scope.alumnos.push({
            nombre:$scope.nuevoAlumno.nombre,
            apellidos:$scope.nuevoAlumno.apellidos, 
            telefono:$scope.nuevoAlumno.telefono
        });
            
            $scope.formVisibility = false;

    }
    
    $scope.formVisibility = false;
    
    $scope.ShowForm=function(){
      
      $scope.formVisibility = true;
      
      console.log($scope.formVisibility)
    
      
    }
    
});


