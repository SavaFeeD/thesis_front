<template>
  <base-nav
    v-model="showMenu"
    class="navbar-absolute top-navbar"
    type="white"
    :transparent="true"
  >
    <div
      slot="brand"
      class="navbar-wrapper"
    >
      <div class="navbar-minimize d-inline">
        <sidebar-toggle-button />
      </div>
      <div
        class="navbar-toggle d-inline"
        :class="{ toggled: $sidebar.showSidebar }"
      >
        <button
          type="button"
          class="navbar-toggler"
          @click="toggleSidebar"
        >
          <span class="navbar-toggler-bar bar1" />
          <span class="navbar-toggler-bar bar2" />
          <span class="navbar-toggler-bar bar3" />
        </button>
      </div>
      <a
        class="navbar-brand"
        href=""
      >{{ routeName }}</a>
    </div>

    <ul
      class="navbar-nav"
      :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'"
    >
      <base-dropdown
        v-model="lang"
        tag="li"
        :menu-on-right="!$rtl.isRTL"
        title-tag="a"
        class="nav-item"
        title-classes="nav-link"
        menu-classes="dropdown-navbar"
      >
        <template
          slot="title"
        >
          <div>{{ lang }}</div>
          <span class="caret" />
          <p class="d-lg-none">
            Log out
          </p>
        </template>
        <li class="nav-link">
          <div
            class="dropdown-item"
            @click="lang = 'Eng'"
          >
            Eng
          </div>
        </li>
        <li class="nav-link">
          <div
            class="dropdown-item"
            @click="lang = 'Ru'"
          >
            Ru
          </div>
        </li>
      </base-dropdown>
      <base-dropdown
        tag="li"
        :menu-on-right="!$rtl.isRTL"
        title-tag="a"
        title-classes="nav-link"
        class="nav-item"
      >
        <template
          slot="title"
        >
          <div class="notification d-none d-lg-block d-xl-block" />
          <i class="tim-icons icon-chat-33" />
          <p class="d-lg-none">
            New Messages
          </p>
        </template>
        <li class="nav-link">
          <a
            href="#"
            class="nav-item dropdown-item"
          >Message 1</a>
        </li>
        <li class="nav-link">
          <a
            href="#"
            class="nav-item dropdown-item"
          >Message 2</a>
        </li>
        <li class="nav-link">
          <a
            href="#"
            class="nav-item dropdown-item"
          >Message 3</a>
        </li>
        <li class="nav-link">
          <a
            href="#"
            class="nav-item dropdown-item"
          >Message 4</a>
        </li>
      </base-dropdown>
      <base-dropdown
        tag="li"
        :menu-on-right="!$rtl.isRTL"
        title-tag="a"
        title-classes="nav-link"
        class="nav-item"
      >
        <template
          slot="title"
        >
          <div class="notification d-none d-lg-block d-xl-block" />
          <i class="tim-icons icon-sound-wave" />
          <p class="d-lg-none">
            New Notifications
          </p>
        </template>
        <li class="nav-link">
          <a
            href="#"
            class="nav-item dropdown-item"
          >Mike John responded to your email</a>
        </li>
        <li class="nav-link">
          <a
            href="#"
            class="nav-item dropdown-item"
          >You have 5 more tasks</a>
        </li>
        <li class="nav-link">
          <a
            href="#"
            class="nav-item dropdown-item"
          >Your friend Michael is in town</a>
        </li>
        <li class="nav-link">
          <a
            href="#"
            class="nav-item dropdown-item"
          >Another notification</a>
        </li>
        <li class="nav-link">
          <a
            href="#"
            class="nav-item dropdown-item"
          >Another one</a>
        </li>
      </base-dropdown>
      <base-dropdown
        tag="li"
        :menu-on-right="!$rtl.isRTL"
        title-tag="a"
        class="nav-item"
        title-classes="nav-link"
        menu-classes="dropdown-navbar"
      >
        <template
          slot="title"
        >
          <div class="photo">
            <img
              src=""
              alt=""
            >
          </div>
          <b class="caret d-none d-lg-block d-xl-block" />
          <p class="d-lg-none">
            Log out
          </p>
        </template>
        <li class="nav-link">
          <a
            href="#"
            class="nav-item dropdown-item"
          >Profile</a>
        </li>
        <li class="nav-link">
          <a
            href="#"
            class="nav-item dropdown-item"
          >Settings</a>
        </li>
        <div class="dropdown-divider" />
        <li class="nav-link">
          <button
            class="nav-item dropdown-item"
            @click="logout()"
          >
            Log out
          </button>
        </li>
      </base-dropdown>
    </ul>
  </base-nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import { BaseNav, Modal } from '@/components';
import SidebarToggleButton from './SidebarToggleButton';

export default {
  components: {
    SidebarToggleButton,
    CollapseTransition,
    BaseNav,
    Modal,
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: '',
      lang: 'Eng',
    };
  },
  computed: {
    routeName() {
      const { path } = this.$route;
      const parts = path.split('/');
      return parts.map((p) => this.capitalizeFirstLetter(p)).join(' ');
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
  },
  methods: {
    capitalizeFirstLetter(string) {
      if (!string || typeof string !== 'string') {
        return '';
      }
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    async logout() {
      try {
        await this.$store.dispatch('auth/logOut');
        this.$router.push('/login');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style scoped>
.top-navbar {
  top: 0px;
}
</style>
