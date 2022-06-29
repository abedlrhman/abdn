import React, { useEffect } from "react";
import { SiNotion } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import navBarData from "../fake-db/navbar.json";

const Header: React.FunctionComponent = () => {
  useEffect(() => {
    console.log(navBarData);
  }, []);

  return (
    <div>
      <div className="bg-amber-600 container mx-auto h-16">
        <div className="flex items-center h-full">
          <div className="flex gap-2 items-center">
            <div>
              <SiNotion fontSize={30} />
            </div>
            <h1 className="text-xl">Notion</h1>
          </div>
          <ul className="flex px-8 gap-3">
            {navBarData.data.map((item) => (
              <li className="relative group cursor-pointer hover:bg-black/20 rounded-sm py-1 px-2">
                <p className="flex gap-1 items-center">
                  {item.title}
                  <IoIosArrowDown />
                </p>

                {item.children.length !== 0 && (
                  <ul className="absolute w-56 max-h-0 megamenu-navbar-box-shadow  left-0 z-10 transition-all overflow-hidden group-hover:max-h-[400px]">
                    <div className="bg-white p-2.5 ">
                      {item.children.map((childitem) => (
                        <li className="py-1">
                          {
                            <p className="font-semibold text-md text-black">
                              {childitem.title}
                            </p>
                          }
                          <p className="font-light text-gray-500 text-sm">
                            {childitem.desc}
                          </p>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
