$(function () {
    $(".devour-button").on("click", function(event){
        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(() => {
            location.reload();
        })
    })

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        $.ajax("/api/burgers", {
            type: "POST",
            data: {name: $("#create-burger").val().trim()}
        }).then(() => {
            location.reload();
        })
    })
});