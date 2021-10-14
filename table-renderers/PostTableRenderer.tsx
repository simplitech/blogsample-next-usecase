import RenderText from "../components/RenderText";
import RenderDatetime from "../components/RenderDatetime";
import RenderBoolean from "../components/RenderBoolean";
import RenderImage from "../components/RenderImage";
import React from "react";
import {Post} from "../generated/graphql";
import {RenderMap} from "../components/DataTable";

const PostTableRenderer: RenderMap<Post> = {
  id: RenderText,
  createdAt: RenderDatetime,
  updatedAt: RenderDatetime,
  published: RenderBoolean,
  title: RenderText,
  body: (args) => <RenderText {...args} noOfLines={3} />,
  bannerUrl: RenderImage,
  author: (args) => <RenderText {...args} val={args.val.name} />
}

export default PostTableRenderer
