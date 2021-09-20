<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div id="particles-js"></div>
      <div class="container home">
        <div class="row">
          <section class="col-cs-12 col-md-12 col-sm-12">
            <h1>Hi, I'm Leon Kappes</h1>
            <hr />
            <section class="col-cs-12 col-md-12 col-sm-12 type">
              <a href="mailto:leon@kappes.space" target="_blank" class="btn btn-outline-light btn-lg" role="button">
              <i class="fas fa-envelope fa-x"></i> E-Mail
              </a>
              <a href="https://github.com/leonkappes" target="_blank" class="btn btn-outline-light btn-lg" role="button">
              <i class="fab fa-github fa-x"></i> Github
              </a>
            </section>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
if (process.browser) {
  require('particles.js')
}
export default {
  name: 'Intro',
  mounted () {
    if (process.browser) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#ffffff'
          },
          shape: {
            type: 'polygon',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 3
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'grab'
            },
            onclick: {
              enable: false,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 80,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3
            },
            repulse: {
              distance: 400,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      })
    }
  }
}
</script>

<style lang="css" scoped>
.jumbotron {
  color: white;
  background: linear-gradient(rgba(20, 20, 20, 0.6), rgba(20, 20, 20, 0.6)),
    url(~assets/images/intro.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  margin-bottom: 0;
}

.type {
  font-size: 60px;
  text-align: center;
}

.home h1,
.home h2 {
  color: #fff;
  text-align: center;
}

.home h1 {
  font-size: 120px;
  margin: 150px 0 50px 0;
}

.home h2 {
  font-size: 100px;
}

.home hr {
  width: 50px;
  margin-bottom: 100px;
}

@media (max-width: 991px) {
  .home h1 {
    font-size: 74px;
    margin: 80px 0 0 0;
  }

  .type div {
    font-size: 50px;
  }
}

#particles-js {
  width: 100%;
  position: absolute;
  height: 90%;
}
</style>
