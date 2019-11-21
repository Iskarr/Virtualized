// Delay input box at the bottom
// Snaps window to bottom after 20s
$(document).ready(function() {
  setTimeout(function() {
    $(displaynow(), bottomShow()).show();
  }, 20000);
});

// Runs the hacker code introduction
var printText = $(".text").data("text");
var contentArray = printText.split("/n");
$.each(contentArray, function(index, newLine) {
  $(".text").append('<span style="display:block;" id="' + index + '"></span>');

  var lineID = index;
  var self = $(this);
  setTimeout(function() {
    $.each(self, function(index, chunk) {
      setTimeout(function() {
        $("#" + lineID).append("<span>" + chunk + "</span>");
        $("body, html").scrollTop($(document).height());
      }, index * 5);
    });
  }, index * 100);
});

// Displays the input boxes immediately
function displaynow() {
  var x = document.getElementById("case");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Checks if the input matches request
validation = function() {
  var x = document.forms["myForm"]["userid"].value;
  var y = document.forms["myForm"]["password"].value;
  if (x == "Naomi" && y == "AAA") {
    window.location.href = "Lvl/Level1.htm";
  } else {
    alert("Wrong password");
  }
};

function toggleText() {
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function bottomShow() {
  window.scrollTo(0, document.body.scrollHeight);
}
