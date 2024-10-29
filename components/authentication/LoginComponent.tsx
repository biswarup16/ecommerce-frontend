import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

function LoginComponent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-3xl">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="login-email">
                Email <span className="text-red-700">*</span>
              </Label>

              <Input id="login-email" placeholder="Enter Your Email Address" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="user-password">
                Password <span className="text-red-700">*</span>
              </Label>

              <Input
                id="user-password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Login</Button>
      </CardFooter>
    </Card>
  );
}

export default LoginComponent;
