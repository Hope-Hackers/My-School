<template>
  <div class="py-2 bg-light">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-9 d-none d-lg-block">
          <a href="tel:+216 99 904 855:" class="small mr-3"
            ><span class="icon-phone2 mr-2"></span> +216 99 904 855</a
          >
          <a href="mailto:contact@myschool.com" class="small mr-3"
            ><span class="icon-envelope-o mr-2"></span> contact@myschool.com</a
          >
        </div>
        <div class="col-lg-3 text-right">
          <a href="Login" class="small mr-3"
            ><span class="icon-unlock-alt"></span> Log In</a
          >
          <a href="Register" class="small btn btn-primary px-4 py-2 rounded-0"
            ><span class="icon-users"></span> Register</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "top-bar",
  data() {
    return {
      info: null,
    };
  },
};
</script>
