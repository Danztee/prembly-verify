import { verifyPlateNumber } from "lib/api";

import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(value);
  }

  const call = async () => {
    const res = await verifyPlateNumber(
      "AAA000000",
      "test_ucc8c5fyl6rl78idn3lqjp:ogINip3R6hrzzARkTI42vv13ybY",
      "test_ucc8c5fyl6rl78idn3lqjp:ogINip3R6hrzzARkTI42vv13ybY"
    );

    console.log(res);
  };
  call();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        <form action="" onSubmit={submitHandler}>
          <div>
            <p>Enter a text below</p>
            <input type="text" onChange={changeHandler} value={value} />
          </div>
          <button className="btn">submit</button>
        </form>
      </main>
    </>
  );
}
