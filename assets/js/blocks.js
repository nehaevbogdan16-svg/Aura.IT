document.addEventListener("DOMContentLoaded", () => {
    if (!window.ADS_CONFIG) return;

    const slots = document.querySelectorAll("[data-slot]");

    slots.forEach(slot => {
        const name = slot.getAttribute("data-slot");
        const ads = window.ADS_CONFIG.slots[name];

        if (!ads) return;

        ads.forEach(ad => {
            const el = document.createElement("a");
            el.href = ad.link;
            el.target = "_blank";
            el.className = "ad-card";

            if (ad.type === "banner") {
                el.innerHTML = `
          <img src="${ad.image}" alt="${ad.alt}" />
        `;
            }

            if (ad.type === "text") {
                el.innerHTML = `
          <h4>${ad.title}</h4>
          <p>${ad.text}</p>
        `;
            }

            slot.appendChild(el);
        });
    });
});