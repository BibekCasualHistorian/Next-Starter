import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center text-white">
        <h1 className="text-5xl mb-3">🔐 Home</h1>
        <p className="text-3xl mt-3 mb-6 text-balance">
          Welcome to the robust authentication in Next.js
        </p>
        <LoginButton>
          <Button variant={"secondary"}>Click Me</Button>
        </LoginButton>
      </div>
    </div>
  );
}
