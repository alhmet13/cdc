import React, { useState, useEffect, useRef } from "react";

export interface LazyImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  skeletonClassName?: string;
  aspectRatio?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt = "",
  className = "",
  containerClassName = "",
  skeletonClassName = "",
  aspectRatio,
  loading = "lazy",
  decoding = "async",
  onLoad,
  onError,
  style,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Tarayıcı önbelleğinde zaten varsa anında loaded durumuna geçir
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div
      className={`lazy-image-container ${isLoaded ? "is-loaded" : "is-loading"} ${containerClassName}`}
      style={aspectRatio ? { aspectRatio, ...style } : style}
    >
      {!isLoaded && !hasError && (
        <div
          className={`lazy-image-skeleton skeleton-shimmer ${skeletonClassName}`}
          aria-hidden="true"
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        className={`lazy-img ${isLoaded ? "lazy-img-loaded" : "lazy-img-loading"} ${className}`}
        onLoad={(e) => {
          setIsLoaded(true);
          if (onLoad) onLoad(e);
        }}
        onError={(e) => {
          setHasError(true);
          if (onError) onError(e);
        }}
        {...rest}
      />
    </div>
  );
};
