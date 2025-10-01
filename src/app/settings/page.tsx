import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/configs/auth-config";

export default async function SettingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <h1>Settings Page</h1>
  );
}
