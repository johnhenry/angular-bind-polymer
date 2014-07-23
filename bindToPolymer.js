var module = angular.module("BindToPolymer", []);
var tags = {
    "CORE-INPUT" : {
        event:"input",
        set:"inputValue",
        get:"inputValue"
    },
    "PAPER-INPUT" : {
        event:"input",
        set:"inputValue",
        get:"inputValue"
    },
    "PAPER-TOGGLE-BUTTON" : {
        event:"change",
        set:"ariaPressed",
        get:"checked"
    },
    "PAPER-CHECKBOX" : {
        event:"change",
        set:"ariaPressed",
        get:"checked"
    },
    "PAPER-RADIO-BUTTON" : {
        event:"change",
        set:"ariaPressed",
        get:"checked"
    },
    "PAPER-SLIDER" : {
        event:"change",
        set:"value",
        get:"value"
    }
}
var ngBindToPolymer = function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var tag = tags[element.get(0).tagName] || {};
            var set = attrs.ngBindToPolymerSet || tag.set;
            var get = attrs.ngBindToPolymerGet || tag.get;
            var event = attrs.ngBindToPolymerEvent || tag.event;
            scope.$watch(attrs.ngBindToPolymer, function(value) {
                element.get(0)[set] = value;
            });
            element.get(0).addEventListener(event, function() {
                $parse(attrs.ngBindToPolymer).assign(scope, element.get(0)[get]);
                scope.$apply();
            });
        }
    };
};
ngBindToPolymer.$inject = ["$parse"];
module.directive("ngBindToPolymer", ngBindToPolymer);
