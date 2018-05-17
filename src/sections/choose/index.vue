<template>
  <div class="wrap wrap--choose choose" ref="choose">
    <div class="choose__image">
      <img src="/dist/assets/screen-shot.png" alt="screenshot"/>
    </div>
    <div class="choose__text">
      <h3>
        Why choose us ?
      </h3>
      <ul class="check-list">
        <li class="check-list__item">Lorem Ipsum is simply dummy text of the printing and typesetting</li>
        <li class="check-list__item">Lorem Ipsum has been the industry's standard dummy text ever</li>
        <li class="check-list__item">When an unknown printer took a galley of type and scrambled</li>
        <li class="check-list__item">It has survived not only five centuries, but also the leap into electronic</li>
        <li class="check-list__item">It was popularised in the 1960s with the release of Letraset sheets
          containing
        </li>
        <li class="check-list__item">More recently with desktop publishing software like Aldus PageMaker</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import './index.pcss';

  export default {
    name: 'choose-component',
    data() {
      return {}
    },
    mounted() {
      this.onScroll();
    },
    methods: {
      onScroll() {
        const offsetTop = 100;
        let element = this.$refs.choose;

        this.$emit('onScroll', element, () => {
          element.classList.add('choose--animated');
        }, offsetTop);
      }
    },
  }
</script>
