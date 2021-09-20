<template>
  <li class="col-xs-12 col-sm-12 col-md-4">
    <component v-bind="linkProps(link)">
      <div class="container-img">
        <img :src="img" alt="Projects" />
      </div>
      <h3>{{ title }}</h3>
    </component>
  </li>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'Hello World!'
    },
    img: {
      type: String,
      default: 'https://via.placeholder.com/1920x1080'
    },
    link: {
      type: String,
      default: '/'
    }
  },
  methods: {
    linkProps (url) {
      if (url.match(/^(http(s)?|ftp):\/\//)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        is: 'router-link',
        to: url
      }
    }
  }
}
</script>
<style lang="css" scoped>
.container-img {
  overflow: hidden;
}
img {
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}
img:hover {
  transform: scale(1.07);
  opacity: 0.8;
}
li {
  margin-bottom: 50px;
  margin-left: 20px;
  padding: 20px;
  background-color: #363636;
  border: 2px solid #444444;
  border-radius: 12px;
  float: left;
  width: 350px;
  @media (max-width: 1200px) {
    width: 290px;
  }
  @media (max-width: 780px) {
    margin-left: 0px;
    width: auto;
  }
}
a {
  text-decoration: none;
}
h3 {
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 20px;
}
</style>
