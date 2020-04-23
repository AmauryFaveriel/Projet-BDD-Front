import React from "react";
import Image from "../components/atoms/image";

export const ImageComponent = ({ testid, src, alt, width, height }) => (
  <Image testid={testid} src={src} alt={alt} width={width} height={height} />
);
