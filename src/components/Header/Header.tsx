import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/zustand/useStore";
import { useRouter } from "next/navigation";

export function Header({ avatar }: { avatar: string }) {
  const { removeTokens } = useStore();
  const router = useRouter();

  function HandleSignOut() {
    removeTokens();
    router.push("/login");
  }
  return (
    <header className="flex px-4 pt-8">
      <div className="text-xl">HarmonyHR</div>
      <nav>
        <ul className="flex text-lg">
          <li className="p-4">Home</li>
          <li className="p-4 border rounded-t-lg bg-sky-200">My Info</li>
          <li className="p-4">People</li>
          <li className="p-4">Hiring</li>
          <li className="p-4">Reports</li>
          <li className="p-4">Files</li>
        </ul>
      </nav>
      <Input className="w-96"></Input>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Button className="text-sm" onClick={HandleSignOut}>
        Sign
        <br />
        Out
      </Button>
    </header>
  );
}
