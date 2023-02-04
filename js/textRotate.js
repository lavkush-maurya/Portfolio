/*
██╗  ██╗███████╗██╗     ██╗      ██████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
███████║█████╗  ██║     ██║     ██║   ██║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝      ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝

Greetings !

if (employer) {
  yes, I'm always looking for great opportunities;
}
else if (want a website) {
  ping me ! lets discuss how will I help you;
}
else if (geek) {
  hi, I love to be friends with like minded people.
  Message me, maybe we could help each other.
}
else {
  goto: www.linkedin.com/in/lavkushmaurya04
}
________________________________________________________________________________________

When I wrote this code, only God and I understood what I was doing
Now, God only knows

If you don't like anything on this website, bite me !
________________________________________________________________________________________

No copyright issues.
Feel free to copy anything and everything from this website.
If you need any help, ping me !
________________________________________________________________________________________

Cheers,
Lavkush Maurya
mailto: lavkushmaurya147@gmail.com
________________________________________________________________________________________

I sincerely admit ! Not everything thing you saw on the website was developed by me from
scratch, most of it is my original creation otherwise some of the elements are inspired
or reproduced from the open source public code.

SSSssshhhhh!! The code starts below */
// ######################################################
var theForm = document.getElementById('theForm');
new stepsForm(theForm, {
  onSubmit: function (form) {
    // hide form
    classie.addClass(theForm.querySelector('.simform-inner'), 'hide');
    //console.log("Submitted Request");
    var link = "https://docs.google.com/forms/d/e/1FAIpQLSck34zvB-6801IhELZLrxf6vp2_6eoTv9SD_XAmv7Py0grOBQ/formResponse";
    jQuery.ajax({
      url: link,
      data: { "entry.2005620554": $("#q2").val(), "entry.1045781291": $("#q3").val(), "entry.1065046570": $("#q1").val() },
      type: "POST",
      dataType: "xml",
      crossDomain: true,
      statusCode: {
        0: function () {
          // console.log("response 0");
        },
        200: function () {
          // console.log("response 200");
        }
      }
    });
    // let's just simulate something...
    var messageEl = theForm.querySelector('.final-message');
    messageEl.innerHTML = 'Thank you! I\'ll contact you shortly.';
    classie.addClass(messageEl, 'show');
  }
});
// ###########################################################
$(document).ready(function () {
  numberAnimations();
  function numberAnimations() {
    $(window).scroll(function () {
      if ($(".numbers-wrapper").is(":visible") == true) {
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(" ");
        $("#coded-lines").animateNumber({ number: 100000, numberStep: comma_separator_number_step }, 2000);
        $("#rendered-pixels").animateNumber({ number: 201783509, numberStep: comma_separator_number_step }, 2000);
        $("#coffee-cups").animateNumber({ number: 1512, numberStep: comma_separator_number_step }, 2000);
        $("#eaten-nutela").animateNumber({ number: 16, numberStep: comma_separator_number_step }, 2000);
        $(window).off('scroll');
      }
    });
  } //end numberAnimations
});//end document ready
function changeImage() {
  $(".downloadCV").html("<p>Download my Resume</p><img src='img/dwnld.gif'>");
  // window.open("https://docs.google.com/uc?authuser=0&id=0BzUOptk4o8-NY0xOVnBKOTBDdm8&export=download","_blank");
  $(".resume").addClass("downloaded");
  $(".downloaded").removeClass("resume");
}
// ###################################################################
var skills = [
  {
    "header": "INTERESTS",
    "captions": [
      "Digital Marketing",
      "Web",
      "PWAs",
      "Design",
      "SEO"
    ],
    "values": [
      0.80,
      0.90,
      0.70,
      0.80,
      0.90
    ]
  },
  {
    "header": "CORE",
    "captions": [
      "CSS",
      "AJAX",
      "HTML",
      "jQuery",
      "JS"
    ],
    "values": [
      0.90,
      0.70,
      0.95,
      0.70,
      0.80
    ]
  },
  {
    "header": "Mordern Web",
    "captions": [
      "Vue",
      "SolidJs",
      "React",
      "Angular",
      "Flutter"
    ],
    "values": [
      0.70,
      0.75,
      0.90,
      0.75,
      0.60
    ]
  }
];

var pentagonIndex = 0;
var valueIndex = 0;
var width = 0;
var height = 0;
var radOffset = Math.PI / 2
var sides = 5; // Number of sides in the polygon
var theta = 2 * Math.PI / sides; // radians per section

function getXY(i, radius) {
  return {
    "x": Math.cos(radOffset + theta * i) * radius * width + width / 2,
    "y": Math.sin(radOffset + theta * i) * radius * height + height / 2
  };
}

var hue = [];
var hueOffset = 25;

for (var s in skills) {
  $(".skills").append('<div class="pentagon" id="interests"><div class="header"></div><canvas class="pentCanvas"/></div>');
  hue[s] = (hueOffset + s * 255 / skills.length) % 255;
}

$(".pentagon").each(function (index) {
  width = $(this).width();
  height = $(this).height();
  var ctx = $(this).find('canvas')[0].getContext('2d');
  ctx.canvas.width = width;
  ctx.canvas.height = height;
  ctx.font = "15px Monospace";
  ctx.textAlign = "center";

  /*** LABEL ***/
  color = "hsl(" + hue[pentagonIndex] + ", 100%, 30%)";
  ctx.fillStyle = color;
  ctx.fillText(skills[pentagonIndex].header, width / 2, 15);
  ctx.font = "13px Monospace";

  /*** PENTAGON BACKGROUND ***/
  for (var i = 0; i < sides; i++) {
    // For each side, draw two segments: the side, and the radius
    ctx.beginPath();
    xy = getXY(i, 0.3);
    colorJitter = 25 + theta * i * 2;
    color = "hsl(" + hue[pentagonIndex] + ",100%," + colorJitter + "%)";
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.moveTo(0.5 * width, 0.5 * height); //center
    ctx.lineTo(xy.x, xy.y);
    xy = getXY(i + 1, 0.3);
    ctx.lineTo(xy.x, xy.y);
    xy = getXY(i, 0.37);
    console.log();
    ctx.fillText(skills[pentagonIndex].captions[valueIndex], xy.x, xy.y + 5);
    valueIndex++;
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  valueIndex = 0;
  ctx.beginPath();
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
  ctx.lineWidth = 5;
  var value = skills[pentagonIndex].values[valueIndex];
  xy = getXY(i, value * 0.3);
  ctx.moveTo(xy.x, xy.y);
  /*** SKILL GRAPH ***/
  for (var i = 0; i < sides; i++) {
    xy = getXY(i, value * 0.3);
    ctx.lineTo(xy.x, xy.y);
    valueIndex++;
    value = skills[pentagonIndex].values[valueIndex];
  }
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  valueIndex = 0;
  pentagonIndex++;
});



jQuery(document).ready(function ($) {
  //set animation timing
  var animationDelay = 2500,
    //loading bar effect
    barAnimationDelay = 3800,
    barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
    //letters effect
    lettersDelay = 50,
    //type effect
    typeLettersDelay = 150,
    selectionDuration = 500,
    typeAnimationDelay = selectionDuration + 800,
    //clip effect
    revealDuration = 600,
    revealAnimationDelay = 1500;
  initHeadline();
  function initHeadline() {
    //insert <i> element for each letter of a changing word
    singleLetters($('.cd-headline.letters').find('b'));
    //initialise headline animation
    animateHeadline($('.cd-headline'));
  }
  function singleLetters($words) {
    $words.each(function () {
      var word = $(this),
        letters = word.text().split(''),
        selected = word.hasClass('is-visible');
      for (i in letters) {
        if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
        letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
      }
      var newLetters = letters.join('');
      word.html(newLetters).css('opacity', 1);
    });
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function () {
      var headline = $(this);

      if (headline.hasClass('loading-bar')) {
        duration = barAnimationDelay;
        setTimeout(function () { headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
      } else if (headline.hasClass('clip')) {
        var spanWrapper = headline.find('.cd-words-wrapper'),
          newWidth = spanWrapper.width() + 10
        spanWrapper.css('width', newWidth);
      } else if (!headline.hasClass('type')) {
        //assign to .cd-words-wrapper the width of its longest word
        var words = headline.find('.cd-words-wrapper b'),
          width = 0;
        words.each(function () {
          var wordWidth = $(this).width();
          if (wordWidth > width) width = wordWidth;
        });
        headline.find('.cd-words-wrapper').css('width', width);
      };

      //trigger animation
      setTimeout(function () { hideWord(headline.find('.is-visible').eq(0)) }, duration);
    });
  }

  function hideWord($word) {
    var nextWord = takeNext($word);

    if ($word.parents('.cd-headline').hasClass('type')) {
      var parentSpan = $word.parent('.cd-words-wrapper');
      parentSpan.addClass('selected').removeClass('waiting');
      setTimeout(function () {
        parentSpan.removeClass('selected');
        $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
      }, selectionDuration);
      setTimeout(function () { showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

    } else if ($word.parents('.cd-headline').hasClass('letters')) {
      var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
      hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
      showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

    } else if ($word.parents('.cd-headline').hasClass('clip')) {
      $word.parents('.cd-words-wrapper').animate({ width: '2px' }, revealDuration, function () {
        switchWord($word, nextWord);
        showWord(nextWord);
      });

    } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
      $word.parents('.cd-words-wrapper').removeClass('is-loading');
      switchWord($word, nextWord);
      setTimeout(function () { hideWord(nextWord) }, barAnimationDelay);
      setTimeout(function () { $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

    } else {
      switchWord($word, nextWord);
      setTimeout(function () { hideWord(nextWord) }, animationDelay);
    }
  }

  function showWord($word, $duration) {
    if ($word.parents('.cd-headline').hasClass('type')) {
      showLetter($word.find('i').eq(0), $word, false, $duration);
      $word.addClass('is-visible').removeClass('is-hidden');

    } else if ($word.parents('.cd-headline').hasClass('clip')) {
      $word.parents('.cd-words-wrapper').animate({ 'width': $word.width() + 10 }, revealDuration, function () {
        setTimeout(function () { hideWord($word) }, revealAnimationDelay);
      });
    }
  }

  function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass('in').addClass('out');

    if (!$letter.is(':last-child')) {
      setTimeout(function () { hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
    } else if ($bool) {
      setTimeout(function () { hideWord(takeNext($word)) }, animationDelay);
    }

    if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
      var nextWord = takeNext($word);
      switchWord($word, nextWord);
    }
  }

  function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass('in').removeClass('out');

    if (!$letter.is(':last-child')) {
      setTimeout(function () { showLetter($letter.next(), $word, $bool, $duration); }, $duration);
    } else {
      if ($word.parents('.cd-headline').hasClass('type')) { setTimeout(function () { $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200); }
      if (!$bool) { setTimeout(function () { hideWord($word) }, animationDelay) }
    }
  }

  function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
  }

  function takePrev($word) {
    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
  }
});
