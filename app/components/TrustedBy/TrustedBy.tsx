"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const TrustedBy: FC = () => (
  <section className="blurred-section">
    <div className="section xxl:gap-9">
      <h3 className="heading-dark text-subheading text-center">Trusted by</h3>
      <div className="flex flex-col gap-8 items-center justify-center md:flex-row md:gap-20">
        <Link href="https://www.betdex.com">
          <div className="max-w-[150px] h-auto md:max-w-[233px] xxl:max-w-[291]">
            <Image
              src="/betdex-logo.png"
              alt="betdex logo"
              width={291}
              height={77}
            />
          </div>
        </Link>
        <Link href="https://www.purebet.io">
          <div className="max-w-[150px] h-auto md:max-w-[161px] xxl:max-w-[201px]">
            <Image
              src="/purebet-logo.png"
              alt="purebet logo"
              width={201}
              height={135}
            />
          </div>
        </Link>
      </div>
    </div>
  </section>
);
