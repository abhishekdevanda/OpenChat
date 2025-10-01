import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/lib/configs/auth-config";

export const { POST, GET } = toNextJsHandler(auth);
