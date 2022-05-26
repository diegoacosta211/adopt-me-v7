import { useState, useEffect } from "react";
import { Animal, BreedListApiResponse } from "../types";

const localCache: {
  [index: string]: string[]
} = {};

type Status = "unloaded" | "loading" | "loaded";

const useBreedList = (animal?: Animal): [string[], string] => {
  const [breedList, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState("unloaded" as Status);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      void requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([])
      setStatus("loading");
      if (animal) {
        const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
        const result = (await res.json()) as BreedListApiResponse;
        localCache[animal] = result.breeds || [];
        setBreedList(localCache[animal]);
      }
      setStatus("loaded");
    }
  }, [animal]);

  return [ breedList, status ];
};

export default useBreedList;
