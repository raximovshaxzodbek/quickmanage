import "./css/style.css";

const dropDownAll = document.querySelectorAll<HTMLDivElement>(".drop__down");
dropDownAll.forEach((dropDown) => {
  const listGroup = dropDown.parentElement?.children[1];
  dropDown.addEventListener("click", () => {
    dropDown.querySelector(".sort__icon")?.classList.toggle("active");
    listGroup?.classList.toggle("active-link-group");
  });
});

const sidebarTogglerIcon = document.querySelector<HTMLButtonElement>(
  "[sidebar-toggler-icon]"
);
sidebarTogglerIcon?.addEventListener("click", () => {
  document
    .querySelector<HTMLDivElement>(".sidebar__menu")
    ?.classList.toggle("remove-side-bar");
  document
    .querySelector<HTMLDivElement>("[content-box]")
    ?.classList.toggle("left");
});
