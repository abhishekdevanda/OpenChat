import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/configs/auth-config";
import { MessageCircleDashed } from "lucide-react";
import { LoginForm } from "./_components/login-form";

export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <MessageCircleDashed className="size-4" />
          </div>
          OpenChat
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
