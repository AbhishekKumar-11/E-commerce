import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../utils/DataContext";
import Loading from "./Loading";


function Home() {
  const [data, setData] = useContext(DataContext);

  const [filterdP, setfilteredP] = useState(null);

  const { search } = useLocation();

 const params = new URLSearchParams(search)
const decodedValue = params.get('category') 

 

  useEffect(() => {
    if(!data) return;
    if (decodedValue != null) {
      setfilteredP(data.filter((p) => p.category.trim() === decodedValue));
    } else {
      if (data) setfilteredP([...data]);
      
    }
  }, [data, search]);

  return (
    <>
      { filterdP ? (
        <>
          {" "}
          <Nav />
          <div className="h-full w-[85%]  p-12 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
            {filterdP.map((product, index) => (
              <Link
                key={product.id}
                to={`/details/${product.id}`}
                className=" hover:scale-110 hover:text-blue-600 p-5 border shadow  w-[18%]  h-[25vh] flex  flex-col justify-center items-center rounded-xl m-2"
              >
                <div
                  className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-5 "
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <h1 className="">
                  {" "}
                  {product.title.length > 30
                    ? product.title.slice(0, 30) + `...`
                    : product.title}{" "}
                </h1>
              </Link>
            ))}
          </div>{" "}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
