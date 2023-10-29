<template>
  <div
      data-testid="card-element"
      :class="cn(cardVariants({ variant, size }))"
      v-bind="props"
  >
  <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority';
import { type HTMLAttributes } from 'vue';
import { cn } from "~/utils"

const cardVariants = cva('rounded-lg', {
  variants: {
    variant: {
      red: 'bg-red text-white',
      white: 'bg-white border border-gray',
      green: 'bg-green text-white',
    },
    size: {
      sm: 'p-3 text-xs',
      lg: 'p-4',
    },
  },
  defaultVariants: {
    variant: 'white',
    size: 'sm',
  },
})

type ButtonProps = VariantProps<typeof cardVariants>

withDefaults(
  defineProps<{
    variant?: ButtonProps["variant"]
    size?: ButtonProps["size"]
    isLoading?: boolean
    props?: HTMLAttributes
  }>(),
  {
    variant: "primary",
    size: "lg",
    isLoading: false
  }
)

</script>

<style scoped>

</style>