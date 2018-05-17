<template>
  <div class="wrap wrap--slider">
    <slider-component :slides="slides">
      <transition-group slot="items" slot-scope="props">
        <div
          v-for="slide in props.slides"
          :key='slide.__hash'
          class="slider__item"
          :class='"slider__item--" + slide.type + (slide.active ? " slider__item--active" : "")'
        >
          <div class="slide-content">
            <div v-if='slide.image' class="slide-content__image">
              <img :src='slide.image' alt="image"/>
            </div>
            <div v-html="slide.content" class="slide-content__text">
              {{ slide.content }}
            </div>
          </div>
        </div>
      </transition-group>

      <div slot="nav" slot-scope="props">
        <div class="slider__nav-btn slider__nav-btn--prev hover hover--scale" @click='props.prev()'>
          <i class="icon icon--big-arr icon--transform-180"></i>
        </div>
        <div class="slider__nav-btn slider__nav-btn--next hover hover--scale" @click='props.next()'>
          <i class="icon icon--big-arr"></i>
        </div>
      </div>
    </slider-component>
  </div>
</template>
<script>
  import Slides from './content';
  import SliderComponent from './../../components/slider/index.vue';
  import './index.pcss';

  export default {
    name: 'slider-section',
    components: {
      'slider-component': SliderComponent,
    },
    data() {
      return {
        slides: Slides
      }
    },
    watch: {},
    methods: {}
  }
</script>
