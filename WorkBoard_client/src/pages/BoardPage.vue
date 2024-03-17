<template>
  <q-page style="padding-top: 50px" class="main-content-bg">

    <q-page-sticky position="top" expand class="text-dark main-content-header">
      <q-toolbar>
        <q-btn flat round dense icon="map" />
        <q-toolbar-title>Title</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>

    <q-scroll-area
      style="height: calc(100vh - 100px);"
      :thumb-style="verticalThumbStyle"
      :bar-style="verticalBarStyle"
      :horizontal-thumb-style="horizontalThumbStyle"
      :horizontal-bar-style="horizontalBarStyle"
    >
      <div class="row items-start no-wrap q-pa-sm q-gutter-sm">
        <q-card class="my-card"
                flat
                bordered
                v-for="n in 20"
                :key="n"
                style="width: 300px"
        >
          <img src="https://cdn.quasar.dev/img/parallax2.jpg">

          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="local_bar" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Bar XYZ</q-item-label>
                <q-item-label caption>Have a drink.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Gas Station</q-item-label>
                <q-item-label caption>Fill your gas tank.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Cinema XYZ</q-item-label>
                <q-item-label caption>Watch a movie.</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </q-scroll-area>

  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useScrollBarStyle} from "src/composables/useScrollBarStyle";

const {verticalThumbStyle, verticalBarStyle, horizontalThumbStyle, horizontalBarStyle} = useScrollBarStyle()

</script>
