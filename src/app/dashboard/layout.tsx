"use client";

import HydrogenLayout from "@/layouts/hydrogen/layout";
import GlobalDrawer from "@/app/shared/drawer-views/container";
import GlobalModal from "@/app/shared/modal-views/container";
import React from "react";

export default function DashboardLayout({
  children,
  admin,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <HydrogenLayout>
        {admin}
      </HydrogenLayout>
      <GlobalDrawer />
      <GlobalModal />
    </React.Fragment>
  );
}
