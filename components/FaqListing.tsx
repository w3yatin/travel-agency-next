"use client";

import { useRef, useState, useReducer, useEffect } from "react";
import faqData from "@/data/faq.json";


type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  general?: FaqItem[];
  process?: FaqItem[];
  technical?: FaqItem[];
  marketing?: FaqItem[];
  support?: FaqItem[];
};

type State = {
  activeIndex: number | null;
  contentHeights: string[];
};

type Action =
  | { type: "TOGGLE_ACCORDION"; payload: number }
  | { type: "SET_HEIGHTS"; payload: string[] };

const initialState: State = {
  activeIndex: null,
  contentHeights: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_ACCORDION":
      return {
        ...state,
        activeIndex:
          state.activeIndex === action.payload ? null : action.payload,
      };

    case "SET_HEIGHTS":
      return {
        ...state,
        contentHeights: action.payload,
      };

    default:
      return state;
  }
}

export default function FaqListingContent() {
  const tabKeys: (keyof FaqCategory)[] = [
    "general",
    "process",
    "technical",
    "marketing",
    "support",
  ];

  const tabLabels = [
    "General Questions",
    "Process & Workflow",
    "Technical Questions",
    "Marketing & SEO",
    "Support",
  ];

  const [activeTab, setActiveTab] =
    useState<keyof FaqCategory>("general");


  const [leftState, leftDispatch] = useReducer(reducer, initialState);
  const [rightState, rightDispatch] = useReducer(reducer, initialState);

  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeFaq: FaqItem[] = faqData.reduce<FaqItem[]>(
    (acc, item: FaqCategory) => item[activeTab] ?? acc,
    []
  );


  useEffect(() => {
    const heights = leftRefs.current.map((el) =>
      el ? `${el.scrollHeight}px` : "0px"
    );
    leftDispatch({ type: "SET_HEIGHTS", payload: heights });
  }, [activeTab, leftState.activeIndex]);


  useEffect(() => {
    const heights = rightRefs.current.map((el) =>
      el ? `${el.scrollHeight}px` : "0px"
    );
    rightDispatch({ type: "SET_HEIGHTS", payload: heights });
  }, [activeTab, rightState.activeIndex]);



  return (
    <section className="main-banner overflow-hidden lg:pt-50 sm:pt-40 pt-25 xl:pb-50 pb-22.5 z-0">
      <div className="container-fluid">
        <div className="xl:mb-21.25 sm:mb-7.5 mb-4 text-center max-w-180 mx-auto headline">
          <h2 className="2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="custom-tab">

          <ul className="flex flex-wrap items-center justify-center tab-titles md:mb-12.5 mb-5 relative after:absolute after:bottom-0 lg:after:left-[calc(calc(100vw-916px)/-2)] after:left-0 lg:after:w-screen after:w-full after:h-px after:bg-black/10">
            {tabLabels.map((label, index) => (
              <li key={index} className="tab-title tab-underline cursor-pointer">
                <button
                  onClick={() => setActiveTab(tabKeys[index])}
                  className={` block sm:py-3 py-2 sm:px-3.75 px-2.75 font-normal sm:text-lg text-2sm duration-500 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.75  after:bg-primary after:duration-500 cursor-pointer
                  ${
                    activeTab === tabKeys[index]
                      ? " after:w-full"
                      : "text-textlight after:w-0"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
            <div className="3xl:px-24.5 sm:px-6.5">   
            <div className="row">
                <div className="lg:w-1/2 w-full">
                    <div className="custom-accordion style-2 myAccordion">
                    {activeFaq.map((item, index) => (
                        <div className="accordion-item" key={index}>
                        <button
                            className={`accordion-header ${
                             leftState.activeIndex === index ? "open" : ""
                            }`}
                            onClick={() =>
                              leftDispatch({ type: "TOGGLE_ACCORDION", payload: index })
                            }
                        >
                            <h3 className="xl:text-2xxl text-lg font-normal normal-case">
                            {item.question}
                            </h3>

                            <span
                            className={`arrow ${
                                 leftState.activeIndex === index ? "active" : ""
                            }`}
                            >
                            { leftState.activeIndex === index ? (
                                <i className="fa-solid fa-minus"></i>
                            ) : (
                                <i className="fa-solid fa-plus"></i>
                            )}
                            </span>
                        </button>

                        <div
                          ref={(el) => (leftRefs.current[index] = el)}
                  style={{
                    maxHeight:
                      leftState.activeIndex === index
                        ? leftState.contentHeights[index]
                        : "0px",
                            overflow: "hidden",
                            transition: "0.3s",
                          }}
                            className={`accordion-content ${
                            leftState.activeIndex === index ? "active" : ""
                            } overflow-hidden transition-all duration-500`}
                            
                        >
                                    <div className="content-inner">{item.answer}</div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="custom-accordion style-2 myAccordion">
                                {activeFaq.map((item, index) => (
                                    <div className="accordion-item" key={index}>
                                        <button
                                            className={`accordion-header ${
                                             rightState.activeIndex === index ? "open" : ""
                                            }`}
                                            onClick={() =>
                                              rightDispatch({ type: "TOGGLE_ACCORDION", payload: index })
                                            }
                                        >
                                            <h3 className="xl:text-2xxl text-lg font-normal normal-case">
                                            {item.question}
                                            </h3>

                                            <span
                                            className={`arrow ${
                                            rightState.activeIndex === index ? "active" : ""
                                            }`}
                                            >
                                            { rightState.activeIndex === index ? (
                                                <i className="fa-solid fa-minus"></i>
                                            ) : (
                                                <i className="fa-solid fa-plus"></i>
                                            )}
                                            </span>
                                        </button>
                                        <div
                                        
                                        className={`accordion-content ${
                                         rightState.activeIndex === index ? "active" : ""
                                        } overflow-hidden transition-all duration-500`}
                                         ref={(el) => (rightRefs.current[index] = el)}
                                          style={{
                                            maxHeight:
                                              rightState.activeIndex === index
                                                ? rightState.contentHeights[index]
                                                : "0px",
                                            overflow: "hidden",
                                            transition: "0.3s",
                                          }}
                                    >
                                        <div className="content-inner">{item.answer}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </div>

     
    </section>
  );
}