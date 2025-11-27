$(function () {
  $(".accordion-header").on("click", function () {
    const content = $(this).next(".accordion-content");
    $(".accordion-content").not(content).slideUp();
    content.slideToggle();
  });

  $("button").on("click", function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      method: "GET",
      success: function (data) {
        const todos = data.todos;
        const ul = $("ul");
        ul.empty();

        todos.forEach((item) => {
          ul.append(`<li>${item.todo}</li>`);
        });
      },
      error: function () {
        alert("Failed");
      },
    });
  });
});
