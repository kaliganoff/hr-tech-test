import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/zustand/useStore";
import Image from "next/image";
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
      <div className="text-xl font-bold sm:mr-16">HarmonyHR</div>
      <nav className="hidden sm:block">
        <ul className="flex text-lg">
          <li className="p-4 hover:cursor-pointer">Home</li>
          <li className="p-4 hover:cursor-pointer border rounded-t-lg bg-[#dae6f2]">
            My Info
          </li>
          <li className="p-4 hover:cursor-pointer">People</li>
          <li className="p-4 hover:cursor-pointer">Hiring</li>
          <li className="p-4 hover:cursor-pointer">Reports</li>
          <li className="p-4 hover:cursor-pointer">Files</li>
        </ul>
      </nav>
      <Input
        className="hidden sm:block w-96 mr-4"
        placeholder="🔍 Search"
      ></Input>
      <Input className="sm:hidden mr-4 w-10" placeholder="🔍"></Input>
      <Image
        className="sm:hidden size-6 hover:cursor-pointer"
        src="/images/burger.png"
        alt="burger"
        width={24}
        height={24}
      ></Image>
      <div className="flex gap-6 items-center">
        <Image
          className="hidden sm:block size-6 hover:cursor-pointer"
          src="/images/settings.png"
          alt="settings"
          width={24}
          height={24}
        ></Image>
        <Image
          className="hidden sm:block size-6 hover:cursor-pointer"
          src="/images/question.png"
          alt="question"
          width={24}
          height={24}
        ></Image>
        <Image
          className="hidden sm:block size-6 hover:cursor-pointer"
          src="/images/notification.png"
          alt="notification"
          width={21}
          height={24}
        ></Image>
        <Avatar className="hover:cursor-pointer">
          <AvatarImage src={avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button
          className="text-sm"
          onClick={HandleSignOut}
          variant={"secondary"}
        >
          Sign
          <br />
          Out
        </Button>
      </div>
    </header>
  );
}
