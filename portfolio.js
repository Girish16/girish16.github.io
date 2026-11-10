const caseLinks = document.querySelectorAll(".map-stop");

function openCaseStudy(fragment) {
  if (!fragment.startsWith("#case-")) return;
  const card = document.getElementById(fragment.slice(1));
  const disclosure = card?.querySelector(".case-detail");
  if (disclosure) disclosure.open = true;
}

for (const link of caseLinks) {
  link.addEventListener("click", () => openCaseStudy(link.getAttribute("href")));
}
window.addEventListener("hashchange", () => openCaseStudy(location.hash));
openCaseStudy(location.hash);
