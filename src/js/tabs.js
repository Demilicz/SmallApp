const tab1 = document.querySelector('.heading__link_heart');
const tab2 = document.querySelector('.heading__link_bag');
const tab3 = document.querySelector('.heading__link_leaf');
const tab4 = document.querySelector('.heading__link_window');
const tab5 = document.querySelector('.heading__link_umbrela');

const blocksList = document.querySelectorAll('.heading__block');
const tabsList = document.querySelectorAll('.heading__link');

tab1.addEventListener('click', () => {
  tabsHandler(tabsList, blocksList, "_heart", "heading__link_heart")
});
tab2.addEventListener('click', () => {
  tabsHandler(tabsList, blocksList, "_bag", "heading__link_bag")
});
tab3.addEventListener('click', () => {
  tabsHandler(tabsList, blocksList, "_leaf", "heading__link_leaf")
});
tab4.addEventListener('click', () => {
  tabsHandler(tabsList, blocksList, "_window", "heading__link_window")
});
tab5.addEventListener('click', () => {
  tabsHandler(tabsList, blocksList, "_umbrela", "heading__link_umbrela")
});

function tabsHandler (tabs, blocks, blockClass, tabClass) {
  tabs.forEach(tab => {
    if(tab.classList.contains(tabClass)){
      tab.classList.add('_active-tab');
    }
    else
      tab.classList.remove('_active-tab');
  });

  blocks.forEach((block) => {
    if(block.classList.contains(blockClass)) {
      block.classList.remove('d-none');
    }
    else
      block.classList.add('d-none');
  });
 }










