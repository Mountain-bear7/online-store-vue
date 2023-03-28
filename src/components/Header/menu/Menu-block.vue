<template>
  <div class="menu">
    <a href="/">
      <img
          src="@/assets/logo/logo.jpg"
          height="70"
          width="170"
          alt="Apple online store"
      />
    </a>
    <nav>
      <ul>
        <li><a href="/">Main</a></li>
        <li><a href="/">Mac</a></li>
        <li><a href="/">iPhone</a></li>
        <li><a href="/">Watch</a></li>
        <li><a href="/">AirPods</a></li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Menu-block'
}
</script>

<style scoped lang="scss">
.menu{
  display: flex;
  align-items: center;
  grid-gap: 25px;

  >nav{

    >ul{
      list-style: none;
      display: flex;
      align-items: center;
      grid-gap: 25px;

      li{

        a{
          text-decoration: none;
          color: black;
          cursor: pointer;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          position: relative;

          &:hover{
            color: hotpink;
            transition: all .5s;
          }

          &::after{
            display: block;
            position: absolute;
            left: 0;
            width: 0;
            height: 2px;
            background-color: hotpink;
            margin-top: 5px;
            content: "";
            transition: all .5s
          }
          &:hover:after{
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
