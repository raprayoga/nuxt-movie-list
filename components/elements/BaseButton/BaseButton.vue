<script setup lang="ts">
import { cn } from "~/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { type ButtonHTMLAttributes } from "vue"

const buttonVariants = cva(
  "flex items-center justify-center text-center  text-white cursor-pointer disabled:cursor-not-allowed transition-all transition-500 hover:opacity-80",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        gray: "bg-gray text-black",
        white: "bg-white text-black border border-gray",
        green: "bg-green text-white",
        red: "bg-red text-white",
        yellow: "bg-yellow text-white",
      },
      size: {
        lg: "rounded-lg px-5 py-2.5 lg:text-sm text-xs",
        sm: "rounded-md px-2.5 py-1 lg:text-xs text-[10px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
)

type ButtonProps = VariantProps<typeof buttonVariants>

withDefaults(
  defineProps<{
    variant?: ButtonProps["variant"]
    size?: ButtonProps["size"]
    isLoading?: boolean
    props?: ButtonHTMLAttributes
  }>(),
  {
    variant: "primary",
    size: "lg",
    isLoading: false
  }
)
</script>

<template>
  <button
    :class="cn(buttonVariants({ variant, size }))"
    v-bind="props"
    data-cy="base-button-element"
  >
    <slot></slot>
  </button>
</template>