import createQueryFn from "../../createQueryFn";
import { User } from "../types";
import { NextRequest, NextResponse } from "next/server";

interface GetUserParams {
  params: {
    id: string
  }
}

export async function GET(
  req: NextRequest,
  { params }: GetUserParams
): Promise<NextResponse<User>> {
  const param = await params;
  const response = await createQueryFn<User>({
    queryFn: () => fetch(`${process.env.USERS_API}/${param.id}`)
  });

  return NextResponse.json(response)
}