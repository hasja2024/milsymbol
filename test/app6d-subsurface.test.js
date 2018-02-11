import { ms } from "../src/ms";
import milstd from "../src/milstd";
import verify from "./app6d";
ms.setStandard("APP6");

import icons from "../src/numbersidc/sidc/subsurface";
ms.addIcons(icons);

verify(ms, milstd, "APP-6 D Sea Subsurface", "35");