<script setup lang="ts">
import {ref} from "vue";

const AddExpanded = ref<boolean>(false)
const Text = ref<string | null>(null)

const resetText = () => {
  Text.value = ''
}
const onAdd = () => {
  AddExpanded.value = false
  resetText()
}

</script>

<template>
  <q-expansion-item
    class="list-item overflow-hidden q-mx-sm q-mt-lg"
    v-model="AddExpanded"
  >

    <template v-slot:header>
      <q-item-section avatar>
        <q-avatar size="md">
          +
        </q-avatar>
      </q-item-section>
      <q-item-section class="text-subtitle2">
        <q-item-label>Add Board</q-item-label>
      </q-item-section>
    </template>


    <q-form
      class="add-item-content-bg q-px-sm q-mb-md"
    >
      <q-input outlined v-model="Text" placeholder="Board Name" dense>
        <template v-slot:after>
          <q-btn square dense color="positive" icon="add" @click='onAdd' style="border-radius: 5px"/>
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="resetText" class="cursor-pointer" />
        </template>
      </q-input>
    </q-form>
  </q-expansion-item>

</template>

<style scoped>

</style>
