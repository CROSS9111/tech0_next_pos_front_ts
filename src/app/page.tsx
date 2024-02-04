'use client'
import { useState,useEffect } from 'react';
// import BarcodeReader from "./components/BarcodeReader";
// import ProductDisplay from './components/ProductDisplay';
// import PurchaseList from './components/PurchaseList';
import TitleBar from './components/TitleBar';

// 型定義
type Producttype = {
  PRD_ID: number;
  PRD_CD: string;
  PRD_NAME: string;
  PRD_PRICE: number;
};

export default function Home() {
  const [product, setProduct] = useState<Producttype | null>(null);
  const [items, setItems] = useState<Producttype[]>([]);
  const [showScanner, setShowScanner] = useState<boolean>(false);
  const [animateTriangle, setAnimateTriangle] = useState<boolean>(false);
  const [searchCode, setSearchCode] = useState<string>("");


  

  return (
    <>
    <TitleBar/>
    {product?.PRD_CD}
    </>
  );
}

// const aaa = {
//   PRD_ID: 1,
//   PRD_CD: "a",
//   PRD_NAME: "bbb",
//   PRD_PRICE: 22,
// }
// useEffect(() => {
//   setProduct(aaa);
// }, []);