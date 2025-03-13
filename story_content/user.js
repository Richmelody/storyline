window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script191 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script192 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script193 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script194 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script195 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script196 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script197 = function()
{
  fetch('https://raw.githubusercontent.com/Richmelody/storyline/main/mobile/5m4WN0iXBBp.png')
  .then(response => response.blob())
  .then(blob => {
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'My_Badge.png';  // The downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  })
  .catch(error => console.error('Download failed:', error));


}

window.Script198 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script199 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script200 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script201 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script202 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script203 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script204 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script205 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script206 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script207 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script208 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script209 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script210 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script211 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script212 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script213 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script214 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script215 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script216 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script217 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script218 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script219 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script220 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script221 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script222 = function()
{
  fetch('https://raw.githubusercontent.com/Richmelody/storyline/main/mobile/5hWkM5QlccI.png')
  .then(response => response.blob())
  .then(blob => {
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'My_Badge.png';  // The downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  })
  .catch(error => console.error('Download failed:', error));


}

window.Script223 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script224 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script225 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script226 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script227 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script228 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script229 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script230 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script231 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script232 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script233 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script234 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script235 = function()
{
  window.controlTimer = function(start) {
    var player = GetPlayer();
    
    if (start) {
        var timeLeft = player.GetVar("Timer");
        
        function countdown() {
            if (timeLeft >= -1) {
                var formattedTime = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                player.SetVar("Timer", formattedTime);
                timeLeft--;
                window.countdownTimer = setTimeout(countdown, 1000);
            }
        }
        countdown();
    } else {
        clearTimeout(window.countdownTimer); // Stops the countdown
    }
};
window.controlTimer(true); // Starts the timer when timeline reaches X seconds

}

window.Script236 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script237 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script238 = function()
{
  fetch('https://raw.githubusercontent.com/Richmelody/storyline/main/mobile/5shXHv4HYCr.png')
  .then(response => response.blob())
  .then(blob => {
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'My_Badge.png';  // The downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  })
  .catch(error => console.error('Download failed:', error));


}

};
