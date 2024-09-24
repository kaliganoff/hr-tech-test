"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useStore } from "../../zustand/useStore";
import { useRouter } from "next/navigation";
import { DataType } from "@/types/types";

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'.";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { saveTokens } = useStore();
  const AUTHORIZE = gql`mutation {
    login(email: "${email}", password: "${password}") {
      access_token
      refresh_token
    }
  }`;

  const router = useRouter();

  function HandleLogin(data: DataType) {
    saveTokens(data);
    router.push("myInfo/timeOff");
  }

  const [login] = useMutation(AUTHORIZE, { onCompleted: HandleLogin });

  function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login();
  }

  return (
    <form onSubmit={(e) => HandleSubmit(e)}>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
