<template>
  <div class="layout">
    <preloader :message='preloaderText'></preloader>

    <section class="section section--main">
      <head-section></head-section>

      <slider-section></slider-section>
    </section>

    <section class="section section--tab">
      <tab-section @onScroll="onScroll"></tab-section>
    </section>

    <section class="section section--choose">
      <choose-section @onScroll="onScroll"></choose-section>
    </section>
    <hr/>
    <section class="section section--forms">
      <forms-section @onScroll="onScroll"></forms-section>
    </section>

    <section class="section section--footer">
      <footer-section></footer-section>
    </section>
  </div>
</template>
<script>
  import PreloaderComponent from './components/preloader/index.vue';

  import HeadSection from './sections/head/index.vue';
  import SliderSection from './sections/slider/index.vue';
  import TabsSection from './sections/tabs/index.vue';
  import ChooseSection from './sections/choose/index.vue';
  import FormSection from './sections/forms/index.vue';
  import FooterSection from './sections/footer/index.vue';

  export default {
    components: {
      'preloader': PreloaderComponent,

      'head-section': HeadSection,
      'slider-section': SliderSection,
      'tab-section': TabsSection,
      'choose-section': ChooseSection,
      'forms-section': FormSection,
      'footer-section': FooterSection,
    },
    data() {
      return {
        message: 'hello',
        preloaderText: '',
        preloaderTimer: null,
        onScrollItems: [],
        onScrolledItems: []
      }
    },
    watch: {
      preloaderText() {
        this.screenLock();
      }
    },
    beforeCreate() {
      document.getElementsByTagName('html')[0].classList.add('is-animate');
      /*html.classList.add('is-animate');

      document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
          html.classList.add('is-animated');
        }, 200)
      });*/
    },
    created() {
      this.screenLock();
      this.log('app created');
      this.status('Application created.');

      setTimeout(() => {
        document.getElementsByTagName('html')[0].classList.add('is-animated');
        this.complete();
      }, 250);
    },
    mounted() {
      window.addEventListener('load', this.onScreen);
      window.addEventListener('scroll', this.onScreen);
    },
    methods: {
      screenLock() {
        document.getElementsByTagName('body')[0].classList[this.preloaderText ? 'add' : 'remove']('preloader-on');
      },
      status(text, disable = false) {
        clearTimeout(this.preloaderTimer);

        if (disable) {
          this.preloaderText = text;

          this.preloaderTimer = setTimeout(() => {
            this.preloaderText = null;
          }, 350);
        } else {
          this.preloaderText = text;
        }
      },

      complete() {
        this.status('App loading complete.', true);
      },

      getScreenSize() {
        const
          top = window.scrollY,
          width = window.width,
          height = window.innerHeight,
          bottom = height + top;

        return {top, width, height, bottom};
      },

      isVisibleElement(item, windowTop, windowBottom) {
        let
          offsetTop = item.offsetTop ? item.offsetTop : 0,
          offsetBottom = item.offsetBottom ? item.offsetBottom : 0,
          element = item.element,
          elementTop = element.offsetTop + offsetTop,
          elementHeight = element.offsetHeight,
          elementBottom = elementTop + elementHeight + offsetBottom;

        return ((windowTop <= elementTop || windowTop <= elementBottom) && windowBottom >= elementBottom);
      },

      onScreen() {
        let winParam = this.getScreenSize();

        this.onScrollItems.forEach((item) => {
          let
            element = item.element,
            callback = item.callback;

          if (!element || !callback || this.onScrolledItems.indexOf(element) > -1 || !this.isVisibleElement(item, winParam.top, winParam.bottom)) {
            return;
          }

          this.onScrolledItems.push(element);

          callback(element);
        });
      },

      onScroll(element, callback, offsetTop = 0, offsetBottom = 0) {
        element.classList.add('on-scroll-event');

        this.onScrollItems.push({element, callback, offsetTop, offsetBottom});
      }
    }
  };
</script>
