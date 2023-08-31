import "./styles.css";

import { Viewer } from "@photo-sphere-viewer/core";
import { CubemapAdapter } from "@photo-sphere-viewer/cubemap-adapter";

let viewer2 = new Viewer({
  container: "viewer",
  adapter: CubemapAdapter,
  panorama: {
    type: "net",
    path:
      "https://nestjs-mobile-gateway-service.vercel.app/api/museums/1/tours/2/assets/5625a98c-98ad-4673-9794-53280a021098/file"
  },
  caption: "Parc national du Mercantour <b>&copy; Damien Sorel</b>",
  touchmoveTwoFingers: false,
  mousewheelCtrlKey: false
});
