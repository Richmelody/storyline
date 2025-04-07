window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script195 = function()
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

window.Script196 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script197 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

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
  // ✅ SHOW POPUP WITH SPINNER
function showPopup(message, id = "custom-popup") {
  let popup = document.getElementById(id);

  if (!popup) {
    popup = document.createElement("div");
    popup.id = id;
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "white";
    popup.style.border = "2px solid #333";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
    popup.style.padding = "30px";
    popup.style.fontSize = "18px";
    popup.style.textAlign = "center";
    popup.style.zIndex = "9999";
    popup.style.minWidth = "220px";

    // Spinner
    const spinner = document.createElement("div");
    spinner.className = "spinner";
    spinner.style.width = "40px";
    spinner.style.height = "40px";
    spinner.style.border = "4px solid #ccc";
    spinner.style.borderTop = "4px solid #422e19";
    spinner.style.borderRadius = "50%";
    spinner.style.animation = "spin 1s linear infinite";
    spinner.style.margin = "0 auto 15px auto";

    // Message text
    const messageElem = document.createElement("div");
    messageElem.id = id + "-message";
    messageElem.textContent = message;

    popup.appendChild(spinner);
    popup.appendChild(messageElem);
    document.body.appendChild(popup);

    // Spinner animation CSS
    if (!document.getElementById("spinner-style")) {
      const style = document.createElement("style");
      style.id = "spinner-style";
      style.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  } else {
    const messageElem = document.getElementById(id + "-message");
    if (messageElem) messageElem.textContent = message;
    popup.style.display = "block";
  }
}

// ✅ HIDE POPUP
function hidePopup(id = "custom-popup") {
  const popup = document.getElementById(id);
  if (popup) popup.style.display = "none";
}

// ✅ DOWNLOAD BADGE WITH POPUP
function downloadBadgeWithPopup() {
  showPopup("Please wait... Preparing your badge");

  fetch('https://raw.githubusercontent.com/Richmelody/storyline/main/mobile/5m4WN0iXBBp.png')
    .then(response => response.blob())
    .then(blob => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const player = GetPlayer();
        let userName = player.GetVar("UserName") || "CHILD OF GOD"; // Default name
        let upperCaseName = userName.toUpperCase();

        // Bottom text
        ctx.font = "bold 40px Arial";
        ctx.fillStyle = "#422e19";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(upperCaseName, canvas.width / 2, canvas.height - 20);

        // Watermark
        ctx.font = "bold 60px Arial";
        ctx.fillStyle = "rgba(66, 46, 25, 0.2)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(-Math.PI / 6);
        ctx.fillText(upperCaseName, 0, 0);
        ctx.restore();

        canvas.toBlob((blob) => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'My_Badge.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          hidePopup();
        });
      };

      img.src = URL.createObjectURL(blob);
    })
    .catch(error => {
      console.error('Download failed:', error);
      showPopup("Oops! Something went wrong. Please try again.");
      setTimeout(() => hidePopup(), 4000); // Hide after 4 sec
    });
}

// ✅ Call this function to trigger everything
downloadBadgeWithPopup();

}

window.Script202 = function()
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

window.Script203 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script204 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script205 = function()
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

window.Script206 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script207 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script208 = function()
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

window.Script209 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script210 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script211 = function()
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

window.Script212 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script213 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script214 = function()
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

window.Script215 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script216 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script217 = function()
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

window.Script218 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script219 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script220 = function()
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

window.Script221 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script222 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

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
  // ✅ SHOW POPUP WITH SPINNER
function showPopup(message, id = "custom-popup") {
  let popup = document.getElementById(id);

  if (!popup) {
    popup = document.createElement("div");
    popup.id = id;
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "white";
    popup.style.border = "2px solid #333";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
    popup.style.padding = "30px";
    popup.style.fontSize = "18px";
    popup.style.textAlign = "center";
    popup.style.zIndex = "9999";
    popup.style.minWidth = "220px";

    // Spinner
    const spinner = document.createElement("div");
    spinner.className = "spinner";
    spinner.style.width = "40px";
    spinner.style.height = "40px";
    spinner.style.border = "4px solid #ccc";
    spinner.style.borderTop = "4px solid #422e19";
    spinner.style.borderRadius = "50%";
    spinner.style.animation = "spin 1s linear infinite";
    spinner.style.margin = "0 auto 15px auto";

    // Message
    const messageElem = document.createElement("div");
    messageElem.id = id + "-message";
    messageElem.textContent = message;

    popup.appendChild(spinner);
    popup.appendChild(messageElem);
    document.body.appendChild(popup);

    // Spinner CSS if not already added
    if (!document.getElementById("spinner-style")) {
      const style = document.createElement("style");
      style.id = "spinner-style";
      style.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  } else {
    document.getElementById(id + "-message").textContent = message;
    popup.style.display = "block";
  }
}

// ✅ HIDE POPUP
function hidePopup(id = "custom-popup") {
  const popup = document.getElementById(id);
  if (popup) popup.style.display = "none";
}

// ✅ DOWNLOAD BADGE WITH POPUP AND NAME VALIDATION
function downloadBadgeWithPopup() {
  showPopup("Please wait... Preparing your badge");

  const player = GetPlayer();
  let userName = player.GetVar("UserName") || "";
  let upperCaseName = userName.trim().toUpperCase() || "CHILD OF GOD";

  

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

        // Bottom Text
        ctx.font = "bold 40px Arial";  
        ctx.fillStyle = "#422e19";  
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(upperCaseName, canvas.width / 2, canvas.height - 20); // Bottom position

        // Watermark
        ctx.font = "bold 60px Arial"; 
        ctx.fillStyle = "rgba(66, 46, 25, 0.2)"; 
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2); 
        ctx.rotate(-Math.PI / 6); 
        ctx.fillText(upperCaseName, 0, 0);
        ctx.restore();

        // Convert canvas to PNG and trigger download
        canvas.toBlob((blob) => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'My_Badge.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          hidePopup(); // Hide popup after download
        });
      };

      img.src = URL.createObjectURL(blob);
    })
    .catch(error => {
      console.error('Download failed:', error);
      showPopup("Oops! Something went wrong. Please try again.");
      setTimeout(() => hidePopup(), 4000); // Hide after 4 sec
    });
}

// ✅ CALL THIS FUNCTION TO TRIGGER THE DOWNLOAD WITH POPUP
downloadBadgeWithPopup();

}

window.Script227 = function()
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

window.Script228 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script229 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script230 = function()
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

window.Script231 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script232 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script233 = function()
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

window.Script234 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script235 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script236 = function()
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

window.Script237 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script238 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script239 = function()
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

window.Script240 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script241 = function()
{
  window.controlTimer(false); // Stops the countdown when Submit is clicked

}

window.Script242 = function()
{
  // ✅ SHOW POPUP WITH SPINNER
function showPopup(message, id = "custom-popup") {
  let popup = document.getElementById(id);

  if (!popup) {
    popup = document.createElement("div");
    popup.id = id;
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "white";
    popup.style.border = "2px solid #333";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
    popup.style.padding = "30px";
    popup.style.fontSize = "18px";
    popup.style.textAlign = "center";
    popup.style.zIndex = "9999";
    popup.style.minWidth = "220px";

    // Spinner
    const spinner = document.createElement("div");
    spinner.className = "spinner";
    spinner.style.width = "40px";
    spinner.style.height = "40px";
    spinner.style.border = "4px solid #ccc";
    spinner.style.borderTop = "4px solid #422e19";
    spinner.style.borderRadius = "50%";
    spinner.style.animation = "spin 1s linear infinite";
    spinner.style.margin = "0 auto 15px auto";

    // Message
    const messageElem = document.createElement("div");
    messageElem.id = id + "-message";
    messageElem.textContent = message;

    popup.appendChild(spinner);
    popup.appendChild(messageElem);
    document.body.appendChild(popup);

    // Spinner CSS if not already added
    if (!document.getElementById("spinner-style")) {
      const style = document.createElement("style");
      style.id = "spinner-style";
      style.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  } else {
    document.getElementById(id + "-message").textContent = message;
    popup.style.display = "block";
  }
}

// ✅ HIDE POPUP
function hidePopup(id = "custom-popup") {
  const popup = document.getElementById(id);
  if (popup) popup.style.display = "none";
}

// ✅ DOWNLOAD BADGE WITH POPUP AND NAME VALIDATION
function downloadBadgeWithPopup() {
  showPopup("Please wait... Preparing your badge");

  const player = GetPlayer();
  let userName = player.GetVar("UserName") || "";
  let upperCaseName = userName.trim().toUpperCase() || "CHILD OF GOD";

 

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

        // Bottom Text
        ctx.font = "bold 40px Arial";  
        ctx.fillStyle = "#422e19";  
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(upperCaseName, canvas.width / 2, canvas.height - 20); // Bottom position

        // Watermark
        ctx.font = "bold 60px Arial"; 
        ctx.fillStyle = "rgba(66, 46, 25, 0.2)"; 
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2); 
        ctx.rotate(-Math.PI / 6); 
        ctx.fillText(upperCaseName, 0, 0);
        ctx.restore();

        // Convert canvas to PNG and trigger download
        canvas.toBlob((blob) => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'My_Badge.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          hidePopup(); // Hide popup after download
        });
      };

      img.src = URL.createObjectURL(blob);
    })
    .catch(error => {
      console.error('Download failed:', error);
      showPopup("Oops! Something went wrong. Please try again.");
      setTimeout(() => hidePopup(), 4000); // Hide after 4 sec
    });
}

// ✅ CALL THIS FUNCTION TO TRIGGER THE DOWNLOAD WITH POPUP
downloadBadgeWithPopup();

}

};
