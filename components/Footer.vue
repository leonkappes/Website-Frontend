<!--
Leon Kappes Homepage
Copyright (C) 2019  Leon Kappes
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.
You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->

<template>
  <div class="container-fluid footer">
    <div class="row">
      <div class="container">
        <footer>
          <section class="col-xs-12 col-sm-12 col-md-8">
            <h4>Who am I?</h4>
            <p>
              I'm Leon, a student in germany, currently doing my finals. I like to work with everything that has to do with computers, especially system administration.
              Feel free to write me an E-Mail!
            </p>
            <p id="copyright">
              &copy; 2021 - Leon Kappes | Made with
              <i class="fa fa-heart"></i> available on
              <a
                href="https://github.com/LeeDJD/Website-Frontend"
                target="_blank"
                ><i class="fab fa-github"></i> Github</a
              >
            </p>
          </section>

          <section class="col-xs-12 col-sm-12 col-md-4 links-footer">
            <ul class="">
              <li>
                <a href="https://github.com/leonkappes" target="_blank"
                  ><i class="fab fa-github fa-2x"></i
                ></a>
              </li>
              <li>
                <nuxt-link to="impressum">
                  Impressum
                </nuxt-link>
              </li>
            </ul>
          </section>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer {
  padding: 15px 0 15px 0;
  background-color: #363636;
  color: #fff;
  overflow: hidden;
}
#copyright {
  font-size: 12px;
}
#copyright a {
  color: #fff;
}

.links-footer ul li a {
  font-size: 12px;
}
.links-footer ul li a:hover {
  color: #fff;
  text-decoration: none;
}
.links-footer ul li a:active,
.links-footer ul li a:focus {
  text-decoration: none;
}

.fa-2x,
.links-footer ul li a {
  color: #fff;
}

.links-footer ul li {
  clear: right;
  float: left;
}
.links-footer ul li {
  padding-left: 0;
  padding-right: 25px;
}
</style>
