"use server"

import jwt, { JwtPayload } from "jsonwebtoken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type LoginState = {
    success : true,
    statusCode : number,
    message : string,
    data : {
        accessToken : string,
        refreshToken : string
    }
}


export const loginAction = async (redirectTo : string, prevState : LoginState , formData: FormData) => {

    const email = formData.get("email");
    const password = formData.get("password");

    const payload = {
        email,
        password
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(payload)
    });

    const result = await res.json();

    if(result.success){
        const cookieStore = await cookies()

        cookieStore.set("accessToken", result.data.accessToken , {
            httpOnly : true,
            maxAge : 60 * 60 * 24,
            sameSite : "lax",
        });
        cookieStore.set("refreshToken", result.data.refreshToken , {
            httpOnly : true,
            maxAge : 60 * 60 * 24 * 7,
            sameSite : "lax",
        });

        const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

        if(redirectTo && typeof redirectTo === "string" && redirectTo.startsWith("/") && !redirectTo.startsWith("//")){
            redirect(redirectTo)
        }

        if(decodedToken.role === "USER"){
            redirect("/dashboard");
        } else if (decodedToken.role === "ADMIN"){
            redirect("/admin-dashboard");
        } else if (decodedToken.role === "AUTHOR"){
            redirect("/author-dashboard");
        }
    }

    return result
}



type RegisterState = {
  success: boolean;
  message: string;
  errorDetails?: unknown;
  data?: {
    accessToken: string;
    refreshToken: string;
  };
  redirectTo?: string;
};

export const registerAction = async (
  redirectTo: string,
  prevState: RegisterState | false,
  formData: FormData
) => {
  const name = formData.get("fullName");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");

   const payload = {
    name,
    email,
    password,
    role,
  };


  const registerRes = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const registerResult = await registerRes.json();

  if (!registerResult.success) {
    return registerResult; 
  }

  
  const loginPayload = {
    email,
    password,
  };
  const loginRes = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  });

  const loginResult = await loginRes.json();

  if (!loginResult.success) {
    
    return {
      success: true,
      message: "Account created! Please log in.",
    };
  }


  const cookieStore = await cookies();

  cookieStore.set("accessToken", loginResult.data.accessToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
  });

  cookieStore.set("refreshToken", loginResult.data.refreshToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
  });

  const decodedToken = jwt.decode(loginResult.data.accessToken) as JwtPayload;

  let finalRedirect = "/";

  if (
    redirectTo &&
    redirectTo.startsWith("/") &&
    !redirectTo.startsWith("//")
  ) {
    finalRedirect = redirectTo;
  };

  if (!redirectTo) {
    switch (decodedToken.role) {
      case "USER":
        finalRedirect = "/dashboard";
        break;
      case "AUTHOR":
        finalRedirect = "/author-dashboard";
        break;

      case "ADMIN":
        finalRedirect = "/admin-dashboard";
        break;

      default:
        finalRedirect = "/";
    }
  }


  return {
    ...loginResult,
    message: "Account created and logged in successfully!",
    redirectTo: finalRedirect,
  };
};