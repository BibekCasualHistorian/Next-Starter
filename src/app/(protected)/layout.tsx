import Navbar from "./_components/Navbar";

import { Toaster } from "@/components/ui/sonner";
interface ProtectedLayoutPorps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-9 flex items-center gap-4 justify-center min-h-screen flex-col">
      <Toaster />
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
