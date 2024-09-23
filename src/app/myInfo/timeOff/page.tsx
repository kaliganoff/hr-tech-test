'use client'
import { useStore } from "@/zustand/useStore";
import { gql, useQuery } from "@apollo/client";

export default function MyInfoTimeOffPage() {
  const { accessToken, /* refreshToken */ } = useStore();
  const GET_MY_PROFILE = gql`
query {
  myProfile {
    id
    name
    avatar
  }
}
`;
const { /*loading, error,*/ data } = useQuery(GET_MY_PROFILE, {
  context: { headers: { "Authorization": `Bearer ${accessToken}`}
}});

  return (
    <div>MyInfoTimeOffPage {JSON.stringify(data)}</div>
  );
}
