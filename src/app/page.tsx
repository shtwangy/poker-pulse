'use client';

import React, { useState } from 'react';

const SUITS = ['♠', '♥', '♦', '♣'];
const RANKS = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

export default function PokerApp() {
  const [myHand, setMyHand] = useState<(Array<string | null>)>([null, null]);
  const [board, setBoard] = useState<(Array<string | null>)>([null, null, null]);

  // カードを選択した時の処理（空いているスロットに入れる）
  const selectCard = (card: string) => {
    const handIndex = myHand.indexOf(null);
    if (handIndex !== -1) {
      const newHand = [...myHand];
      newHand[handIndex] = card;
      setMyHand(newHand);
    }
  };

  return (
      <div className="p-8 bg-gray-900 min-h-screen text-white">
        <h1 className="text-2xl font-bold mb-6 text-center">Poker Equity Calc</h1>

        {/* スロット表示エリア */}
        <div className="flex justify-center gap-4 mb-8">
          <div>
            <p className="text-sm text-gray-400 mb-2">My Hand</p>
            <div className="flex gap-2">
              {myHand.map((card, i) => (
                  <div key={i} className="w-12 h-16 border-2 border-dashed border-gray-600 rounded flex items-center justify-center bg-gray-800 text-xl">
                    {card}
                  </div>
              ))}
            </div>
          </div>
        </div>

        {/* カードセレクター */}
        <div className="max-w-md mx-auto bg-gray-800 p-4 rounded-xl shadow-lg">
          <div className="grid grid-cols-4 gap-2">
            {SUITS.map(suit => (
                <div key={suit} className="flex flex-col gap-1">
                  {RANKS.map(rank => (
                      <button
                          key={rank + suit}
                          onClick={() => selectCard(rank + suit)}
                          className="bg-gray-700 hover:bg-blue-600 p-1 rounded text-sm transition"
                      >
                        {rank}{suit}
                      </button>
                  ))}
                </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-green-600 hover:bg-green-500 px-8 py-3 rounded-full font-bold text-lg">
            Calculate Win Rate
          </button>
        </div>
      </div>
  );
}