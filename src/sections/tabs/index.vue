<template>
  <div class="wrap wrap--tab">
    <tabs-component :tabs='tabs'>
      <div
        slot="links"
        slot-scope='props'
        class="tab__links"
      >
        <div
          v-for="tab in props.tabs"
          :key='tab.id'
          @click="props.show(tab.id)"
          class="tab__link"
          :class='tab.active ? "tab__link--active" : "tab__link--hide"'
        >
          <div v-html="tab.icon" class="tab__link-icon hover hover--rotate360">
            {{ tab.icon }}
          </div>
          <div v-html="tab.title" class="tab__link-title">
            <span>{{ tab.title }}</span>
          </div>
        </div>
      </div>

      <div
        slot="sections"
        slot-scope='props'
        class="tab__sections"
      >
        <div
          v-for="tab in props.tabs"
          :key='tab.id'
          class="tab__section"
          :class='tab.active ? "tab__section--active" : "tab__section--hide"'
        >
          <div ref="tabContent" v-html="tab.content" class="tab__content">
            {{ tab.content }}
          </div>
        </div>
      </div>
    </tabs-component>
  </div>
</template>
<script>
  import TabContent from './content';
  import TabComponent from '../../components/tabs/index.vue';
  import './index.pcss';

  export default {
    name: 'tab-section',
    components: {
      'tabs-component': TabComponent
    },
    data() {
      return {
        tabs: TabContent
      }
    },
    mounted() {
      this.onScroll();
    },
    methods: {
      onScroll() {
        const offsetTop = 100;

        this.$refs.tabContent.forEach((element) => {
          this.$emit('onScroll', element, () => {
            element.classList.add('ipad--animated');
          }, offsetTop)
        });
      }
    }
  }
</script>
