import React from "react";
import Game from "../game";

export function generateStaticParams() {
  return [{ type: '3' }, { type: '4' }]
}

export default async function Page({params}: {params: Promise<{ type: string }>}) {
  const { type } = await params;
  const gameType = type === '3' ? 3 : 4;
  return (
    <Game type={gameType}/>
  );
}
