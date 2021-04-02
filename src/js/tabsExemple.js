const tab1 = document.querySelector('.');
const tab2 = document.querySelector('.');
const tab3 = document.querySelector('.');

const blocksList = document.querySelectorAll('.');
const tabsList = document.querySelectorAll('.');



tab1.addEventListener('click', tabsHandler(tabsList, blocksList));
tab2.addEventListener('click', tabsHandler(tabsList, blocksList));
tab3.addEventListener('click', tabsHandler(tabsList, blocksList));



function tabsHandler (tabs, blocks) {
  tabs.forEach((tab) => {
    if(tab.classList.contains('')) {
      tab.classList.remove('d-none');
    }
    else
      tab.classList.add('d-none');
  })
  blocks.forEach((block) => {
    if(block.classList.contains('')) {
      block.classList.remove('d-none');
    }
    else
      block.classList.add('d-none');
  });
 }










