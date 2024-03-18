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
      <div class="row items-start no-wrap q-pa-sm q-gutter-md">
        <q-card class="bg-grey-2 q-pa-sm"
                flat
                bordered
                v-for="n in 2"
                :key="n"
                style="width: 250px; min-height: 50px"
        >
          <q-card-section class="q-pa-none">
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-body1 text-weight-bold text-grey-8">my new List</div>
              </div>

              <div class="col-auto">
                <q-btn color="grey-7" round flat dense icon="more_vert"/>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pa-none">
            <div class="column q-gutter-sm">
              <div class="col bg-white q-py-lg">
                1 of 3
              </div>
              <div class="col bg-white q-py-lg">
                1 of 3
              </div>
              <div class="col bg-white q-py-lg">
                1 of 3
              </div>
            </div>
          </q-card-section>



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
