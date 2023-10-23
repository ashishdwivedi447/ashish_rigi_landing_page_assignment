function switchSection(event, sectionName) {
  // Hide all sections
  let sections = document.getElementsByClassName("section-container");
  console.log(sections, "sDMBNsd");
  for (let d = 0; d < sections.length; d++) {
    sections[d].style.display = "none";
  }

  // Update tab styles
  let tabs = document.getElementsByClassName("tabs");
  for (let d = 0; d < tabs.length; d++) {
    tabs[d].classList.remove("wred");
    tabs[d].classList.add("wblue");
  }

  // Update the selected tab style
  event.currentTarget.classList.remove("wblue");
  event.currentTarget.classList.add("wred");

  // Display the selected section
  const mediaQuery = window.matchMedia("(min-width: 650px)");
  const selectedSection = document.getElementById(sectionName);
  selectedSection.style.display = mediaQuery.matches ? "flex" : "block";
}
