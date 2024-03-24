<template>
  <q-item
    :active="false"
    active-class="list-item-active"
    class="list-item q-mx-sm text-subtitle2"
    clickable
    tag="a"
    :href="link"
  >
    <q-item-section avatar >
      <q-avatar
        color="indigo-11"
        text-color="lime-13"
        size="md"
      >
        {{ title[0] }}
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface BoardLinkProps {
  id: number;
  title: string;
  link?: string;
  icon?: string;
}
withDefaults(defineProps<BoardLinkProps>(), {
  link: '#',
  icon: '',
});
</script>
