import React, { useEffect } from "react";
import { SiNotion } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import navBarData from "../fake-db/navbar.json";

type HeaderNavBarData = {
  title: string;
  has_sections?: boolean;
  children?: Array<{
    title: string;
    desc: string;
    is_button?: boolean;
    children?: Array<{
      title: string;
      desc: string;
    }>;
  }>;
};

const Header: React.FunctionComponent = () => {
  
 

  useEffect(() => {
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
            {navBarData.data.map((item: HeaderNavBarData) => (
              <li className="relative group cursor-pointer hover:bg-black/20 rounded-sm py-1 px-2">
                <p className="flex gap-1 items-center">
                  {item.title}
                  <IoIosArrowDown />
                </p>

                {item.children?.length !== 0 && (
                  <ul className="absolute min-w-[224px] max-h-0 megamenu-navbar-box-shadow  left-0 z-10 transition-all overflow-hidden group-hover:max-h-[400px]">
                    <div
                      className={`bg-white p-2.5 ${
                        item.has_sections ? "flex gap-5" : ""
                      }`}
                    >
                      {item.children?.map((childitem, index) => (
                        <li
                          className={`py-1 ${
                            item.has_sections && index === 0
                              ? "min-w-[300px]"
                              : "min-w-[150px]"
                          }`}
                        >
                          {/*{childitem.children}*/}
                          {item.has_sections ? (
                            <div>
                              <small className="text-gray-400 text-[12px]">{childitem.title}</small>
                              {childitem.children?.map((sectionele) => (
                                <div className="my-1">
                                  <p className="font-semibold text-md text-black">
                                    {sectionele.title}
                                  </p>
                                  <p className="font-light text-gray-500 text-sm">
                                    {sectionele.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div>
                              <p className="font-semibold text-md text-black">
                                {childitem.title}
                              </p>
                              <p className="font-light text-gray-500 text-sm">
                                {childitem.desc}
                              </p>
                            </div>
                          )}
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
