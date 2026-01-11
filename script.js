// Tabs

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");
const indicator = document.querySelector(".indicator");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));

        tab.classList.add("active");
        panels[index].classList.add("active");
        indicator.style.transform = `translateX(${index * 100}%)`;
    });
});

// Accordion

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {

        // Get the parent accordion item
        const item = header.parentElement;

        // Close other open items
        document.querySelectorAll(".accordion-item").forEach(i => {    // i represents each accordion item
            if (i !== item) i.classList.remove("active");
        });
 
        // 1st method to toggle : if else
            
        if (item.classList.contains("active")) {
            item.classList.remove("active"); // close
        } else {
            item.classList.add("active");    // open
        }

        // OR (2nd method : using toggle)
        
        // item.classList.toggle("active");
    });
});