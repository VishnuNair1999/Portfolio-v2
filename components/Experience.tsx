"use client";
import React, { useState } from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

interface ExperienceCard {
  id: number;
  title: string;
  desc: string;
  thumbnail: string;
  achievements?: string;
  companyName?: string;
  Duration?: string;
  skills?: string[];
}

const Experience = () => {
  const [selectedCard, setSelectedCard] = useState<ExperienceCard | null>(null);

  const openModal = (card: ExperienceCard) => setSelectedCard(card);
  const closeModal = () => setSelectedCard(null);

  return (
    <div className="py-20 w-full relative">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            onClick={() => openModal(card)}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div
            className="w-[90vw] max-w-xl p-6 lg:p-10 border border-white/20 relative"
            style={{
              borderRadius: "1.75rem",
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-lg font-bold hover:scale-110 transition"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-white mb-4">
              {selectedCard.title}
            </h2>
            <p className="text-white mb-3">{selectedCard.achievements}</p>
            <div>
              <h3 className="text-lg text-purple font-semibold mb-2">
                Skills & Learnings:
              </h3>
              <ul className="list-disc list-inside text-white">
                {selectedCard.skills?.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg text-purple font-semibold mb-2">
                Company:
              </h3>
              <div>
                <p>
                  {selectedCard?.companyName} - ( {selectedCard?.Duration} )
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
