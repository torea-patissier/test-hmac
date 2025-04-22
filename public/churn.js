(function () {
    // Auto-detect l'URL de base via data attribute
    const scriptTag = document.currentScript;
    const baseUrl = scriptTag.getAttribute("data-app-url");
  
    if (!baseUrl) {
      console.error("Churn.js — Erreur : data-app-url manquant");
      return;
    }
  
    window.Churn = {
      showCancelFlow: function () {
        if (document.getElementById("churn-popup-iframe")) return;

        const iframe = document.createElement("iframe");
        iframe.src = `${baseUrl}/popup`;
        iframe.allowTransparency = "true"; // 👈 nécessaire sur certains navigateurs
        iframe.id = "churn-popup-iframe";
        iframe.style.position = "fixed";
        iframe.style.top = "50%";
        iframe.style.left = "50%";
        iframe.style.transform = "translate(-50%, -50%)";
        iframe.style.width = "500px";
        iframe.style.height = "400px";
        iframe.style.border = "none";
        iframe.style.borderRadius = "8px";
        iframe.style.backgroundColor = "white";
        iframe.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        iframe.style.zIndex = "9999";
        document.body.appendChild(iframe);

        // Listen for message from iframe to close
        window.addEventListener('message', function(event) {
          // Check if message is from our popup iframe
          if (event.source === document.getElementById("churn-popup-iframe").contentWindow) {
            // TODO: Need to implement closeChurnPopup message from the popup iframe
            if (event.data === 'closeChurnPopup') {
              const popup = document.getElementById("churn-popup-iframe");
              if (popup) {
                document.body.removeChild(popup);
              }
            }
          }
        });
      }
    };
  })();