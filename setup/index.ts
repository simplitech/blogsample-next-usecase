import SetupI18next from "./SetupI18next";
import SetupNextUrql from "../setup/SetupNextUrql";

export default function setup (App: any) {
  SetupI18next()
  return SetupNextUrql(App)
}
