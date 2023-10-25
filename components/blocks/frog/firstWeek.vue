<template>
  <div>
    <SvgPanZoom
      style="width: 1250px; height: 100%"
      :zoomEnabled="true"
      :controlIconsEnabled="false"
      :fit="true"
      :contain="true"
      :minZoom="1"
      @created="created"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1242 712"
        width="1242"
        height="712"
        fill="none"
      >
        <rect
          width="1242"
          height="712"
          fill="url(#pattern0)"
          style="user-select: none; pointer-events: none"
        />
        <rect
          x="30"
          y="466"
          width="8"
          height="10"
          fill="#33333300"
          style="z-index: 9999; position: relative"
          @click="findJabka"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image0_305_197606"
              transform="matrix(0.000244141 0 0 0.000425875 0 -0.0144564)"
            />
          </pattern>
          <filter
            id="filter0_d_305_197606"
            x="1136"
            y="10"
            width="100"
            height="100"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_305_197606"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_305_197606"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_305_197606"
            x="1136"
            y="537"
            width="100"
            height="147"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_305_197606"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_305_197606"
              result="shape"
            />
          </filter>

          <clipPath id="clip0_305_197606">
            <rect width="1242" height="712" fill="white" />
          </clipPath>
          <clipPath id="clip1_305_197606">
            <rect
              x="1166"
              y="563"
              width="40"
              height="87"
              rx="10"
              fill="white"
            />
          </clipPath>
          <image
            id="image0_305_197606"
            width="4096"
            height="2416"
            xlink:href="@/assets/images/png/firstWeekFrog.jpg"
          />
        </defs>
      </svg>
    </SvgPanZoom>
  </div>
</template>

<script setup>
import { SvgPanZoom } from "vue-svg-pan-zoom";
const store = useFrogStore();
const svg = ref(null);
function created(obj) {
  svg.value = obj;
  obj.setBeforePan(beforePan);
}
function beforePan(oldPan, newPan) {
  const gutterWidth = svg.value.getSizes().width;
  const gutterHeight = svg.value.getSizes().height;
  const sizes = svg.value.getSizes();
  let leftLimit;
  let rightLimit;
  if (window.innerWidth < 1300) {
    leftLimit = (-(sizes.width - window.innerWidth) / 2) * sizes.realZoom;
    rightLimit = ((sizes.width - window.innerWidth) / 2) * sizes.realZoom;
    svg.value.disableZoom();
  } else {
    leftLimit =
      -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + gutterWidth;
    rightLimit = sizes.width - gutterWidth - sizes.viewBox.x * sizes.realZoom;
  }
  const topLimit =
    -((sizes.viewBox.y + sizes.viewBox.height) * sizes.realZoom) + gutterHeight;
  const bottomLimit =
    sizes.height - gutterHeight - sizes.viewBox.y * sizes.realZoom;
  const customPan = {};
  customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x));
  customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y));
  return customPan;
}
function findJabka() {
  console.log("qwe");
  store.finishGame();
}
</script>

<style lang="scss" scoped></style>
