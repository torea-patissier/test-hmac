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
        iframe.style = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          max-width: 90%;
          height: auto;
          min-height: 300px;
          max-height: 90vh;
          border: none;
          border-radius: 8px;
          background: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 9999;
        `;
        document.body.appendChild(iframe);
      }
    };
  })();