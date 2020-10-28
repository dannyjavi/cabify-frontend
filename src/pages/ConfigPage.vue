<template>

  <div class="tabs is-boxed" id="tabs">
    <ul>
      <li class="is-active">
        <a>
          <span class="icon is-small"
            ><i class="fas fa-user-tie" aria-hidden="true"></i
          ></span>
          <span>Datos del conductor</span>
          
        </a>
      </li>

      <li data-tab="2">
        <a>
          <span class="icon is-small"
            ><i class="fas fa-car" aria-hidden="true"></i
          ></span>
          <span>Datos del vehículo</span>
        </a>
      </li>
    </ul>
  </div>
  

  
</template>

<script>
export default {
  name: "ConfigPage",
};

const Tabs = [...document.querySelectorAll('#tabs li')];
const Content = [...document.querySelectorAll('#tab-content p')];
const Active_class = 'is-active';

function initTabs() {
    Tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        let selected = tab.getAttribute('data-tab');
        updateActiveTab(tab);
        updateActiveContent(selected);
      })
    })
}

function updateActiveTab(selected) {
  Tabs.forEach((tab) => {
    if (tab && tab.classList.contains(Active_class)) {
      tab.classList.remove(ACctive_class);
    }
  });
  selected.classList.add(Active_class);
}

function updateActiveContent(selected) {
  Content.forEach((item) => {
    if (item && item.classList.contains(Active_class)) {
      item.classList.remove(Active_class);
    }
    let data = item.getAttribute('data-content');
    if (data === selected) {
      item.classList.add(Active_class);
    }
  });
}

initTabs();

</script>

<style>

#tab-content p {
  display: none;
}

#tab-content p.is-active {
  display: block;
}
</style>
