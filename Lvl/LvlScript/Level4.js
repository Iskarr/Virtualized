validation = function() {
  var x = document.forms["myForm"]["userid"].value;

  if (x == "Instructions") {
  } else if (x == "The right code") {
    firewall_Check1();
  } else if (x == "func") {
    functionCode();
  } else if (x == "output") {
    ShowOutput();
    secretUnhide();
  } else if (x == "cheat") {
    colorText();
    secretUnhide();
  } else if (x == "back") {
    window.location.href = "Level1.htm";
  } else if (x == "hintme") {
    Hintme();
    bottomShow();
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

var Hint = (function() {
  var Run = false;
  return function() {
    if (!Run) {
      Run = true;
      $("#CmdLine").before(
        "<p>Important Note: Once you enter a room, you cannot leave till you complete the puzzle!",
        "<p>Find a way to open the console in your web browser.</p>",
        "<p>Once you open the console, look for the CSS attached to each box.</p>",
        "<p> border: if you want to skip this step, try not to use cheat.</p>"
      );
    }
  };
})();

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

// Puzzle stuff

var functionCode = (function() {
  var Run = false;
  return function() {
    if (!Run) {
      Run = true;
      $("#javaBox").after(
        "<script>function math(number){return number * number}</script>",
        "<p>Next Step: Now open the developer tools and go into the console and type math(#) with the # representing the number you want to multiply by its self.</p>",
        "<p>Once you can confirm it is working, build a similiar function to show a hidden output box that allows you to see what you type into the terminal.</p>"
      );
    }
  };
})();

var runMath = (function() {
  var Run = false;
  return function() {
    if (!Run) {
      Run = true;
      $("#javaBox").after("math(value)");
    }
  };
})();

function secretUnhide() {
  $("#secret").show();
}

function ShowOutput() {
  $("#dataOut").show();
}

function sConsole(event) {
  event.preventDefault();
  var data = document.getElementById("CmdLine");
  console.log(data.value);
}
