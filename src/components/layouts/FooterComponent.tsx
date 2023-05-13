/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GiPayMoney } from "react-icons/gi";
import { SiKofi } from "react-icons/si";

import clsxm from "@/lib/helpers/clsxm";

import UnderlineLink from "../links/UnderlineLink";
import UnstyledLink from "../links/UnstyledLink";

const FooterComponent = () => {
  return (
    <footer className={clsxm("mt-24 w-full px-4 md:px-1 lg:mt-16")}>
      <div
        className={clsxm(
          "flex flex-wrap items-center justify-center gap-2 sm:justify-between",
          "mx-auto my-4 max-w-4xl"
        )}
      >
        <div
          className={clsxm(
            "flex flex-wrap items-end justify-center",
            "gap-6 md:justify-start"
          )}
        >
          <UnderlineLink
            href="https://is-a.fun"
            className="cursor-newtab font-semibold hover:underline"
          >
            {new Date().getFullYear()} | L RMN
          </UnderlineLink>
        </div>
        <div className="inline-flex gap-6">
          <div className="gap-1">
            <UnderlineLink href="https://ko-fi.com/lrmn7">
              <SiKofi size={20} /> Support me on Ko-fi
            </UnderlineLink>
          </div>
          <UnderlineLink href="https://saweria.co/LRMN">
            <GiPayMoney size={20} /> Support me on Saweria
          </UnderlineLink>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
