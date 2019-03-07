var main = function(toDoObjects) {
    "use strict";
    var toDoObjects = [{
            "description": "Get groceries"
        },
        {
            "description": "Make up some new ToDos"
        },
        {
            "description": "Prep for Monday's class"
        },
        {
            "description": "Answer emails"
        },
        {
            "description": "Take Gracie to the park"
        },
        {
            "description": "Finish writing this book"
        }
    ];
    var toDos = toDoObjects.map(function(toDo) {
        // we'll just return the description
        // of this toDoObject
        return toDo.description;
    });
    $(".tabs a span").toArray().forEach(function(element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function() {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (i = toDos.length - 1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function(todo) {
                    $content.append($("<li>").text(todo));
                });

            } else if ($element.parent().is(":nth-child(3)")) {
                var $input = $("<input>").addClass("description"),
                    $inputLabel = $("<p>").text("Description: "),
                    $button = $("<button>").text("+");

                $button.on("click", function() {
                    var description = $input.val();

                    toDoObjects.push({ "description": description });

                    // update toDos
                    toDos = toDoObjects.map(function(toDo) {
                        return toDo.description;
                    });

                    $input.val("");
                });

                $content = $("<div>").append($inputLabel)
                    .append($input)
                    .append($button);
            }

            $("main .content").append($content);

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};
$(document).ready(main);