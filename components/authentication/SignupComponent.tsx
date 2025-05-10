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
import { FcGoogle } from "react-icons/fc"; // Importing Google icon from react-icons

function SignupComponent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-3xl">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="login-email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input id="login-email" placeholder="Enter Your Email Address" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="user-password">
                Password <span className="text-red-500">*</span>
              </Label>
              <Input
                id="user-password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="user-cpassword">
                Confirm Password <span className="text-red-500">*</span>
              </Label>
              <Input
                id="user-cpassword"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-4">
        <Button className="w-full">Sign Up</Button>

        {/* Or  */}

        <p className="text-sm text-gray-500 font-semibold">OR</p>

        {/* Sign up with Google */}
        <Button
          variant="outline"
          className="w-full flex items-center justify-center space-x-2"
        >
          <FcGoogle className="text-xl" />
          <span>Sign up with Google</span>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SignupComponent;
