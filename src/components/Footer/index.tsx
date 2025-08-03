import * as Icon from "@/components";
import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="px-20 bg-[#2B2B2B] py-3">
      <div className="flex justify-between">
        <div>
          <span className="text-neutral-500 text-sm">© 2025 Talkino ino</span>
        </div>
        <div>
          <ul className="flex gap-3">
            <li>
              <a href="#">
                <Icon.IconlyX size={20} color="#FFFFFF" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon.IconlyLinkedinSquare size={20} color="#FFFFFF" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon.IconlyInstagram size={20} color="#FFFFFF" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-6/12 mt-10 pb-10">
        <span className="text-neutral-500 text-sm">
          Talkino is a trademark or registered trademark of Talkino Connection
          Technologies Inc. Any other trademarks are the property of their
          respective owners. Unless otherwise noted, use of third party logos
          does not imply endorsement of, sponsorship of, or affiliation with
          Talkino.
        </span>
      </div>
    </div>
  );
};
