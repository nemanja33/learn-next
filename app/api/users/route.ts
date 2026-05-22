import { NextResponse } from "next/server";
import createQueryFn from "../createQueryFn";
import { User } from "./types";

export async function GET(): Promise<NextResponse<User[]>> {
  const promise = await createQueryFn<User[]>({
    queryFn: () => fetch(process.env.USERS_API as string)
  });
  return NextResponse.json(promise);
}