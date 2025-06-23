import type { Metadata } from "next";

import { inter, lexendDeca } from "@/app/fonts";
import cn from "@core/utils/class-names";
import NextProgress from "@core/components/next-progress";
import HydrogenLayout from "@/layouts/hydrogen/layout";
import { ThemeProvider, JotaiProvider } from "@/app/shared/theme-provider";
import GlobalDrawer from "@/app/shared/drawer-views/container";
import GlobalModal from "@/app/shared/modal-views/container";
import React from "react";

export const metadata: Metadata = {
  title: "Sahara Minds Web Application",
  description: "This is the isomorphic starter pack for Sahara Minds",
};


export default function DashboardLayout({ children, admin, tables }: { children: React.ReactNode; admin: React.ReactNode; tables?: React.ReactNode }) {
  return (
    // <ThemeProvider>
    //   <NextProgress />
    //   <JotaiProvider>
    <>
      <HydrogenLayout>
        {admin}
        {tables}
        {children}
      </HydrogenLayout>
    </>
    //     <GlobalDrawer />
    //     <GlobalModal />
    //   </JotaiProvider>
    // </ThemeProvider>
  );
}
