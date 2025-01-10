"use client";
/*
 * Documentation:
 * Topbar with center logo — https://app.subframe.com/d7741f702434/library?component=Topbar+with+center+logo_913b7c80-24e7-4703-98b2-33b06df146a5
 * Icon Button — https://app.subframe.com/d7741f702434/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Button — https://app.subframe.com/d7741f702434/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  icon?: SubframeCore.IconName;
  children?: React.ReactNode;
  className?: string;
}

const NavItem = React.forwardRef<HTMLElement, NavItemProps>(function NavItem(
  {
    selected = false,
    icon = null,
    children,
    className,
    ...otherProps
  }: NavItemProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/f86eab8a flex cursor-pointer items-center justify-center gap-2 rounded-md px-2 py-1",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <SubframeCore.Icon
        className={SubframeCore.twClassNames(
          "text-body font-body text-subtext-color group-hover/f86eab8a:text-default-font",
          { "text-default-font": selected }
        )}
        name={icon}
      />
      {children ? (
        <span
          className={SubframeCore.twClassNames(
            "text-body font-body text-subtext-color group-hover/f86eab8a:text-default-font",
            { "text-body-bold font-body-bold text-default-font": selected }
          )}
        >
          {children}
        </span>
      ) : null}
    </div>
  );
});

interface TopbarWithCenterLogoRootProps
  extends React.HTMLAttributes<HTMLElement> {
  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  className?: string;
}

const TopbarWithCenterLogoRoot = React.forwardRef<
  HTMLElement,
  TopbarWithCenterLogoRootProps
>(function TopbarWithCenterLogoRoot(
  {
    leftSlot,
    centerSlot,
    rightSlot,
    className,
    ...otherProps
  }: TopbarWithCenterLogoRootProps,
  ref
) {
  return (
    <nav
      className={SubframeCore.twClassNames(
        "flex w-full items-center gap-4 border-b border-solid border-neutral-border bg-default-background px-4 py-4",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {leftSlot ? (
        <div className="flex grow shrink-0 basis-0 items-center gap-2">
          {leftSlot}
        </div>
      ) : null}
      {centerSlot ? (
        <div className="flex grow shrink-0 basis-0 items-center justify-center gap-1">
          {centerSlot}
        </div>
      ) : null}
      {rightSlot ? (
        <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2">
          {rightSlot}
        </div>
      ) : null}
    </nav>
  );
});

export const TopbarWithCenterLogo = Object.assign(TopbarWithCenterLogoRoot, {
  NavItem,
});
