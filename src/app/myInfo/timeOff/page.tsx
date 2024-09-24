"use client";
import { Header } from "@/components/Header/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
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

export default function MyInfoTimeOffPage() {
  const { accessToken /* refreshToken */ } = useStore();
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
    context: { headers: { Authorization: `Bearer ${accessToken}` } },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Header avatar={data.myProfile.avatar} />
      <div className="bg-sky-50">
        <div className="flex bg-sky-200">
          <Avatar className="size-36 ml-28 mt-8">
            <AvatarImage src={data.myProfile.avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="mt-16 ml-16">
            <div className="flex">
              <p>{data.myProfile.name}</p>
              <div>
                <Select>Request a Change</Select>
                <Select></Select>
              </div>
            </div>
            <ul className="flex">
              <li>Personal</li>
              <li>Job</li>
              <li>Time Off</li>
              <li>Emergency</li>
              <li>Documents</li>
              <li>Notes</li>
              <li>Benefits</li>
              <li>Training</li>
              <li>Assets</li>
              <li>
                <Select>More</Select>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="sm:flex flex-col gap-4 hidden">
            <div className="p-6 bg-white rounded-2xl">
              <div>07911 654321</div>
              <div>alexandra@hitecvision.net</div>
              <div>
                <Image src="" alt="" />
                <Image src="" alt="" />
                <Image src="" alt="" />
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <p>Hire Date</p>
              <p>Sep. 3, 2020</p>
              <p>3y - 9m - 20d</p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <div>5</div>
              <div>Full-Time</div>
              <div>Europe</div>
              <div>Operations</div>
              <div>London, UK</div>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <div>Direct Reports</div>
              <div>Shane</div>
              <div>Nathan</div>
              <div>Mitchell</div>
              <div>Philip</div>
              <div>4 More...</div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div>
                <Image src="" alt="" />
                <p>Time Off</p>
              </div>
              <div className="flex">
                <p>Accrual Level Start Date</p>
                <p>03/09/2020</p>
                <Button>Add Time Off Policy</Button>
              </div>
            </div>
            <Separator />
            <div>
              <div className="flex">
                <div>
                  <div>
                    <p>Sick</p>
                    <div>
                      <Image src="" alt="" />3
                    </div>
                    <p>Days Available</p>
                    <p>1 day scheduled</p>
                  </div>
                  <p></p>
                </div>
                <div>
                  <div>
                    <p>Annual Leave</p>
                    <div>
                      <Image src="" alt="" />
                      <p>10.3</p>
                    </div>
                    <p>Days Available</p>
                  </div>
                  <p></p>
                </div>
                <div>
                  <div>
                    <p>Comp/In Lieu Time</p>
                    <div>
                      <Image src="" alt="" />
                      <p>0</p>
                    </div>
                    <p>Hours (used/YTD)</p>
                  </div>
                  <p></p>
                </div>
              </div>
              <div>
                <Image src="" alt="" />
                <p>Upcoming Time Off</p>
              </div>
            </div>
            <Separator />
            <div>
              <Image src="" alt="" />
              <div>
                <p>Jan 27</p>
                <p>1 day of Sick</p>
              </div>
            </div>
            <Separator />
            <div>
              <Image src="" alt="" />
              <div>
                <p>Jul 4</p>
                <p>Independence Day</p>
              </div>
            </div>
            <Separator />
            <div>
              <div>
                <Image src="" alt="" />
                <p>History</p>
              </div>
              <div>
                <Select>Sick</Select>
                <Select>All</Select>
                <Select>Balance History</Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Used Days (-)</TableHead>
                    <TableHead className="text-right">
                      Earned Days (+)
                    </TableHead>
                    <TableHead className="text-right">Balance</TableHead>
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
