import { Toaster } from "@/components/ui/sonner";
import KarthikMobileApp from "./pages/KarthikMobileApp";

export default function App() {
  return (
    <>
      <KarthikMobileApp />
      <Toaster position="bottom-center" richColors />
    </>
  );
}
