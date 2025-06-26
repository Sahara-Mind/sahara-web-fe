"use client";

import HydrogenLayout from "@/layouts/hydrogen/layout";
import GlobalDrawer from "@/app/shared/drawer-views/container";
import GlobalModal from "@/app/shared/modal-views/container";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <HydrogenLayout>{children}</HydrogenLayout>
      <GlobalDrawer />
      <GlobalModal />
    </React.Fragment>
  );
}
