<script setup lang="ts">
type Themes =
  | "primary"
  | "secondary"
  | "light"
  | "red"
  | "mustard"
  | "mustard-light";
type Sizes = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl" | "heading";
type FontFamily = "Better" | "Barcade";
type Align = "left" | "center" | "right";
type Transform = "upper" | "";
type Weights =
  | "thin"
  | "extraLight"
  | "light"
  | "regular"
  | "semiBold"
  | "bold"
  | "black";

interface Props {
  size?: Sizes;
  themes?: Themes;
  fontFamily?: FontFamily;
  align?: Align;
  weights?: Weights;
  transform?: Transform;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  align: "left",
  fontFamily: "Better",
  size: "xs",
  themes: "primary",
  weights: "regular",
  transform: "",
  className: "",
});

const classNames = [
  props.align,
  props.fontFamily,
  props.size,
  props.themes,
  props.themes,
  props.weights,
  props.transform,
];
</script>
<template>
  <p :class="[className, ...classNames]"><slot /></p>
</template>
<style lang="scss">
.primary {
  color: $black;
}
.secondary {
  color: $white;
}
.red {
  color: #ba1c19;
}
.mustard {
  color: #ffd776;
  text-shadow: 1px 1px #ff2722;
}
.mustard-light {
  color: #ffd776;
  text-shadow: 3px 0 #ffffff;
}
.light {
  color: $black-light;
}
.xxs {
  font-size: $font-size-xxs;
  line-height: $line-height-xxs;
}
.xs {
  font-size: $font-size-xs;
  line-height: $line-height-xs;
}
.s {
  font-size: $font-size-s;
  line-height: $line-height-s;
}
.m {
  font-size: $font-size-m;
  line-height: $line-height-m;
}
.l {
  font-size: $font-size-l;
  line-height: $line-height-l;
}
.xl {
  font-size: $font-size-xl;
  line-height: $line-height-xl;
}
.xxl {
  font-size: $font-size-xxl;
  line-height: $line-height-xxl;
}
.xxxl {
  font-size: $font-size-xxxl;
  line-height: $line-height-xxxl;
}
.heading {
  font-size: $font-size-heading;
  line-height: $line-height-heading;
}
.thin {
  font-weight: 100;
}
.extraLight {
  font-weight: 200;
}
.light {
  font-weight: 300;
}
.regular {
  font-weight: 400;
}
.semiBold {
  font-weight: 700;
}
.bold {
  font-weight: 800;
}
.black {
  font-weight: 900;
}
.left {
  text-align: left;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
.Better {
  font-family: $font-family-main;
}
.Barcade {
  font-family: $font-family-secondary;
}
.upper {
  text-transform: uppercase;
}
</style>
