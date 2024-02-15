"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  WhatsappFilledIcon,
  InstagramSquareIcon,
} from "mage-icons-react/social-bw";
import { PhoneIcon, EmailIcon } from "mage-icons-react/bulk";
import { PlusIcon } from "mage-icons-react/stroke";

export default function SpeedDial() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSpeedDial = () => setIsOpen(!isOpen);
  const closeSpeedDial = (e) => {
    if (e.target.closest(".speed-dial-container") === null) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("click", closeSpeedDial);
      return () => window.removeEventListener("click", closeSpeedDial);
    }
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      <div
        className="speed-dial-container"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="secondary"
          className=" hover:scale-110 transition-transform rounded-full w-12 h-12 p-0 flex items-center justify-center"
          onClick={toggleSpeedDial}
        >
          <PlusIcon className="w-6 h-6" />
        </Button>
        {isOpen && (
          <div className="absolute bottom-10 right-0 flex flex-col items-center">
            <Button
              asChild
              variant="secondary"
              className="hover:scale-110 hover:animate-wiggle-more hover:animate-twice
              hover:animate-duration-[400ms] hover:animate-ease-in transition-transform
              rounded-full w-12 h-12 p-0 flex items-center justify-center mb-2"
            >
              <a href="whatsapp-url">
                <WhatsappFilledIcon className="w-6 h-6" />
              </a>
            </Button>
            <Button
              variant="secondary"
              className="hover:scale-110 hover:animate-wiggle-more hover:animate-twice
              hover:animate-duration-[400ms] hover:animate-ease-in transition-transform
              rounded-full w-12 h-12 p-0 flex items-center justify-center mb-2"
              asChild
            >
              <a href="mailto:email@example.com">
                <EmailIcon className="w-6 h-6" />
              </a>
            </Button>
            <Button
              variant="secondary"
              className="hover:scale-110 hover:animate-wiggle-more hover:animate-twice
              hover:animate-duration-[400ms] hover:animate-ease-in transition-transform
              rounded-full w-12 h-12 p-0 flex items-center justify-center mb-2"
              asChild
            >
              <a href="tel:+123456789">
                <PhoneIcon className="w-6 h-6" />
              </a>
            </Button>
            <Button
              variant="secondary"
              className="hover:scale-110 hover:animate-wiggle-more hover:animate-twice
              hover:animate-duration-[400ms] hover:animate-ease-in transition-transform
              rounded-full w-12 h-12 p-0 flex items-center justify-center mb-4"
              asChild
            >
              <a href="instagram-url">
                <InstagramSquareIcon className="w-6 h-6 hover:animate-wiggle" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
