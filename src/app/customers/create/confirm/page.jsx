import { Suspense } from "react";
import ConfirmClient from "./ConfirmClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmClient />
    </Suspense>
  );
}

