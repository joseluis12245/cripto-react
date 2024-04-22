import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result)
const loading = useCryptoStore((state) => state.loading)
  const hasResult = useMemo(
    () => !Object.values(result).includes('') ,
    [result]
  )

  return (
    <div className="result-wrapper">
      {loading ? <Spinner /> : hasResult && (
        <>
          <h2>Quote</h2>
          <div className="result">
            <img 
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                alt={"Crypto Image"}
            />
            <div>
              <p>
                The price is about: <span>{result.PRICE}</span>
              </p>
              <p>
               High price in the day: <span>{result.HIGHDAY}</span>
              </p>
              <p>
                Lowest price in the day: <span>{result.LOWDAY}</span>
              </p>
              <p>
               Changes last 24 hours: <span>{result.CHANGEPCT24HOUR}</span>
              </p>
              <p>
                Last Update: <span>{result.LASTUPDATE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
