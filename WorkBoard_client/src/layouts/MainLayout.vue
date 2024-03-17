<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="header-bg text-grey-9">
      <q-toolbar>
        <q-btn dense flat round icon="dashboard" @click="toggleLeftDrawer" class="q-mr-xl"/>
        <q-avatar square >
          <img width="64" height="64" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-board-design-thinking-flatart-icons-flat-flatarticons.png" alt="external-board-design-thinking-flatart-icons-flat-flatarticons"/>
        </q-avatar>
        <q-toolbar-title class="text-weight-bold">
          WorkBoard
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      elevated
      class="left-drawer-bg"
    >
      <q-scroll-area class="fit q-pa-sm">
        <q-list
          class="q-gutter-xs"
        >
          <q-item-label
            header
            class="text-grey-9 text-weight-bold text-body1"
          >
            Your Boards
          </q-item-label>

          <BoardLink
            v-for="link in BoardLinks"
            :key="link.title"
            v-bind="link"
          />
          <AddBoardItem
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BoardLink, { BoardLinkProps } from 'components/BoardLink.vue';
import AddBoardItem from "components/AddBoardItem.vue";

const BoardLinks: BoardLinkProps[] = [
  {
    title: 'Docs',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
