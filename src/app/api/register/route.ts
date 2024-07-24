import useRegisterMutation from "@/API/data/users/use-register-merchant.mutations";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  // * REGISTER HOOK
  const REGISTER = useRegisterMutation();

  const { name, email, password } = await request.json();
  REGISTER.mutate(
    { variables: { full_name: name, email, password } },
    {
      onSuccess: () => {
        return new NextResponse("User has been created", {
          status: 201,
        });
      },
      onError: (error: any) => {
        return new NextResponse(error.mesage, {
          status: 500,
        });
      },
    }
  );
};
