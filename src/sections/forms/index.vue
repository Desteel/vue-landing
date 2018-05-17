<template>
  <div class="wrap wrap--forms forms">
    <div class="form-block form-block--orange forms__col forms__col--auth">
      <h3 class="form-block__title">Member login</h3>
      <form action="#" class="form">
        <div class="form-block__group">
          <div class="form-block__group-input">
            <div class="form-block__input">
              <input class="input" type="text" value="" placeholder="User name" name="login[login]" required/>
            </div>
            <div class="form-block__input">
              <input class="input" type="password" value="" placeholder="Password" name="login[password]" required/>
            </div>
          </div>
          <div class="form-block__group-action">
            <button type="submit" name="login[submit]" value="true" class="btn btn--small btn--black">
              Log me in.
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="form-block form-block--cyan forms__col forms__col--subscribe">
      <h3 class="form-block__title">Subscribe to our weekly newsletter</h3>
      <form action="#" class="form">
        <div class="form-block__group">
          <div class="form-block__group-input">
            <div class="form-block__input">
              <input class="input w100" type="email" value="" placeholder="Email address" name="subscribe[email]"
                     required/>
            </div>
          </div>
          <div class="form-block__group-action">
            <button type="submit" name="subscribe[submit]" value="true"
                    class="btn btn--small btn--black">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import './index.pcss';

  export default {
    name: 'forms-component',
    data() {
      return {}
    },
    methods: {}
  }
</script>
