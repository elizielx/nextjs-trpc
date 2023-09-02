"use client";

import { trpc } from "@/trpc/trpc";

// a Client Component that makes an RPC and displays the result

export default function RpcClientComponent(): JSX.Element {
  const name = trpc.userById.useQuery(1);

  if (name.data == undefined) {
    if (name.isLoading) {
      return <p className="p-4">Loading</p>;
    }

    console.log("name.data undefined");
    return <p className="p-4">did not work</p>;
  }
  console.log(`result.data is ${JSON.stringify(name.data)}`);

  return (
    <p className="p-4">
      Hello, {name.data!.name}, greetings from client component land!
    </p>
  );
}
