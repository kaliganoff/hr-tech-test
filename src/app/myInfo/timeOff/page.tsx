"use client";
import { Header } from "@/components/Header/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useStore } from "@/zustand/useStore";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function MyInfoTimeOffPage() {
  const { accessToken } = useStore();
  const GET_MY_PROFILE = gql`
    query {
      myProfile {
        id
        name
        avatar
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_MY_PROFILE, {
    context: {
      headers: {
        Authorization: `Bearer ${accessToken || localStorage?.tokenStorage?.state?.accessToken}`,
      },
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) redirect("/");

  return (
    <div>
      <Header avatar={data.myProfile.avatar} />
      <div className="bg-[#f0f3f8]">
        <div className="flex bg-[#dae6f2]">
          <Avatar className="size-16 sm:size-36 ml-28 mt-8 z-50">
            <AvatarImage src={data.myProfile.avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="mt-16 ml-16 w-3/5 flex flex-col justify-between">
            <div className="flex justify-between">
              <p className="font-semibold text-[28px]">{data.myProfile.name}</p>
              <div className="hidden sm:flex">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Request change" />
                  </SelectTrigger>
                </Select>
                <Select>
                  <Image
                    className="size-6 mt-2"
                    src="/images/settings.png"
                    alt="settings"
                    width={24}
                    height={24}
                  ></Image>
                  <SelectTrigger className="w-[56px]">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </Select>
              </div>
            </div>
            <ul className="flex gap-4 text-sm ml-[-200px] sm:ml-0">
              <li className="p-4 hover:cursor-pointer">Personal</li>
              <li className="p-4 hover:cursor-pointer">Job</li>
              <li className="bg-white border rounded-t-lg p-4 hover:cursor-pointer">
                Time Off
              </li>
              <li className="p-4 hover:cursor-pointer">Emergency</li>
              <li className="p-4 hover:cursor-pointer">Documents</li>
              <li className="p-4 hover:cursor-pointer">Notes</li>
              <li className="p-4 hover:cursor-pointer">Benefits</li>
              <li className="p-4 hover:cursor-pointer">Training</li>
              <li className="p-4 hover:cursor-pointer">Assets</li>
              <li className="p-4 hover:cursor-pointer">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="More" />
                  </SelectTrigger>
                </Select>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex px-4 sm:px-16 gap-6">
          <div className="sm:flex flex-col gap-4 hidden relative bottom-4 z-0 text-4 font-medium">
            <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl">
              <div className="flex gap-2">
                <Image
                  src={"/images/phone.png"}
                  alt="phone"
                  className="size-4"
                  width={16}
                  height={16}
                />{" "}
                07911 654321
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/letter.png"}
                  alt="letter"
                  className="size-4"
                  width={16}
                  height={16}
                />
                alexandra@hitecvision.net
              </div>
              <div className="flex gap-4">
                <Image
                  src={"/images/in.png"}
                  alt="in"
                  className="size-auto"
                  width={16}
                  height={16}
                />
                <Image
                  src={"/images/facebook.png"}
                  alt="facebook"
                  className="size-auto"
                  width={16}
                  height={16}
                />
                <Image
                  src={"/images/twitter.png"}
                  alt="twitter"
                  className="size-auto"
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <p>Hire Date</p>
              <p>Sep. 3, 2020</p>
              <p>3y - 9m - 20d</p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <div className="flex gap-2">
                <Image
                  src={"/images/hashtag.png"}
                  alt="hashtag"
                  className="size-4"
                  width={16}
                  height={16}
                />
                5
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/clock.png"}
                  alt="clock"
                  className="size-4"
                  width={16}
                  height={16}
                />
                Full-Time
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/people.png"}
                  alt="people"
                  className="size-4"
                  width={16}
                  height={16}
                />
                Europe
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/globe.png"}
                  alt="globe"
                  className="size-4"
                  width={16}
                  height={16}
                />
                Operations
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/location.png"}
                  alt="location"
                  className="size-4"
                  width={16}
                  height={16}
                />
                London, UK
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <div className="flex gap-2">
                <Image
                  src={"/images/person.png"}
                  alt="person"
                  className="size-4"
                  width={16}
                  height={16}
                />
                Direct Reports
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/person.png"}
                  alt="person"
                  className="size-4"
                  width={16}
                  height={16}
                />
                Shane
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/person.png"}
                  alt="person"
                  className="size-4"
                  width={16}
                  height={16}
                />
                Nathan
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/person.png"}
                  alt="person"
                  className="size-4"
                  width={16}
                  height={16}
                />
                Mitchell
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/person.png"}
                  alt="person"
                  className="size-4"
                  width={16}
                  height={16}
                />
                Philip
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/people.png"}
                  alt="people"
                  className="size-4"
                  width={16}
                  height={16}
                />
                4 More...
              </div>
            </div>
          </div>
          <div className="bg-white w-full sm:w-4/5 px-5 pt-11">
            <div className="flex w-full justify-between items-end">
              <div className="flex gap-3 mb-3 text-xl">
                <Image
                  className="size-4 hidden sm:block"
                  src="/images/time-off.png"
                  alt="time-off"
                  width={16}
                  height={16}
                />
                <p className="text-[#204973] hidden sm:block">Time Off</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center">
                <p>Accrual Level Start Date</p>
                <p className="text-[#3758ab] ml-1">03/09/2020</p>
                <Button className="ml-7 mb-3" variant="outline">
                  Add Time Off Policy
                </Button>
              </div>
            </div>
            <Separator className="bg-[#7c96b1]" />
            <div>
              <div className="flex gap-12 pt-6 px-20 w-[888px] ml-[-80px] sm:ml-0">
                <div>
                  <div className="bg-[#f0f3f8] w-64 h-36 flex flex-col justify-center items-center gap-1 rounded-lg">
                    <p className="text-xl font-semibold">Sick</p>
                    <div className="flex text-3xl gap-2">
                      <Image
                        src="/images/cross.png"
                        alt="cross"
                        className="size-7"
                        width={30}
                        height={30}
                      />
                      <p className="font-semibold">3</p>
                    </div>
                    <p className="font-semibold text-sm">Days Available</p>
                    <p className="text-[#7c96b1]">1 day scheduled</p>
                  </div>
                  <p className="mt-2 text-[#7c96b1]">Sick Full-Time</p>
                </div>
                <div>
                  <div className="bg-[#f0f3f8] w-64 h-36 flex flex-col justify-center items-center gap-1 rounded-lg">
                    <p className="text-xl font-semibold">Annual Leave</p>
                    <div className="flex text-3xl gap-2">
                      <Image
                        src="/images/mntns.png"
                        alt="mntns"
                        className="size-7"
                        width={30}
                        height={30}
                      />
                      <p className="font-semibold">10.3</p>
                    </div>
                    <p className="font-semibold text-sm">Days Available</p>
                  </div>
                  <p className="mt-2 text-[#7c96b1]">Holiday Full-Time</p>
                </div>
                <div>
                  <div className="bg-[#f0f3f8] w-64 h-36 flex flex-col justify-center items-center gap-1 rounded-lg">
                    <p className="text-xl font-semibold">Comp/In Lieu Time</p>
                    <div className="flex text-3xl gap-2">
                      <Image
                        src="/images/time-off.png"
                        alt="time-off"
                        className="size-7"
                        width={30}
                        height={30}
                      />
                      <p className="font-semibold">0</p>
                    </div>
                    <p className="font-semibold text-sm">Human Used(YTD)</p>
                  </div>
                  <p className="mt-2 text-[#7c96b1]">
                    Comp/in Lieu Time Flexible Policy
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/images/clock.png"
                  alt="clock"
                  className="size-4"
                  width={16}
                  height={16}
                />
                <p>Upcoming Time Off</p>
              </div>
            </div>
            <Separator className="bg-[#7c96b1]" />
            <div className="flex items-center gap-4">
              <Image
                src="/images/cross.png"
                alt="cross"
                className="size-7"
                width={30}
                height={30}
              />
              <div>
                <p>Jan 27</p>
                <p>1 day of Sick</p>
              </div>
            </div>
            <Separator className="bg-[#7c96b1]" />
            <div className="flex items-center gap-4">
              <Image
                src="/images/piggy-bank.png"
                alt="piggy-bank"
                className="size-7"
                width={30}
                height={30}
              />
              <div>
                <p>Jul 4</p>
                <p>Independence Day</p>
              </div>
            </div>
            <Separator className="bg-[#7c96b1]" />
            <div>
              <div className="flex gap-2">
                <Image
                  src="/images/history.png"
                  alt="history"
                  className="size-4"
                  width={16}
                  height={16}
                />
                3<p>History</p>
              </div>
              <div className="flex flex-col sm:flex-row">
                <Select>
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Sick" />
                  </SelectTrigger>
                </Select>
                <Select>
                  <SelectTrigger className="w-[96px] ml-4">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                </Select>
                <Select>
                  <SelectTrigger className="w-[135px] ml-[470px]">
                    <SelectValue placeholder="Balance History" />
                  </SelectTrigger>
                </Select>
              </div>
              <Table>
                <TableHeader className="bg-[#dae6f2]">
                  <TableRow>
                    <TableHead className="w-[100px] text-black">
                      Date ↓
                    </TableHead>
                    <TableHead className="text-black">Description</TableHead>
                    <TableHead className="text-black">Used Days (-)</TableHead>
                    <TableHead className="text-black text-right">
                      Earned Days (+)
                    </TableHead>
                    <TableHead className="text-black text-right">
                      Balance
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">23/05/2024</TableCell>
                    <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-right">3.00</TableCell>
                    <TableCell className="text-right">3.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">23/05/2024</TableCell>
                    <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
                    <TableCell>-6</TableCell>
                    <TableCell className="text-right"></TableCell>
                    <TableCell className="text-right">3.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">23/05/2024</TableCell>
                    <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-right">3.00</TableCell>
                    <TableCell className="text-right">3.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">23/05/2024</TableCell>
                    <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-right">3.00</TableCell>
                    <TableCell className="text-right">3.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">23/05/2024</TableCell>
                    <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
                    <TableCell>-6</TableCell>
                    <TableCell className="text-right"></TableCell>
                    <TableCell className="text-right">3.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">23/05/2024</TableCell>
                    <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-right">3.00</TableCell>
                    <TableCell className="text-right">3.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
