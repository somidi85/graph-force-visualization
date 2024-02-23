import React, { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";

const NodeChartDynamic = dynamic(
  () => import("../../components/graph/basic-tree-topology"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NodeChartDynamic />
      </Suspense>
    </>
  );
}
