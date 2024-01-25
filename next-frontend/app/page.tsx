import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
    <main className="bg-white h-screen flex items-center justify-center p-10">
      <div className="grid box-animate w-full h-full grid-cols-1 bg-white md:grid-cols-2">
        <div className="bg-[#003263] text-white flex items-center justify-center flex-col">
          <div className="my-4">
            <h1 className="text-3xl font-semibold">
              Login
            </h1>
            <div className="">
              <p className="mt-2 text-xs text-slate-400">
                {" "}
                We're passing a charter amendment
                {' '}
              </p>
              <p className="mt-2 text-xs text-slate-400">
                {" "}
                to build 2002's metrorail plan by 2028.
              </p>
            </div>

          </div>

          <form>
            <Button
              variant="outline"
              className="flex mb-4 items-center w-full gap-4 bx-12 rounded-full bg-transparent">
              <FcGoogle/>
              <span>Join with Google</span>
            </Button>
            <Label htmlFor="email" className="mt-4">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="mt-2 mb-4 rounded-full bg-transparent"
            />
            <Label htmlFor="phone" className="mt-4">Phone Number</Label>
            <Input
              id="phone"
              type="phone"
              placeholder="Phone Number"
              className="mt-2 mb-4 rounded-full bg-transparent"
            />
            <Label htmlFor="password" className="mt-4">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className="mt-2 mb-4 rounded-full bg-transparent"
            />

            <Button
              type="submit"
              className="w-full mt-6 rounded-full bg-[#8DC63F] hover:bg-[#0079C2] text-slate-900">
              Join Now
            </Button>

          </form>
        </div>

        <div className="relative hidden md:block">
          <Image
            className="object-cover"
            fill={true}
            src="/PTP_bg.png"
            alt="picture of the planned metrorail expansions"
          >

          </Image>
        </div>
      </div>

    </main>
  );
}
