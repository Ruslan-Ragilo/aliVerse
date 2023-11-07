<template>
  <div>
    <SvgPanZoom
      style="width: 1250px; height: 100%"
      :zoom-enabled="true"
      :control-icons-enabled="false"
      :fit="true"
      :contain="true"
      :min-zoom="1"
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
          @touchstart="findJabka"
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
    <svg
      id="svgControls"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="87"
      viewBox="0 0 40 87"
      fill="none"
    >
      <g clip-path="url(#clip0_301_77676)">
        <rect width="40" height="87" rx="10" fill="white" />
        <rect x="18.7783" y="9.77808" width="2" height="20" fill="#333333" />
        <rect
          x="29.7783"
          y="18.7781"
          width="2"
          height="20"
          transform="rotate(90 29.7783 18.7781)"
          fill="#333333"
        />
        <rect
          x="29.7783"
          y="65"
          width="2"
          height="20"
          transform="rotate(90 29.7783 65)"
          fill="#333333"
        />
        <rect
          x="40"
          y="43"
          width="1"
          height="40"
          transform="rotate(90 40 43)"
          fill="#F9F9F9"
        />
        <rect
          id="zoomPlus"
          x="0"
          y="0"
          width="43"
          height="43"
          fill="#D9D9D9"
          fill-opacity="0.05"
          @click="zoomIn"
        />
        <rect
          id="zoomMinus"
          x="0"
          y="44"
          width="43"
          height="43"
          fill="#D9D9D9"
          fill-opacity="0.05"
          @click="zoomOut"
        />
      </g>
      <defs>
        <clipPath id="clip0_301_77676">
          <rect width="40" height="87" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script setup>
import { SvgPanZoom } from "vue-svg-pan-zoom";
const store = useFrogStore();
const svg = ref(null);
const basicZoom = ref(null);
const zoomIn = async () => {
  svg.value.zoomIn();
};
const zoomOut = async () => {
  svg.value.zoomOut();
};
function created(obj) {
  svg.value = obj;
  obj.setBeforePan(beforePan);
  // console.log(svg.value)
}
function beforePan(oldPan, newPan) {
  const gutterWidth = svg.value.getSizes().width;
  const gutterHeight = svg.value.getSizes().height;
  const sizes = svg.value.getSizes();
  console.log(sizes)
  let leftLimit;
  let rightLimit;
  if (window.innerWidth < sizes.width) {
    // Пошаманить формулу
    leftLimit =
      -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + window.innerWidth;
    rightLimit = sizes.width - window.innerWidth - sizes.viewBox.x * sizes.realZoom;
    // leftLimit = (-(sizes.width * sizes.realZoom - window.innerWidth));
    // rightLimit = ((sizes.width * sizes.realZoom - window.innerWidth) + window.innerWidth);
    console.log(leftLimit)
    console.log(rightLimit)
    // Пошаманить формулу
    svg.value.disableZoom();
    svg.value.disableDblClickZoom();
  } else {
    leftLimit =
      -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + gutterWidth;
    rightLimit = sizes.width - gutterWidth - sizes.viewBox.x * sizes.realZoom;
    console.log(leftLimit)
    console.log(rightLimit)
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
  // console.log("qwe");
  store.finishGame();
}
</script>

<style lang="scss" scoped>
#svgControls {
  position: absolute;
  bottom: 41px;
  right: 41px;
  cursor: pointer;
}
#zoomPlus:hover,
#zoomMinus:hover {
  filter: brightness(0.1);
}
</style>
