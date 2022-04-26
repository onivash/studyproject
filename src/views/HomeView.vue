<template>
  <div class="home container">
    <!-- header -->
    <div class="home__header">
      <div class="home__header-title">
        <h1>Invoices</h1>
        <div> There are 3 total invoices</div>
      </div>
      <div class="home__header-controls">
        <div class="home__header-filter"
        @click="toggleFilterMenu"
        >
          <span>Filter by status</span>
          <img src="@/assets/icon-arrow-down.svg" />
          <ul 
          class="home__header-list"
          v-show="filterMenu"
          >
            <li class="home__header-list-item">all</li>
            <li class="home__header-list-item">draft</li>
            <li class="home__header-list-item">pending</li>
            <li class="home__header-list-item">paid</li>
          </ul>
        </div>

        <div class="home__header-button">
          <div class="home__header-button-inner">
            <img src="@/assets/icon-plus.svg" alt="" />
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>
    
  </div>
  <div class="body container">
    <div class="body__list-items">
      <div>452637</div>
      <div>nov,29,2019</div>
      <div>alex petrov</div>
      <div>$45</div>
      <div class="Button__default--danger">draft</div>
      <img src="@/assets/icon-arrow-down.svg" />

    </div>
    <div class="body__list-items">
      <div>452637</div>
      <div>nov,29,2019</div>
      <div>alex petrov</div>
      <div>$45</div>
      <div class="Button__default--danger">draft</div>
      <img src="@/assets/icon-arrow-down.svg" />

    </div>
    <div class="body__list-items">
      <div>452637</div>
      <div>nov,29,2019</div>
      <div>alex petrov</div>
      <div>$45</div>
      <div class="Button__default--danger">draft</div>
      <img src="@/assets/icon-arrow-down.svg" />

    </div>

  </div>

</template>

<script>
  export default {
    name: 'HomeView',
    data () {
      return {
        filterMenu: false
      }
    },
    methods: {
      toggleFilterMenu() {
        this.filterMenu = !this.filterMenu
      }
    }

  }
</script>
<style lang="scss" scoped>
  .home {

    // & = .home
    &__header {
      // & = .home__header
      display: flex;
      justify-content: space-between;

      &-controls {
        display: flex;
        align-items: center;

        > * + * {
          margin-left: 16px;
        }
      }

      &-filter {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
       img {
         width: 12px;
         height: 7px;
         margin-left: 16px;
       }
      }

      &-list {
        position: absolute;
        top: 50px;
        left: 0;
        list-style: none;
        width: 120px;
        background-color: #1e2139 ;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        li {
          font-size: 12px;
          cursor: pointer;
          padding: 10px 20px;

          &:hover {
            color: #1e2139;
            background-color: #fff;
          }
        }
      }

      &-button {
        display: flex;
        align-items: center;
        background-color: #7c5dfa;
        border-radius: 40px;
        padding: 8px 10px;
        cursor: pointer;

        &-inner {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          padding: 8px;
          margin-right: 8px;
          background-color: #fff;
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
  .body{
    &__list-items{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #1e2139 ;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 30px 20px;
      margin: 10px;
      border-radius: 30px;
       img {
         transform: rotate(270deg);
       }

    }
  }
</style>