import { createContext } from "react";

const BlurContext = createContext({
  privacySetting: "",
  onSettingUserPrivacy: () => {},
});

export default BlurContext;
