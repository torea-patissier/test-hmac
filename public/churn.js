(function () {
    // Auto-detect l’URL de base via data attribute
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
        iframe.style = `
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          border: none;
          z-index: 9999;
        `;
        document.body.appendChild(iframe);
      }
    };
  })();
  