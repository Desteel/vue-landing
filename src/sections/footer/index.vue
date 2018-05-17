<template>
  <footer class="wrap wrap--footer footer">
    <div class="footer__col footer__col--info">
      <nav class="footer__col footer__col--nav">
        <ul class="footer-nav footer__col--menu-1">
          <li v-for="link in links" class="footer-nav__item footer-nav__item--parent">
            <a class="footer-nav__link footer-nav__link--parent hover hover--link" :href="link.href">
              {{ link.title }}
            </a>
            <ul v-if="link.links" class="footer-nav footer-nav--child">
              <li v-for="subLink in link.links" class="footer-nav__item footer-nav__item--child">
                <a class="footer-nav__link footer-nav__link--child hover hover--link" :href="subLink.href">
                  {{ subLink.title }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="footer-nav footer__col--menu-2">
          <li v-for="link in links" class="footer-nav__item footer-nav__item--parent">
            <a class="footer-nav__link footer-nav__link--parent hover hover--link" :href="link.href">
              {{ link.title }}
            </a>
            <ul v-if="link.links" class="footer-nav footer-nav--child">
              <li v-for="subLink in link.links" class="footer-nav__item footer-nav__item--child">
                <a class="footer-nav__link footer-nav__link--child hover hover--link" :href="subLink.href">
                  {{ subLink.title }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="footer__col footer__col--news">
        <small-news-section></small-news-section>
      </div>
    </div>
    <div class="footer__col footer__col--logo">
      <div class="footer__logo">
        <a class="footer__logo-link" href="#">Leo/-</a>
      </div>
      <div class="footer__copyright">
        <p>© <a href="#" class="hover hover--link">cssauthor.com</a></p>
      </div>
    </div>
  </footer>
</template>
<script>
  import './index.pcss';
  import NewsSliderSection from '../small-news/index.vue';

  export default {
    name: 'footer-component',
    components: {
      'small-news-section': NewsSliderSection
    },
    data() {
      return {
        links: [
          {
            title: 'About Us',
            href: '#',
            links: [
              {
                title: 'About us',
                href: '#'
              },
              {
                title: 'Why us',
                href: '#'
              },
              {
                title: 'Customer Stories',
                href: '#'
              },
              {
                title: 'Press Resources',
                href: '#'
              },
              {
                title: 'Press Releases',
                href: '#'
              },
              {
                title: 'Contact us',
                href: '#'
              }
            ]
          }
        ]
      }
    },
    methods: {}
  }
</script>
