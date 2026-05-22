import { NextRequest, NextResponse } from "next/server";
import createQueryFn from "../../createQueryFn";
import { Post } from "../types";

interface GetPostParams {
  params: {
    id: string
  }
}

export async function GET(
  req: NextRequest,
  { params }: GetPostParams
): Promise<NextResponse<Post[]>> {
  const param = await params;
  const response = await createQueryFn<Post[]>({
    queryFn: () => fetch(`${process.env.POSTS_API}?userId=${param.id}`)
  });

  return NextResponse.json(response);
}
