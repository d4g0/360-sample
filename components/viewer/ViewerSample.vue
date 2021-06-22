<template>
  <div class="text-white font-sans">
    <div
      class="p-8 fixed bottom-0 left-0 z-10 w-full flex flex-col justify-center items-center"
    >
      <p class="">360 demo by 
        <a
          href="https://github.com/d4g0"
          class="text-amber-600 hover:text-amber-500"
        >
        d4g0
        </a>
        </p>
      <p>
        picture by
        <a
          href="https://www.flickr.com/photos/jonragnarsson/2294472375/"
          class="text-amber-600 hover:text-amber-500"
        >
          Jon Ragnarsson
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import create360Viewer from "360-image-viewer";
import canvasFit from "canvas-fit";
import { onMounted, ref } from "@vue/composition-api";

export default {
  setup() {
    var mount_point = ref();
    function setUpViewer() {
      if (process.client) {
        var viewer;

        const image = new Image();
        image.src = "img/house.jpg";
        image.onload = onLoadImage;

        function onLoadImage() {
          viewer = create360Viewer({
            image,
          });
          document.body.appendChild(viewer.canvas);

          const fit = canvasFit(viewer.canvas, window, window.devicePixelRatio);
          window.addEventListener("resize", fit, false);
          fit();

          // start the render loop
          viewer.start();
        }
      }
    }

    onMounted(setUpViewer);

    return {
      mount_point,
    };
  },
};
</script>

<style>
</style>