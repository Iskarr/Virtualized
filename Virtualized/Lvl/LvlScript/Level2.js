// firewall_Check1 = function() {
//   x = prompt("Type in the pass code: ");
//   if (x === "Joyner") {
//     window.location.href = "Level2.htm";
//   } else if (x === "Tech9") {
//     window.location.href = "Level3.htm";
//   } else if (x === "Eminem") {
//     window.location.href = "Level4.htm";
//   } else if (x === "Post") {
//     window.location.href = "Level5.htm";
//   } else if (x === "Tom") {
//     window.location.href = "Firewall.htm";
//   } else if (x === "Logic") {
//     window.location.href = "Vault.htm";
//   } else {
//     alert("Wrong Code!");
//   }
// };

validation = function () {
  var x = document.forms["myForm"]["userid"].value;

  if (x == "Instructions") {
  } else if (x == "The right code") {
    firewall_Check1();
    resetInput();
  } else if (x == "code here") {
    MakeBox();
  } else if (x == "more code") {
    ColorBox();
    isReal();
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

var Hintme = (function () {
  var Run = false;
  return function () {
    if (!Run) {
      Run = true;
      $("#CmdLine").before(
        "<p>Important Note: Once you enter a room, you cannot leave till you complete the puzzle!",
        "<p>Divs allow you to create containers to hold items in.</p>",
        "<p> <div></div> </p>",
        "<p> border: 1px solid blue</p>"
      );
    }
  };
})();

var HelpCode = (function () {
  var Run = false;
  return function () {
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

var something = (function () {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;
      $("#CmdLine").before("<p id='error'>Invalid Code!</p>");
    }
  };
})();

function wrongCode() {
  $("#CmdLine").addClass("error");
  setTimeout(function () {
    $("#CmdLine").removeClass("error");
  }, 500);
}

$("form").submit(function (e) {
  e.preventDefault();
});

$("form input").on("", function () {
  $("#CmdLine").addClass("error");
  setTimeout(function () {
    $("#CmdLine").removeClass("error");
  }, 500);
});

// Puzzle stuff

var MakeBox = (function () {
  var Run = false;
  return function () {
    if (!Run) {
      Run = true;
      $("#I2").after("<div id='boxie'><p>This has a div init</p></div>");
    }
  };
})();

var ColorBox = (function () {
  var Run = false;
  return function () {
    if (!Run) {
      Run = true;
      $("#boxie").css({ border: "1px solid blue" });
    }
  };
})();

function isReal() {
  if ($("#boxie").length > 0) {
    // show hidden box with secret in it.
  }
}

function secretUnhide() {
  $("#secret").show();
}
