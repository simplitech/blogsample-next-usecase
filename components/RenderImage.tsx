import {Image, TextProps} from "@chakra-ui/react";
import React from "react";
import {CellRenderProps} from "./DataTable";

export default function RenderImage<T, k extends keyof T> ({val, model, key, ...textProps}: CellRenderProps<T, k> & TextProps) {
  return <Image src={val.toString()} h={24} maxW={"none"} />
}
