angular.module('gr.polymerBind', []).
directive('bindPolymerInput', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.bindPolymerInput, function(value) {
                element[0].inputValue = value;
            });
            element[0].addEventListener('input', function() {
                $parse(attrs.bindPolymerInput).assign(scope, element[0].inputValue);
                scope.$apply();
            });
        }
    };
}]).
directive('bindPolymerToggle', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.bindPolymerToggle, function(value) {
                element[0].ariaPressed = value;
            });
            element[0].addEventListener('change', function() {
                $parse(attrs.bindPolymerToggle).assign(scope, element[0].checked);
                scope.$apply();
            });
        }
    };
}]);