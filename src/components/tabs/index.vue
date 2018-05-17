<template>
  <div class="tab">
    <slot name="links" :tabs="tabs" :show='showTab'>
      <div class="tab__links">
        <div
          v-for="tab in tabs"
          :key='tab.id'
          @click='showTab(tab.id)'
          class="tab__link"
          :class='tab.active ? "tab__link--active" : "tab__link--hide"'
        >
          <div v-html="tab.title" class="tab__link-title">
            <span>{{ tab.title }}</span>
          </div>
        </div>
      </div>
    </slot>
    <slot name="sections" :tabs="tabs">
      <div class="tab__sections">
        <div
          v-for="tab in tabs"
          :key='tab.id'
          class="tab__section"
          :class='tab.active ? "tab__section--active" : "tab__section--hide"'
        >
          <div v-html="tab.content" class="tab__content">
            {{ tab.content }}
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
  import './index.pcss';

  export default {
    name: 'tab-component',
    props: {
      tabs: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        activeTab: undefined
      }
    },
    created() {
      this.activeTab = this.getActiveTab();
    },
    methods: {
      getActiveTab() {
        return this.tabs.filter(tab => tab.active)[0];
      },
      hideTab(tab) {
        if (tab === undefined) {
          return;
        }

        this.tabs = this.tabs.map(item => {
          if (item.id === tab.id) {
            item.active = false;
          }

          return item;
        });
      },
      showTab(id) {
        this.hideTab(this.activeTab);

        this.tabs = this.tabs.map(tab => {
          if (tab.id === id) {
            tab.active = true;
            this.activeTab = tab;
          }

          return tab;
        });
      }
    }
  }
</script>
