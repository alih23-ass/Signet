"use client";
/*
 * Documentation:
 * Default Page Layout — https://app.subframe.com/d7741f702434/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Topbar with left nav — https://app.subframe.com/d7741f702434/library?component=Topbar+with+left+nav_3cac908f-e20b-4c42-a91e-8736a54e8799
 * Icon Button — https://app.subframe.com/d7741f702434/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Dropdown Menu — https://app.subframe.com/d7741f702434/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Avatar — https://app.subframe.com/d7741f702434/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { TopbarWithLeftNav } from "../components/TopbarWithLeftNav";
import { IconButton } from "../components/IconButton";
import { DropdownMenu } from "../components/DropdownMenu";
import { Avatar } from "../components/Avatar";

interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex h-screen w-full flex-col items-center rounded-md border border-solid border-neutral-border bg-neutral-950 px-4 py-4",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <TopbarWithLeftNav
        leftSlot={
          <>
            <img
              className="h-6 flex-none object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1734053257/uploads/4312/zfsadgok1ptsbmkdtjyy.png"
            />
            <div className="flex items-center gap-2">
              <TopbarWithLeftNav.NavItem selected={true} icon="FeatherHome">
                Home
              </TopbarWithLeftNav.NavItem>
              <TopbarWithLeftNav.NavItem>Inbox</TopbarWithLeftNav.NavItem>
              <TopbarWithLeftNav.NavItem>Contacts</TopbarWithLeftNav.NavItem>
            </div>
          </>
        }
        rightSlot={
          <>
            <IconButton />
            <IconButton icon="FeatherBell" />
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg">
                  A
                </Avatar>
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="end"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>
                    <DropdownMenu.DropdownItem icon="FeatherUser">
                      Profile
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon="FeatherSettings">
                      Settings
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon="FeatherLogOut">
                      Log out
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
          </>
        }
      />
      {children ? (
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 overflow-y-auto bg-default-background">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;
