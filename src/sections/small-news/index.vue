<template>
  <div class="small-news">
    <slider-component :slides="news">
      <transition-group slot="items" slot-scope="props">
        <div
          v-for="slide in props.slides"
          :key='slide.__hash'
          class="slider__item"
          :class='"slider__item--" + slide.type + (slide.active ? " slider__item--active" : "")'
        >
          <div class="small-news__item">
            <div class="small-news__title">
              <a :href='slide.link'>{{ slide.title }}</a>
            </div>
            <div v-html='slide.content' class="small-news__text">
              {{ slide.content }}
            </div>
          </div>
        </div>
      </transition-group>

      <div slot="nav" slot-scope="props">
        <div class="small-news__nav">
          <div class="small-news__nav-btn small-news__nav-btn--prev" @click='props.prev()'>
            <i class="icon icon--small-arr icon--transform-180"></i>
          </div>
          <div class="small-news__nav-btn small-news__nav-btn--next" @click='props.next()'>
            <i class="icon icon--small-arr"></i>
          </div>
        </div>
      </div>
    </slider-component>
  </div>
</template>
<script>
  import './index.pcss';
  import News from './content';
  import SliderComponent from './../../components/slider/index.vue';

  export default {
    name: 'small-news-section',
    components: {
      'slider-component': SliderComponent,
    },
    data() {
      return {
        news: News
      }
    },
    methods: {}
  }
</script>
