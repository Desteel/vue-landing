<template>
  <header class="wrap wrap--head head">
    <div class="head__logo">
      <a class="head__logo-link logo-animation" href="#"><span>Leo</span><span class="logo-animation__separate">/</span><span>-</span></a>
    </div>
    <div class="head__nav" v-if="links.length">
      <nav class="menu-head">
        <a v-for="link in links" :href="link.href" class="menu-head__link hover hover--link">{{ link.title }}</a>
      </nav>
    </div>
  </header>
</template>
<script>
  import './index.pcss';

  export default {
    name: 'head-component',
    data() {
      return {
        links: [
          {
            title: 'Solutions',
            href: '#'
          },
          {
            title: 'Products',
            href: '#'
          },
          {
            title: 'Portfolio',
            href: '#'
          },
          {
            title: 'Contact',
            href: '#'
          }
        ]
      }
    },
    methods: {}
  }
</script>
