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

firewall_Check1 = function() {
  x = prompt("Type in the pass code: ");
  if (x === "Joyner") {
    window.location.href = "Level2.htm";
  } else if (x === "CSS IS AWESOME") {
    window.location.href = "Level3.htm";
  } else if (x === "Java different from Javascript") {
    window.location.href = "Level4.htm";
  } else if (x === "break the fourth wall") {
    window.location.href = "Firewall.htm";
  } else if (x === "10.10.10.10") {
    window.location.href = "Vault.htm";
  } else {
    alert("Wrong Code!");
  }
};

validation = function() {
  var x = document.forms["myForm"]["userid"].value;

  if (x == "Intro") {
    window.location.href = "../Room_intro.htm";
  } else if (x == "HTML") {
    window.location.href = "Level2.htm";
    resetInput();
  } else if (x == "CSS") {
    firewall_Check1();
  } else if (x == "Error 405") {
    firewall_Check1();
  } else if (x == "Error 504") {
    firewall_Check1();
  } else if (x == "Error 404") {
    firewall_Check1();
  } else if (x == "help") {
    // Print out Help commands
    HelpCode();
    bottomShow();
  } else {
    bottomShow();
    something();
    wrongCode();
  }
};

function bottomShow() {
  window.scrollTo(0, document.body.scrollHeight);
}

var HelpCode = (function() {
  var Run = false;
  return function() {
    if (!Run) {
      Run = true;
      $("#CmdLine").before(
        "<p>Important Note: Once you enter a room, you cannot leave till you complete the puzzle!",
        "<p>Commands: Room + #1-6 to load another room.</p>",
        "<p>unlock firewall rooms using codes from another room, type in correct code.</p>",
        "<p>Remember to save phase code to complete firewall password.</p>"
      );
    }
  };
})();

var something = (function() {
  var executed = false;
  return function() {
    if (!executed) {
      executed = true;
      $("#CmdLine").before("<p id='error'>Invalid Code!</p>");
    }
  };
})();

function wrongCode() {
  $("#CmdLine").addClass("error");
  setTimeout(function() {
    $("#CmdLine").removeClass("error");
  }, 500);
}

$("form").submit(function(e) {
  e.preventDefault();
});

$("form input").on("", function() {
  $("#CmdLine").addClass("error");
  setTimeout(function() {
    $("#CmdLine").removeClass("error");
  }, 500);
});
