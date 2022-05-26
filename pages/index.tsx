import type { NextPage } from "next";
import React, { useEffect } from "react";
import Card from "../components/card";
import Utils from "../utils";

export interface Currency {
  symbol: string;
  order: number;
  currency1: string;
  currency2: string;
  status: string;
  tags: string[];
  mfee: number;
  tfee: number;
  group_precision: number;
  liq: number;
  bamount: number;
  open: number;
  high: number;
  low: number;
  last: number;
  volume: number;
  quote_volume: number;
  highest_bid: number;
  lowest_ask: number;
  pricing: number[];
}

const Home: NextPage = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    Utils.fetchData()
      .then((res) => setData(res))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="root">
      <h1 className="text-lg leading-6 font-medium text-gray-900 mt-14">
        Currency Pair
      </h1>
      <div className="flex justify-around items-center flex-wrap m-16">
        {data.length ? (
          data.map((item: Currency) => <Card key={item.order} item={item} />)
        ) : (
          <h1 className="text-5xl leading-6 font-medium text-gray-900 mt-14">
            loading ...
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
