<template>
  <div
    class="wrapper"
    :class="{ 'nav-open': $sidebar.showSidebar }"
  >
    <notifications />
    <sidebar-fixed-toggle-button />
    <side-bar
      :background-color="sidebarBackground"
      short-title="CT"
    >
      <template
        slot="links"
      >
        <sidebar-item
          v-for="item of links"
          :key="item.id"
          :link="{
            name: item.name,
            icon: item.icon,
            path: item.path
          }"
        />
      </template>
    </side-bar>
    <div
      class="main-panel"
      :data="sidebarBackground"
    >
      <dashboard-navbar />
      <router-view name="header" />

      <div
        :class="{ content: !isFullScreenRoute }"
        @click="toggleSidebar"
      >
        <zoom-center-transition
          :duration="200"
          mode="out-in"
        >
          <!-- your content here -->
          <nuxt />
        </zoom-center-transition>
      </div>
      <content-footer v-if="!isFullScreenRoute" />
    </div>
    <base-modal-container />
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import DashboardNavbar from '@/components/Layout/DashboardNavbar';
import ContentFooter from '@/components/Layout/ContentFooter.vue';
import SidebarFixedToggleButton from '@/components/Layout/SidebarFixedToggleButton.vue';
import {
  // SlideYDownTransition,
  ZoomCenterTransition,
} from 'vue2-transitions';

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    SidebarFixedToggleButton,
    // SlideYDownTransition,
    ZoomCenterTransition,
  },
  middleware: 'auth',
  data() {
    return {
      sidebarBackground: 'primary', // vue|blue|orange|green|red|primary
      logo: 'img/logo',
      links: [
        {
          id: 0,
          name: this.$t('sidebar.dashboard'),
          icon: require('~/assets/img/icons/sidebar/dashboard.svg'),
          path: '/',
        },
        {
          id: 1,
          name: this.$t('sidebar.users'),
          icon: require('~/assets/img/icons/sidebar/users.svg'),
          path: '/user-list',
        },
        {
          id: 2,
          name: this.$t('sidebar.groups'),
          icon: require('~/assets/img/icons/sidebar/users-groups.svg'),
          path: '/users-groups',
        },
        {
          id: 3,
          name: this.$t('sidebar.admin'),
          icon: require('~/assets/img/icons/sidebar/users-groups.svg'),
          path: '/admins',
        },
        {
          id: 4,
          name: this.$t('sidebar.reports'),
          icon: require('~/assets/img/icons/sidebar/reports.svg'),
          path: '/reports',
        },
        {
          id: 5,
          name: this.$t('sidebar.vesting'),
          icon: require('~/assets/img/icons/sidebar/vesting.svg'),
          path: '/vesting',
        },
        {
          id: 6,
          name: this.$t('sidebar.settings'),
          icon: require('~/assets/img/icons/sidebar/settings.svg'),
          path: '/settings',
        },
      ],
    };
  },
  computed: {
    isFullScreenRoute() {
      return this.$route.path === '/maps/full-screen';
    },
  },
  mounted() {
    this.initScrollbar();
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    initScrollbar() {
      const docClasses = document.body.classList;
      const isWindows = navigator.platform.startsWith('Win');
      if (isWindows) {
        // if we are on windows OS we activate the perfectScrollbar function
        initScrollbar('sidebar');
        initScrollbar('main-panel');
        initScrollbar('sidebar-wrapper');

        docClasses.add('perfect-scrollbar-on');
      } else {
        docClasses.add('perfect-scrollbar-off');
      }
    },
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

$scaleSize: 0.95;
@keyframes zoomIn95 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  to {
    opacity: 1;
  }
}

.main-panel .zoomIn {
  animation-name: zoomIn95;
}

@keyframes zoomOut95 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}

.main-panel .zoomOut {
  animation-name: zoomOut95;
}
</style>
