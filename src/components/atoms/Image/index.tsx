import React, { useMemo } from "react";
import useDeviceQueries from "hooks/useDeviceQueries";
import { mapModifiers } from "utils/functions";

export type SizeImageType = "cover" | "contain" | "inherit" | "initial";

export interface ImageProps {
  src: string;
  srcTablet?: string;
  srcMobile?: string;
  alt?: string;
  ratio: Ratio;
  size?: SizeImageType;
  loading?: "eager" | "lazy",
}

const Image: React.FC<ImageProps> = ({
  src,
  srcTablet,
  srcMobile,
  alt,
  ratio,
  size,
  loading,
}) => {
  const { isMobile, isTablet } = useDeviceQueries();

  const sourceImage = useMemo(() => {
    if (isMobile) {
      return srcMobile || src;
    }
    if (isTablet) {
      return srcTablet || src;
    }
    return src;
  }, [isMobile, isTablet, src, srcTablet, srcMobile]);

  return (
    <div
      className={mapModifiers("a-image", ratio, size)}
    >
      <img src={sourceImage} alt={alt} loading={loading} />
    </div>
  );
};

Image.defaultProps = {
  srcTablet: undefined,
  srcMobile: undefined,
  size: "cover",
  loading: "eager",
};

export default Image;
