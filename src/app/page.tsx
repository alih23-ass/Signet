"use client";

import React from "react";
import { SkeletonText } from "../subframe/components/SkeletonText";
import { Button } from "../subframe/components/Button";

function SimpleSignInCard() {
  return (
    <div className="container max-w-none flex h-192 w-320 flex-col items-center justify-center gap-2 bg-neutral-50">
      <div className="flex h-144 w-96 flex-none flex-col items-center justify-center gap-16 rounded-md border border-solid border-neutral-border bg-white px-12 py-12">
        <img
          className="flex-none"
          src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
        />
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-4">
            <SkeletonText className="h-10 w-full flex-none" size="default" />
            <SkeletonText className="h-10 w-full flex-none" size="default" />
            <Button
              className="h-10 w-full flex-none"
              size="large"
              icon="FeatherFingerprint"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Verify Identity with Signet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleSignInCard;