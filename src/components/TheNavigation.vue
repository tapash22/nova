<template>
    <div class="navigation">
      <div class="navi">
        <nav>
          <div class="brand">
            <router-link to="/home">
              <img src="@/assets/logo2.png" />
            </router-link>
            <div class="btn">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
          </div>
          <div class="navbar" v-if="show">
            <ul class="ul">
              <li><router-link to="/home">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/gallery">Gallery</router-link></li>
              <li>
                <router-link to="/products"
                  >Products<i
                    class="fa fa-angle-down"
                    style="padding-left: 5px; padding-top: 5px"
                    aria-hidden="true"
                  ></i
                ></router-link>
                <ul>
                  <li>
                    <router-link to="/poultry"
                      >Poultry<i class="fa fa-angle-right" aria-hidden="true"></i
                    ></router-link>
                    <ul class="two">
                      <li>
                        <router-link to="/antibiotic">Antibiotic</router-link>
                      </li>
                      <li>
                        <router-link to="/nutritional">Nutritional</router-link>
                      </li>
                      <li>
                        <router-link to="/harbal">Harbal </router-link>
                      </li>
                      <li>
                        <router-link to="/probiotics"
                          >Probiotics & Prebiotics
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/anticoccidial"
                          >Anticoccidial
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/others">Others</router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/dairy"
                      >Dairy<i class="fa fa-angle-right" aria-hidden="true"></i
                    ></router-link>
                    <ul class="two">
                      <li>
                        <router-link to="/antibiotics">Antibiotics</router-link>
                      </li>
                      <li>
                        <router-link to="/penathaone">Penathaone</router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/aqua"
                      >Aqua<i class="fa fa-angle-right" aria-hidden="true"></i
                    ></router-link>
                  </li>
                </ul>
              </li>
              <li><router-link to="contactus">Contact us</router-link></li>
              <li><router-link to="/login">Login</router-link></li>
            </ul>
          </div>
        </nav>
      </div>
  
      <div class="mini">
        <nav>
          <div class="brand">
            <router-link to="/home">
              <img src="../assets/logo2.png" />
            </router-link>
            <div class="btn" @click="onClick()">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
          </div>
          <div class="navbar">
            <ul class="ul">
              <transition-group name="slide-fade">
                <li v-if="!show">
                  <router-link to="/home" @click="onClick()">Home</router-link>
                </li>
                <li v-if="!show">
                  <router-link to="/about" @click="onClick()">About</router-link>
                </li>
                <li v-if="!show">
                  <router-link to="/gallery" @click="onClick()"
                    >Gallery</router-link
                  >
                </li>
                <li v-if="!show">
                  <router-link to="/products"
                    >Products<i
                      class="fa fa-angle-down"
                      style="padding-left: 5px; padding-top: 5px"
                      aria-hidden="true"
                    ></i
                  ></router-link>
                  <ul>
                    <li>
                      <router-link to="/poultry"
                        >Poultry<i
                          class="fa fa-angle-right"
                          aria-hidden="true"
                        ></i
                      ></router-link>
                      <ul class="two">
                        <li>
                          <router-link to="/antibiotic" @click="onClick()"
                            >Antibiotic</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/nutritional" @click="onClick()"
                            >Nutritional</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/harbal" @click="onClick()"
                            >Harbal
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/probiotics" @click="onClick()"
                            >Probiotics & Prebiotics
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/anticoccidial" @click="onClick()"
                            >Anticoccidial
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/others" @click="onClick()"
                            >Others</router-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link to="/dairy" @click="onClick()"
                        >Dairy<i class="fa fa-angle-right" aria-hidden="true"></i>
                      </router-link>
                      <ul class="two">
                        <li>
                          <router-link to="/antibiotics" @click="onClick()"
                            >Antibiotics</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/penathaone" @click="onClick()"
                            >Penathaone</router-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link to="/aqua" @click="onClick()"
                        >Aqua<i class="fa fa-angle-right" aria-hidden="true"></i
                      ></router-link>
                    </li>
                  </ul>
                </li>
                <li v-if="!show">
                  <router-link to="contactus" @click="onClick()"
                    >Contact us</router-link
                  >
                </li>
                <li v-if="!show">
                  <router-link to="/login" @click="onClick()">Login</router-link>
                </li>
              </transition-group>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: true,
      };
    },
  
    created() {},
  
    methods: {
      onClick() {
        this.show = !this.show;
        if (this.showSidebar) {
          this.showLink = true;
          setTimeout(() => {
            this.showSidebar = false;
          }, 200);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&display=swap");
  
  .navigation {
    width: 100%;
    height: 130px;
    padding: 0;
    margin: 0;
    background: #7dced1;
    position: fixed;
    z-index: 1;
  }
  .navigation .navi {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  .navi nav {
    width: 100%;
    height: 100%;
    padding: 5px;
    margin: 0;
    position: relative;
    display: flex;
    box-shadow: 2px 2px 5px #fff;
  }
  .navi nav .brand {
    width: 30%;
    height: 130px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .brand a {
    text-decoration: none;
    color: #fff;
    padding: 0;
    margin: 0;
  }
  .brand img {
    width: 170px;
    height: 120px;
    padding: 0;
    margin: 0;
  }
  .brand .btn {
    display: none;
  }
  nav .navbar {
    width: 70%;
    height: 50px;
    padding: 5px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .navbar .ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .navbar .ul li {
    list-style: none;
    padding: 5px;
    margin: 5px;
    align-items: center;
  }
  .navbar .ul li:hover ul {
    display: block;
  }
  .navbar .ul li a {
    font-size: 1.2rem;
    font-weight: 900;
    font-family: "Luxurious Roman", cursive;
    letter-spacing: 1px;
    text-decoration: none;
    color: #000;
    margin: 0;
    padding: 5px;
    border-bottom: 2px none #fff;
  }
  .navbar .ul li a:hover,
  .navbar .ul li a.router-link-exact-active {
    border-bottom: 2px solid #fff;
  }
  .navbar .ul li ul {
    position: absolute;
    display: none;
    padding: 0;
    margin: 0;
    background: #0b53699d;
    margin-top: 5px;
    z-index: 1;
  }
  .navbar .ul li ul li {
    padding: 10px;
    margin: 0;
  }
  .navbar .ul li ul li a {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 5px;
    margin: 5px;
    display: flex;
    justify-content: space-between;
    border-bottom: none;
    color: #fff;
  }
  .navbar .ul li ul li a:hover,
  .navbar .ul li ul li a.router-link-exact-active {
    border-bottom: none;
  }
  .navbar .ul li ul li a i {
    padding-top: 5px;
    padding-left: 15px;
    margin: 0;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .navbar .ul li ul li:hover {
    background: rgba(0, 0, 0, 0.24);
  }
  .navbar .ul li ul li:hover .two {
    display: block;
  }
  .navbar .ul li ul li .two {
    position: absolute;
    display: none;
    padding: 0;
    margin-left: 120px;
    background: #0b53699d;
    margin-top: -30px;
  }
  .navbar .ul li ul li .two li {
    padding: 10px;
    margin: 0;
    width: 200px;
  }
  .navigation .mini {
    display: none;
  }
  
  @media only screen and (max-width: 436px) {
    .navigation {
      width: 100%;
      height: 130px;
      padding: 0;
      margin: 0;
      background: #7dced1;
      position: fixed;
      z-index: 1;
    }
    .navigation .navi {
      display: none;
    }
    .navigation .mini {
      padding: 0;
      margin: 0;
      width: 100%;
      display: flex;
    }
    .mini nav {
      width: 100%;
      height: auto;
      position: fixed;
      padding: 0;
      margin: 0;
    }
    nav .brand {
      width: 100%;
      height: 130px;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-between;
    }
    .brand a {
      text-decoration: none;
      color: #fff;
      padding: 0;
      margin: 0;
    }
    .brand a img {
      width: 170px;
      height: 120px;
      padding: 0;
      margin: 0;
    }
    .brand .btn {
      display: block;
    }
    .brand .btn i {
      font-size: 2.5rem;
      font-weight: 700;
      color: #000;
      padding: 20px;
      margin: 15px;
    }
    nav .navbar {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    }
    .navbar .ul {
      width: 100%;
      height: 100%;
      padding: 0;
      display: flex;
      flex-direction: column;
      background: #7dced1;
    }
    .navbar .ul li {
      width: 100%;
  
      list-style: none;
      align-items: center;
    }
    .navbar .ul li:hover ul {
      position: relative;
      display: block;
      visibility: visible;
    }
    .navbar .ul li a {
      font-size: 1.2rem;
      font-weight: 900;
      font-family: "Luxurious Roman", cursive;
      letter-spacing: 1px;
      text-decoration: none;
      color: #000;
      margin: 0;
      padding: 5px;
      border-bottom: 2px none #fff;
    }
    .navbar .ul li a:hover,
    .navbar .ul li a.router-link-exact-active {
      border-bottom: 2px solid #fff;
    }
    .navbar .ul li ul {
      visibility: hidden;
      display: block;
      padding: 0;
      margin: 0;
      background: #0b53699d;
      margin-top: 5px;
      z-index: 1;
    }
    .navbar .ul li ul li {
      padding: 10px;
      margin: 0;
    }
    .navbar .ul li ul li a {
      font-size: 1.2rem;
      font-weight: 500;
      padding: 5px;
      margin: 5px;
      display: flex;
      justify-content: space-between;
      border-bottom: none;
      color: #fff;
    }
    .navbar .ul li ul li a:hover,
    .navbar .ul li ul li a.router-link-exact-active {
      border-bottom: none;
    }
    .navbar .ul li ul li a i {
      padding-top: 5px;
      padding-left: 15px;
      margin: 0;
      font-size: 1.4rem;
      font-weight: 500;
    }
    .navbar .ul li ul li:hover {
      background: rgba(0, 0, 0, 0.24);
    }
    .navbar .ul li ul li:hover .two {
      position: relative;
      display: block;
      visibility: visible;
    }
  
    .navbar .ul li ul li .two {
      visibility: hidden;
      display: block;
      padding: 0;
      margin: 0;
      background: #0b53699d;
      z-index: 1;
    }
    .navbar .ul li ul li .two li {
      padding: 10px;
      margin: 0;
      width: 200px;
    }
  
    .slide-fade-enter-active {
      transition: all 0.3s ease-in;
    }
  
    .slide-fade-leave-active {
      transition: all 0.3s ease-out;
    }
  
    .slide-fade-enter-from,
    .slide-fade-leave-to {
      transform: translateX(10%);
      opacity: 0;
    }
    /* .navbar .ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .navbar .ul li {
    list-style: none;
    padding: 5px;
    margin: 5px;
    align-items: center;
  }
  .navbar .ul li:hover ul {
    display: block;
  }
  .navbar .ul li a {
     font-size: 1.2rem;
    font-weight: 900;
    font-family: 'Oswald', sans-serif;
    letter-spacing: 1px;
    text-decoration: none;
    color: #000;
    margin: 0;
    padding: 5px;
    border-bottom: 2px none #fff;
  }
  .navbar .ul li a:hover,
  .navbar .ul li a.router-link-exact-active {
    border-bottom: 2px solid #fff;
  }
  .navbar .ul li ul {
    position: absolute;
    display: none;
    padding: 0;
    margin: 0;
    background: #0b53699d;
    margin-top: 5px;
    z-index: 1;
  }
  .navbar .ul li ul li {
    padding: 10px;
    margin: 0;
  }
  .navbar .ul li ul li a {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 5px;
    margin: 5px;
    display: flex;
    justify-content: space-between;
    border-bottom: none;
  }
  .navbar .ul li ul li a:hover,
  .navbar .ul li ul li a.router-link-exact-active {
    border-bottom: none;
    color: #fff;
  }
  .navbar .ul li ul li a i {
    padding-top: 5px;
    padding-left: 15px;
    margin: 0;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .navbar .ul li ul li:hover {
    background: rgba(0, 0, 0, 0.24);
  }
  .navbar .ul li ul li:hover .two {
    display: block;
  }
  
  .navbar .ul li ul li .two {
    position: absolute;
    display: none;
    padding: 0;
    margin-left: 100px;
    background: #0b53699d;
    margin-top: -30px;
  }
  .navbar .ul li ul li .two li {
    padding: 10px;
    margin: 0;
    width: 200px;
  } */
  }
  </style>