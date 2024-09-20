<script setup>
import { Repl } from '@ti-cli/repl'
import Monaco from '@ti-cli/repl/monaco-editor'
// import '@vue/repl/style.css'
// ^ no longer needed after 3.0
</script>

<template>
  <Repl :editor="Monaco" />
</template>
