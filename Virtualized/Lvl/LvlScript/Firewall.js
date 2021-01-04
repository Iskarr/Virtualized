validation = function() {
  var x = document.forms["myForm"]["userid"].value;

  if (x == "Instructions") {
  } else if (x == "The right code") {
    firewall_Check1();
  } else if (x == "rain") {
    showRain();
    hideFire();
    secretUnhide();
  } else if (x == "burnout") {
    hideFire();
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

function secretUnhide() {
  $("#secret").show(10);
}

function showRain() {
  $("#rain").show(400);
}

function hideFire() {
  $(".mo-fire").fadeOut(5200);
}

function sConsole(event) {
  event.preventDefault();
  var data = document.getElementById("CmdLine");
  console.log(data.value);
}

// Rain effect

var makeItRain = function() {
  //clear out everything
  $(".rain").empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    //random number between 5 and 2
    var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops +=
      '<div class="drop" style="left: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
    backDrops +=
      '<div class="drop" style="right: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
  }

  $(".rain.front-row").append(drops);
  $(".rain.back-row").append(backDrops);
};

$(".splat-toggle.toggle").on("click", function() {
  $("body").toggleClass("splat-toggle");
  $(".splat-toggle.toggle").toggleClass("active");
  makeItRain();
});

$(".back-row-toggle.toggle").on("click", function() {
  $("body").toggleClass("back-row-toggle");
  $(".back-row-toggle.toggle").toggleClass("active");
  makeItRain();
});

$(".single-toggle.toggle").on("click", function() {
  $("body").toggleClass("single-toggle");
  $(".single-toggle.toggle").toggleClass("active");
  makeItRain();
});

makeItRain();
