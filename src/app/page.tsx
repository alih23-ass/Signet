"use client";

import React from "react";
import { DefaultPageLayout } from "../subframe/layouts/DefaultPageLayout";
import { SkeletonText } from "../subframe/components/SkeletonText";
import { Button } from "../subframe/components/Button";

function MinimalSignInPage() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-center justify-center rounded-md border border-solid border-brand-primary bg-white py-12 mobile:rounded-none">
        <div className="flex w-full max-w-[320px] flex-col items-center justify-center gap-8 px-12 py-12">
          <div className="flex flex-col items-center justify-center gap-6">
            <img
              className="h-10 flex-none object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1736608945/uploads/4312/lrfwmmvonqvcoz4g2b6e.svg"
            />
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Welcome
              </span>
              <span className="text-body font-body text-subtext-color mobile:text-subtext-color">
                Login or Verify with Signet
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <div className="flex w-full flex-col items-center gap-2">
              <SkeletonText className="mobile:h-10 mobile:w-full mobile:flex-none" />
              <SkeletonText className="mobile:h-10 mobile:w-full mobile:flex-none" />
              <Button
                className="h-10 w-full flex-none"
                variant="brand-secondary"
                size="large"
                icon="FeatherScanFace"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Verify with Signet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default MinimalSignInPage;