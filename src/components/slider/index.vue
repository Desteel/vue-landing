<template>
  <div class="slider">
    <div class="slider__wrap">
      <div class="slider__list">
        <slot name="items" :slides="slideList">
          <div
            v-for="slide in slideList"
            :key='slide.__hash'
            class="slider__item"
            :class='"slider__item--" + slide.type + (slide.active ? " slider__item--active" : "")'
          >
            <img :src='slide.image' alt="image"/>
          </div>
        </slot>
      </div>
    </div>
    <div class="slider__nav">
      <slot name="nav" :next="slideNext" :prev="slidePrev">
        <a href="#" class="slider__nav-btn slider__nav-btn--prev" @click='slidePrev'></a>
        <a href="#" class="slider__nav-btn slider__nav-btn--next" @click='slideNext'></a>
      </slot>
    </div>
  </div>
</template>
<script>
  import './index.pcss';

  export default {
    name: 'slider-component',
    props: {
      slides: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        slideList: [],
        currentSlide: undefined
      }
    },
    watch: {
      slides() {
        this.start()
      }
    },
    created() {
      this.start();
    },
    methods: {
      start() {
        let
          activeSlide = this.getActiveSlide(),
          activeSlideIndex = this.getSlideIndex(activeSlide),
          getSlide = this.getSlide(activeSlideIndex);

        this.activeSlide(getSlide);

        this.setSlideList();
      },

      getActiveSlide() {
        return this.slides[0];
      },

      setSlideList() {
        let activeIndex = this.getCurrentIndex();

        let totalIndex = 3;
        let index = -1;

        while (++index < totalIndex) {
          if (index === 0) {
            this.addSlide(this.currentSlide);
            continue;
          }

          this.addPrevSlide(this.getPrevIndex(index, activeIndex));
          this.addNextSlide(this.getNextIndex(index, activeIndex));
        }
      },

      addNextSlide(index) {
        let slide = this.getSlide(index);

        slide.type = 'next';

        this.slideList.splice(this.slideList.length, 0, slide);
      },

      addPrevSlide(index) {
        let slide = this.getSlide(index);

        slide.type = 'prev';

        this.slideList.splice(0, 0, slide);
      },

      removeFirstSlide() {
        this.slideList.splice(0, 1);
      },

      removeLastSlide() {
        this.slideList.splice(this.slideList.length - 1, 1);
      },

      addSlide(slide) {
        this.slideList.push(slide);
      },

      uniqueHash() {
        return ('' + Date.now()).split('').reduce((prev, current) => {
          return prev + Math.random().toString(34).substring(1, parseInt(current));
        }, '').replace(/\W+/g, '');
      },

      getSlide(index) {
        let slide = this.slides[index];

        if (slide !== undefined) {
          slide = Object.assign({}, slide);
          slide.type = '';
          slide.active = '';
          slide.__parent = this.slides[index];
          slide.__hash = this.uniqueHash();
        }

        return slide;
      },

      getCurrentIndex() {
        return this.getSlideIndex(this.currentSlide.__parent);
      },

      checkSlideIndex(index) {
        return (this.slides[index] !== undefined);
      },

      getSlideIndex(slide) {
        return this.slides.indexOf(slide);
      },

      getNextIndex(step, current) {
        let nextIndex = current + step,
          slideLastIndex = this.slides.length - 1;

        if (nextIndex > slideLastIndex) {
          nextIndex -= (slideLastIndex + 1)
        }

        return nextIndex;
      },

      getPrevIndex(step, current) {
        let prevIndex = current - step,
          slideLastIndex = this.slides.length - 1;

        if (prevIndex < 0) {
          prevIndex = slideLastIndex + (prevIndex + 1);
        }

        return prevIndex;
      },

      getNextSlideOfList() {
        let nextIndex = this.slideList.indexOf(this.currentSlide) + 1;

        return this.slideList[nextIndex];
      },

      getPrevSlideOfList() {
        let prevIndex = this.slideList.indexOf(this.currentSlide) - 1;

        return this.slideList[prevIndex];
      },

      activeSlide(slide) {
        slide.active = true;
        slide.__parent.active = true;
        slide.type = 'current';

        this.currentSlide = slide;

        return true;
      },

      unActiveSlide(slide) {
        slide.active = false;
        slide.__parent.active = false;
      },

      async slidePrev() {
        let activeIndex = this.getCurrentIndex();
        let prevIndex = this.getPrevIndex(1, activeIndex);

        if (!this.checkSlideIndex(prevIndex)) {
          return;
        }

        let prevSlide = this.getPrevSlideOfList();

        if (!prevSlide) {
          return;
        }

        this.currentSlide.type = 'next';

        await this.unActiveSlide(this.currentSlide);
        await this.activeSlide(prevSlide);

        let newIndex = this.getPrevIndex(2, prevIndex);

        this.addPrevSlide(newIndex);
        this.removeLastSlide();
      },

      async slideNext() {
        let activeIndex = await this.getCurrentIndex();
        let nextIndex = await this.getNextIndex(1, activeIndex);

        if (!this.checkSlideIndex(nextIndex)) {
          return false;
        }

        let nextSlide = await this.getNextSlideOfList();

        if (!nextSlide) {
          return;
        }

        this.currentSlide.type = 'prev';

        await this.unActiveSlide(this.currentSlide);
        await this.activeSlide(nextSlide);

        let newIndex = await this.getNextIndex(2, nextIndex);

        //this.addNextSlide(newIndex);
        //this.removeFirstSlide();

        this.addNextSlide(newIndex);
        this.removeFirstSlide();
      }
    }
  }
</script>
