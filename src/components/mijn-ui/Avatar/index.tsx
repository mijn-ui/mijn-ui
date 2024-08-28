import React, { ComponentProps, forwardRef, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const avatarStyles = cva(
  [
    "relative flex items-center justify-center shrink-0 overflow-hidden ring-ring-white bg-muted rounded-full ring-1",
  ],
  {
    variants: {
      size: {
        xxl: "h-16 w-16 text-base",
        xl: "h-14 w-14 text-sm",
        lg: "h-12 w-12 text-sm",
        default: "h-10 w-10 text-sm",
        sm: "h-8 w-8 text-xs",
        xs: "h-6 w-6 text-xs",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type AvatarProps = ComponentProps<"img"> &
  VariantProps<typeof avatarStyles> & {
    name?: string;
    src: string;
    alt?: string;
  };

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ size, name, src, alt, className, ...props }, ref) => {
    const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    const handleImageLoad = () => {
      setIsImageLoading(false);
    };

    const handleImageError = () => {
      setIsImageLoading(false);
      setHasError(true);
    };

    /* eslint-disable */

    return (
      <div ref={ref} className={cn(avatarStyles({ size, className }))}>
        {src && !hasError ? (
          <img
            alt={alt || "avatar"}
            src={src}
            className={cn("h-full w-full object-cover", {
              hidden: isImageLoading,
            })}
            onLoad={handleImageLoad}
            onError={handleImageError}
            {...props}
          />
        ) : (
          <span>{name?.substring(0, 1)}</span>
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

type AvatarGroupProps = ComponentProps<"div"> &
  VariantProps<typeof avatarStyles> & {
    max?: number;
  };

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max, children, className, ...props }, ref) => {
    const childArray = React.Children.toArray(children);
    const visibleChildren = max ? childArray.slice(0, max) : childArray;
    const remainingChildrenCount = max ? childArray.length - max : 0;

    return (
      <div
        className={cn("flex items-center justify-center -space-x-2", className)}
        {...props}
        ref={ref}
      >
        {visibleChildren}
        {remainingChildrenCount > 0 && (
          <div
            className={
              "!ml-1.5 flex items-center justify-center text-xs text-muted-foreground"
            }
          >
            +{remainingChildrenCount}
          </div>
        )}
      </div>
    );
  },
);

AvatarGroup.displayName = "AvatarGroup";

export { Avatar, AvatarGroup };
