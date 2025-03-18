window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script193 = function()
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

window.Script194 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script195 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script196 = function()
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

window.Script197 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script198 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script199 = function()
{
  fetch('https://raw.githubusercontent.com/Richmelody/storyline/main/mobile/5m4WN0iXBBp.png')
  .then(response => response.blob())
  .then(blob => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = function () {
      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the badge image onto the canvas
      ctx.drawImage(img, 0, 0);

      // Get player's name from Storyline variable
      const player = GetPlayer();
      let userName = player.GetVar("UserName") || "YOUR NAME"; // Default if empty
      let upperCaseName = userName.toUpperCase(); // Capitalized text

      // **1. Solid Text at the Bottom**
      ctx.font = "bold 40px Arial";  
      ctx.fillStyle = "#422e19";  // Custom text color
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(upperCaseName, canvas.width / 2, canvas.height - 20); // Lowered position

      // **2. Semi-Transparent Watermark**
      ctx.font = "bold 60px Arial"; // Larger watermark font
      ctx.fillStyle = "rgba(66, 46, 25, 0.2)"; // Brown color, 20% opacity
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      // Rotate the text slightly for watermark effect
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2); // Center position
      ctx.rotate(-Math.PI / 6); // Rotate diagonally
      ctx.fillText(upperCaseName, 0, 0); // Draw watermark text
      ctx.restore();

      // Convert canvas to PNG and trigger download
      canvas.toBlob((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'My_Badge.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    };

    img.src = URL.createObjectURL(blob);
  })
  .catch(error => console.error('Download failed:', error));

}

window.Script200 = function()
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

window.Script201 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script202 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script203 = function()
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

window.Script204 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script205 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script206 = function()
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

window.Script207 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script208 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script209 = function()
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

window.Script210 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script211 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script212 = function()
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

window.Script213 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script214 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script215 = function()
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

window.Script216 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script217 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script218 = function()
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

window.Script219 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script220 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script221 = function()
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

window.Script222 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script223 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script224 = function()
{
  fetch('https://raw.githubusercontent.com/Richmelody/storyline/main/mobile/5hWkM5QlccI.png')
  .then(response => response.blob())
  .then(blob => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = function () {
      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the badge image onto the canvas
      ctx.drawImage(img, 0, 0);

      // Get player's name from Storyline variable
      const player = GetPlayer();
      let userName = player.GetVar("UserName") || "YOUR NAME"; // Default if empty
      let upperCaseName = userName.toUpperCase(); // Capitalized text

      // **1. Solid Text at the Bottom**
      ctx.font = "bold 40px Arial";  
      ctx.fillStyle = "#422e19";  // Custom text color
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(upperCaseName, canvas.width / 2, canvas.height - 20); // Bottom position

      // **2. Semi-Transparent Watermark**
      ctx.font = "bold 60px Arial"; // Larger watermark font
      ctx.fillStyle = "rgba(66, 46, 25, 0.2)"; // Brown color, 20% opacity
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      // Rotate the text slightly for watermark effect
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2); // Center position
      ctx.rotate(-Math.PI / 6); // Rotate diagonally
      ctx.fillText(upperCaseName, 0, 0); // Draw watermark text
      ctx.restore();

      // Convert canvas to PNG and trigger download
      canvas.toBlob((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'My_Badge.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    };

    img.src = URL.createObjectURL(blob);
  })
  .catch(error => console.error('Download failed:', error));

}

window.Script225 = function()
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

window.Script226 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script227 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script228 = function()
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

window.Script229 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script230 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script231 = function()
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

window.Script232 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script233 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script234 = function()
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

window.Script235 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script236 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script237 = function()
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

window.Script238 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script239 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script240 = function()
{
   fetch('https://raw.githubusercontent.com/Richmelody/storyline/main/mobile/5shXHv4HYCr.png')
  .then(response => response.blob())
  .then(blob => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = function () {
      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the badge image onto the canvas
      ctx.drawImage(img, 0, 0);

      // Get player's name from Storyline variable
      const player = GetPlayer();
      let userName = player.GetVar("UserName") || "YOUR NAME"; // Default if empty
      let upperCaseName = userName.toUpperCase(); // Capitalized text

      // **1. Solid Text at the Bottom**
      ctx.font = "bold 40px Arial";  
      ctx.fillStyle = "#422e19";  // Custom text color
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(upperCaseName, canvas.width / 2, canvas.height - 20); // Bottom position

      // **2. Semi-Transparent Watermark**
      ctx.font = "bold 60px Arial"; // Larger watermark font
      ctx.fillStyle = "rgba(66, 46, 25, 0.2)"; // Brown color, 20% opacity
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      // Rotate the text slightly for watermark effect
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2); // Center position
      ctx.rotate(-Math.PI / 6); // Rotate diagonally
      ctx.fillText(upperCaseName, 0, 0); // Draw watermark text
      ctx.restore();

      // Convert canvas to PNG and trigger download
      canvas.toBlob((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'My_Badge.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    };

    img.src = URL.createObjectURL(blob);
  })
  .catch(error => console.error('Download failed:', error));



}

};
