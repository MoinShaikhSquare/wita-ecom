import { useEffect } from "react";
import Layout from "../components/Layout.jsx";
import { data } from "../utils/data";
import Image from "next/image";

function Home() {
  let products = data.products;
  const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div>
      <Layout>
        <div>
          <div className="cards-wrapper">
            {products.map((item, i) => (
              <div className="card" key={item.name + i}>
                <div className="card-header">
                  <h1>{item.name}</h1>
                </div>
                <div className="card-image">
                  <Image
                    loader={myLoader}
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={500}
                  ></Image>
                </div>
                <div className="card-price">${item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
