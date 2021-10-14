import {Text} from "@chakra-ui/react";
import React from "react";
import {CellRenderProps} from "./DataTable";

export default function RenderDatetime<T, k extends keyof T> ({val}: CellRenderProps<T, k>) {
  return <Text>{new Date(val.toString()).toLocaleString()}</Text>
}
