import React from "react";
import Link from "next/link";
import GameIcon from "../src/components/game-icon";
import Desc from "./desc";

export default function Page() {
  return (
    <>
      <h1 className="title-text">𝕄𝕪𝕤𝕥𝕚𝕔 𝕊𝕢𝕦𝕒𝕣𝕖</h1>
      <Desc />
      <section className="choice-container">
        <Link className="choice --3" type="button" href="/game/3">
          <GameIcon type={3}/>
        </Link>
        <Link className="choice --4" type="button" href="/game/4">
          <GameIcon type={4}/>
        </Link>
      </section>
    </>
  );
}