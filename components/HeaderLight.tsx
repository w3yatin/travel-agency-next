"use client";
import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useReducer} from "react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  link: string;
  submenu?: MenuItem[];
}

const Menu: MenuItem[] = [
 
  {
    title: "Home",
    link: "/home",
  }, 
  {
    title: "Pages",
    link: "/about-us",
    submenu: [
      { title: "About Us 1", link: "/about-us" },
      { title: "About Us 2", link: "/about-us2" },
      { title: "Team 1", link: "/team" },
      { title: "Team 2", link: "/team2" },
      { title: "Team Detail", link: "/team/sophia-carter" },
      { title: "FAQs 1", link: "/faq" },
      { title: "FAQs 2", link: "/faq-2" },
      { title: "Error-404 1", link: "/error-404" },
      { title: "Error-404 2", link: "/error-404-2" },
      { title: "Coming Soon", link: "/coming-soon" },
      { title: "Under Construction", link: "/under-construction" },
    ],
  },
  {
    title: "Services",
    link: "/services",
    submenu: [
      { title: "Service", link: "/services" },
      { title: "Service Detail", link: "/services/creative-design" },
    ],
  },
  {
	  title: "Package",
	  link: "/tour",
	  submenu: [
		  { title: "Packages", link: "/tour" },
		  { title: "Upcoming Trips", link: "/upcoming-trips" },
		  { title: "Trip Details", link: "/tour/island-wilderness" },
		  { title: "Trip Details 2", link: "/tour/amazon-deep-forest-expedition" },
		  { title: "Book Now", link: "/book-now" },
		],
	},
	{
    title: "Blogs",
    link: "/blog",
    submenu: [
      {
        title: "Blog Grid",
        link: "/blog",
        submenu: [
          { title: "Blog", link: "/blog" },
          { title: "Blog Column 2", link: "/blog-grid2" },
          { title: "Blog Column 3", link: "/blog-grid3" },
          { title: "Blog Column 4", link: "/blog-grid4" },
          { title: "Blog Card", link: "/blogcard" },
          { title: "Blog Collage", link: "/blog-collage" },
        ],
      },
      {
        title: "Blog List",
        link: "/blog",
        submenu: [
          { title: "No Sidebar", link: "/blog-list-no-sidebar" },
          { title: "Left Sidebar", link: "/blog-list-left-sidebar" },
          { title: "Right Sidebar", link: "/blog-list-right-sidebar" },
          { title: "Both Sidebar", link: "/blog-list-both-sidebar" },
        ],
      },
      {
        title: "Post Layout",
        link: "/blog/standard-post",
        submenu: [
          { title: "Standard Post", link: "/blog/standard-post" },
          { title: "Status Slider", link: "/blog/status-slider" },
          { title: "Corner Post", link: "/blog/corner-post" },
          { title: "Side Post", link: "/blog/side-post" },
          { title: "Tutorial Post", link: "/blog/tutorial-post" },
          { title: "Post Slider", link: "/blog/post-slider" },
          { title: "Post Quote", link: "/blog/post-quote" },
          { title: "Post Gallery", link: "/blog/post-gallery" },
          { title: "Header Image", link: "/blog/header-image" },
          { title: "Post Image", link: "/blog/post-image" },
          { title: "Link Post", link: "/blog/link-post" },
          { title: "Video Post", link: "/blog/video-post" },
          { title: "Audio Post", link: "/blog/audio-post" },
        ],
      },
    ],
  },
  {
	  title: "Contact Us",
	  link: "/contact-us",
	  submenu: [
		  { title: "Contact Us 1", link: "/contact-us" },
		  { title: "Contact Us 2", link: "/contact-us2" },
		 
		],
	},
];

const initialState: HeaderState = {
  menuOpen: false,
  searchOpen: false,
  isSticky: false,
  openSubmenus: [],
};

interface HeaderState {
  menuOpen: boolean;
  searchOpen: boolean;
  isSticky: boolean;
  openSubmenus: string[];
}

type HeaderAction =
  | { type: "TOGGLE_MENU" }
  | { type: "SET_SEARCH"; payload: boolean }
  | { type: "SET_STICKY"; payload: boolean }
  | { type: "SET_MENU"; payload: boolean }
  | { type: "TOGGLE_SUBMENU"; payload: string };

function reducer(state: HeaderState, action: HeaderAction): HeaderState {
  switch (action.type) {
	case "TOGGLE_MENU": {
		const menuOpen = !state.menuOpen;
		return { ...state, menuOpen, openSubmenus: menuOpen ? state.openSubmenus : [] };
	}

	case "SET_SEARCH":
	  return { ...state, searchOpen: action.payload };

	case "SET_STICKY":
	  return { ...state, isSticky: action.payload };

	case "SET_MENU":
		return {
			...state,
			menuOpen: action.payload,
			openSubmenus: action.payload ? state.openSubmenus : [],
		};

	case "TOGGLE_SUBMENU": {
		const key = action.payload;
		const isOpen = state.openSubmenus.includes(key);

		if (isOpen) {
			return {
				...state,
				openSubmenus: state.openSubmenus.filter(
					(k) => k !== key && !k.startsWith(`${key}-`)
				),
			};
		}

		const isTopLevel = !key.includes("-");

		if (isTopLevel) {
			return { ...state, openSubmenus: [key] };
		}

		const parentKey = key.split("-").slice(0, -1).join("-");
		const withoutSiblings = state.openSubmenus.filter(
			(k) => k === parentKey || !k.startsWith(`${parentKey}-`)
		);
		return { ...state, openSubmenus: [...withoutSiblings, key] };
	}

	default:
	  return state;
  }
}

export default function HeaderLight() {

	const pathname = usePathname();
  const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const handleScroll = () => {
		dispatch({
			type: "SET_STICKY",
			payload: window.scrollY > 50,
		});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

    return(
        <header
		className={clsx(
			"site-header sticky-header-wrapper absolute top-0 left-0 w-full z-999 transition-all duration-300",
			{
			"fixed bg-white shadow-md lg:py-4 py-1": state.isSticky,
			"absolute bg-transparent lg:pt-7.5": !state.isSticky,
			}
		)}
		>
			<div className="main-bar relative lg:text-white text-secondary w-full">
				<div className="container-fluid flex items-center">

					<div className="flex items-center align-middle xl:w-41.25 w-33.75 sm:h-12.5 h-15.25 xl:me-7.5 me-2 logo-dark">
						<Link aria-label="Go to homepage" href="/home" className="table-cell align-middle">
							<Image src={IMAGES.logo} alt="logo" className="object-contain duration-500" />
						</Link>
					</div>

					<button
							aria-label="Open menu"
							onClick={() => dispatch({ type: "TOGGLE_MENU" })}
							className={clsx(
								"xmenu-toggler lg:hidden float-right sm:mt-4.5 sm:mb-4 sm:ml-7 ml-4 my-2.5 size-11 bg-white rounded-md relative cursor-pointer max-lg:order-1",
								"[.sticky-header-wrapper.is-fixed_&]:bg-secondary",
								{
								"open": state.menuOpen,
								}
							)}
							type="button"
							>
						<span className="block absolute left-2.5 h-0.5 rounded-px bg-heading duration-300 top-3.25 w-5.5"></span>
						<span className="block absolute left-2.5 h-0.5 rounded-px bg-heading duration-0 top-5.5 w-6.25"></span>
						<span className="block absolute left-2.5 h-0.5 rounded-px bg-heading duration-300 top-8 w-4"></span>
					</button>
					<div
							onClick={() => dispatch({ type: "SET_MENU", payload: false })}
							className={clsx(
								"lg:hidden fixed top-0 left-0 bg-black/50 size-full duration-300 z-999",
								{
								"opacity-100 visible pointer-events-auto": state.menuOpen,
								"opacity-0 invisible pointer-events-none": !state.menuOpen,
								}
							)}
							></div>
						<div
							data-lenis-prevent
							className={clsx(
								"flex lg:basis-auto lg:mx-auto max-lg:flex-col lg:justify-center justify-start lg:items-center max-lg:fixed max-lg:h-screen max-lg:px-5 max-lg:top-0 max-lg:-left-75 max-lg:z-9999 max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 header-nav custom-scroll lg:rounded-6xl lg:bg-secondary/40 bg-white p-1.5 [.header-nav.show]:left-0 ",
								{
								"show": state.menuOpen,
								}
							)}
							>
						<div className="flex items-center relative z-9 py-6.25 lg:hidden w-33.75 h-15.25">
							<Link aria-label="Go to homepage" href="/home" className="table-cell align-middle">
								<Image src={IMAGES.logo} alt="logo" className="object-contain duration-500" />
							</Link>
						</div>
						<ul className="lg:flex flex-wrap navbar-nav nav-wrapper gap-1">
							{Menu.map((item, i) => {

								const isActive =
										(pathname === "/" && item.link === "/home")	|| pathname === item.link ||
										(item.submenu &&
											item.submenu.some((sub) => pathname.startsWith(sub.link)));
								const topKey = `${i}`;
								const isTopOpen = state.openSubmenus.includes(topKey);

								return(
									<li
										key={i}
										className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group"
									>
									<Link
										href={item.link || "#"}
										className={`lg:py-2.5 py-2 xl:px-4 lg:px-2 max-lg:pr-12 relative z-1 lg:inline-block block xl:text-base text-2sm leading-none! font-medium rounded-8xl nav-link group-hover:bg-white group-hover:text-secondary ${isActive ? "bg-white text-secondary" : ""}`}
										>
										<span className="inline-block lg:leading-5 leading-7.5">
										{item.title}
										</span>
									</Link>

									{item.submenu && (
										<button
											type="button"
											aria-label={`Toggle ${item.title} submenu`}
											aria-expanded={isTopOpen}
											onClick={() =>
												dispatch({ type: "TOGGLE_SUBMENU", payload: topKey })
											}
											className={clsx(
												"fas lg:hidden! flex! items-center justify-center size-7 leading-7! text-center text-xs bg-secondary rounded text-white absolute right-2 top-2 z-2 duration-300 cursor-pointer",
												{ "fa-chevron-down": isTopOpen },{ "fa-chevron-right": !isTopOpen }
											)}
										></button>
									)}

									{item.submenu && (
										<ul
											className={clsx(
												"lg:absolute bg-white lg:block lg:left-1/2 lg:-translate-x-1/2 lg:py-5 w-60 lg:opacity-0 lg:invisible lg:translate-y-3 z-10 lg:mt-2 max-lg:mb-3 text-left duration-300 lg:shadow-lg rounded-md lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 max-lg:overflow-hidden",
												isTopOpen ? "max-lg:block" : "max-lg:hidden"
											)}
										>
										
										{item.submenu.map((child, j) => {
											const childKey = `${topKey}-${j}`;
											const isChildOpen = state.openSubmenus.includes(childKey);
											return (
											<li
											key={j}
											className={`relative ${
												child.submenu ? "group/second sub-menu-down" : ""
											}`}
											>
											<Link
												href={child.link || "#"}
												className={`block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 px-7.5 duration-500 hover:text-secondary ${
												child.submenu
													? " after:inline-block after:font-black after:text-tiny after:float-right max-lg:pr-9"
													: ""
												}`}
											>
												{child.submenu && (
													<span className="lg:flex hidden !items-center justify-center size-7 lg:bg-transparent bg-black float-end text-gray-600">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="w-3 h-3 transition-transform duration-300"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															strokeWidth="3"
														>
															<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M9 5l7 7-7 7"
															/>
														</svg>
													</span>
												)}
												<span>{child.title}</span>
											</Link>

											{child.submenu && (
												<>
												<button
													type="button"
													aria-label={`Toggle ${child.title} submenu`}
													aria-expanded={isChildOpen}
													onClick={() =>
														dispatch({ type: "TOGGLE_SUBMENU", payload: childKey })
													}
													className={clsx(
														"lg:hidden! flex! items-center justify-center size-6 absolute right-1.5 top-0.5 text-gray-500 duration-300 cursor-pointer",
														{ "rotate-90": isChildOpen }
													)}
												>
													<i className="fas fa-chevron-right text-xs"></i>
												</button>

												<ul
													className={clsx(
														"bg-white lg:py-5 lg:w-55 lg:left-full lg:top-0 lg:ml-1 rounded-md lg:shadow-lg lg:absolute lg:opacity-0 lg:invisible lg:translate-y-2 z-10 mt-0 text-left duration-300 lg:group-hover/second:opacity-100 lg:group-hover/second:visible lg:group-hover/second:translate-y-0 max-lg:overflow-hidden max-lg:pl-3 max-lg:ml-7.5",
														isChildOpen ? "max-lg:block" : "max-lg:hidden"
													)}
												>
												
												{child.submenu.map((sub, k) => (
													<li key={k} className="relative">
													<Link
														href={sub.link || "#"}
														className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-secondary nav-link"
													>
														<span>{sub.title}</span>
													</Link>
													</li>
												))}
												</ul>
												</>
											)}
											</li>
											);
										})}
										</ul>
									)}
									</li>
								);
							})}
						</ul>
						<div className="lg:hidden block max-lg:p-5 text-center mt-auto">
							<ul>
								<li className="inline-block mx-0.5">
									<Link rel="noopener noreferrer" aria-label="DexignZone on Facebook" className="size-10 leading-10! border border-black/10 text-center text-secondary hover:bg-primary hover:border-primary fab fa-facebook-f" target="_blank" href="https://www.facebook.com/dexignzone"></Link>
								</li>
								<li className="inline-block mx-0.5">
									<Link rel="noopener noreferrer" aria-label="DexignZone on Twitter" className="size-10 leading-10! border border-black/10 text-center text-secondary hover:bg-primary hover:border-primary fab fa-twitter" target="_blank" href="https://twitter.com/dexignzones"></Link>
								</li>
								<li className="inline-block mx-0.5">
									<Link rel="noopener noreferrer" aria-label="DexignZone on Linkedin" className="size-10 leading-10! border border-black/10 text-center text-secondary hover:bg-primary hover:border-primary fab fa-linkedin-in" target="_blank" href="https://www.linkedin.com/showcase/3686700/admin/"></Link>
								</li>
								<li className="inline-block mx-0.5">
									<Link rel="noopener noreferrer" aria-label="DexignZone on Instagram" className="size-10 leading-10! border border-black/10 text-center text-secondary hover:bg-primary hover:border-primary fab fa-instagram" target="_blank" href="https://www.instagram.com/dexignzone/"></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="extra-nav flex items-center h-12.5 3xl:pl-7.5 max-lg:ms-auto">
						<div className="flex items-center w-full">
							<ul className="lg:ml-5 sm:ml-3.75 flex items-center gap-5 w-full justify-between">
								<li className="inline-block">
									<button aria-label="Open search" 
									onClick={() => dispatch({ type: "SET_SEARCH", payload: true })}
									type="button" className="md:size-12.5 size-10.5 flex items-center justify-center rounded-full cursor-pointer text-white bg-secondary/10 backdrop-blur-md quick-search" data-target="#searchOverlay1">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M21 21L16.66 16.66" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</button>
								</li>
								<li className="inline-block max-xl:hidden">
									<Link href="/book-now" className="btn btn-primary btn-hover">
										<span>Book Now</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className={`fixed -top-full left-0 w-full h-screen bg-white z-999 flex items-center justify-center p-8 duration-500 xmenu-search [.xmenu-search.show]:top-0 ${state.searchOpen ? "show" : "" }`} id="searchOverlay1">
						<div className="container">
							<form className="w-full text-primary text-3xl font-light text-left outline-none p-1.5 duration-500" action="#">
								<div className="relative flex flex-wrap items-stretch w-full mb-5 border-b-2 border-secondary">
									<input type="text" className="block relative flex-1 w-[1%] h-12.5 py-2.5 px-5 font-normal text-xl text-secondary duration-300" aria-label="Text input with dropdown button" placeholder="Search Product" />
									<button className="relative z-2" type="button" aria-label="Search">
										<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
										<g clipPath="url(#clip0_1362_3437)">
											<path d="M16.4562 15.4843L12.4102 11.2762C13.4505 10.0396 14.0205 8.48359 14.0205 6.86374C14.0205 3.07913 10.9413 0 7.15671 0C3.3721 0 0.292969 3.07913 0.292969 6.86374C0.292969 10.6484 3.3721 13.7275 7.15671 13.7275C8.57751 13.7275 9.93145 13.299 11.089 12.4854L15.1658 16.7255C15.3362 16.9024 15.5654 17 15.811 17C16.0435 17 16.264 16.9114 16.4314 16.7502C16.7871 16.4079 16.7985 15.8403 16.4562 15.4843ZM7.15671 1.79054C9.95413 1.79054 12.2299 4.06632 12.2299 6.86374C12.2299 9.66117 9.95413 11.9369 7.15671 11.9369C4.35929 11.9369 2.08351 9.66117 2.08351 6.86374C2.08351 4.06632 4.35929 1.79054 7.15671 1.79054Z" fill="#000"></path>
										</g>
										<defs>
											<clipPath id="clip0_1362_3437">
											<rect width="17" height="17" fill="white"></rect>
											</clipPath>
										</defs>
										</svg>
									</button>
								</div>
							</form>
							<button type="button" aria-label="Close search" 
							onClick={() => dispatch({ type: "SET_SEARCH", payload: false })}
							className="absolute right-8 top-8 text-gray-600 text-lg size-10 cursor-pointer rounded search-remove"><i className="fa fa-close"></i></button>
						</div>
					</div>
				</div>
			</div>
		</header>
     );
}