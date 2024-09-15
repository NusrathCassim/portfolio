// Function to handle toggling of menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Functions for popups
function handlePopup(openLinkId, popupContainerId) {
    const openPopupLink = document.getElementById(openLinkId);
    const popupContainer = document.getElementById(popupContainerId);
    const closePopupBtn = popupContainer.querySelector('.close-popup');

    // Open the popup when the link is clicked
    openPopupLink.addEventListener('click', (event) => {
        event.preventDefault();
        popupContainer.style.display = "flex";
    });

    // Close the popup when the close button is clicked
    closePopupBtn.addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });

    // Close the popup when clicking outside the popup content
    window.addEventListener('click', (event) => {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    });
}

// Initialize both popups
handlePopup('openEducation', 'popupEducation');
handlePopup('openLanguages', 'popupLanguages');
