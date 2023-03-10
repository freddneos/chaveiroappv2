import Head from "next/head";
import React from "react";
import { IKeyRegister } from "@/utils/database";
import axios from "axios";

export default function Home() {
  const [data, setData] = React.useState<IKeyRegister[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const getDataFromApi = React.useCallback(async (): Promise<void> => {
    setIsLoading(true);

    try {
      const response = await axios.get<IKeyRegister[]>(`/api/keys`);
      //@ts-ignore
      setData(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    getDataFromApi();
  }, [getDataFromApi]);

  return (
    <>
      <Head>
        <title>Chaveiro app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Chaveiro app</h1>

        {isLoading && <h2>is Loading...</h2>}
        <ul>
          {data?.map((item) => (
            <li key={item.CODIGO}>{item.CODIGO}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
