"use client";
import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";
import { useState ,useRef , useEffect} from "react";
import { clsx } from "clsx";

interface MenuItem {
  title: string;
  link: string;
  submenu?: MenuItem[];
}

const Menu: MenuItem[] = [
 
  {
    title: "Home",
    link: "/",
  }, 
  {
    title: "Pages",
    link: "/",
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
    link: "/",
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
        link: "#",
        submenu: [
          { title: "Blog", link: "/blog" },
          { title: "Blog Column 2", link: "/blog-grid2" },
          { title: "Blog Column 3", link: "/blog-grid3" },
          { title: "Blog Column 4", link: "/blog-grid4" },
          { title: "Blog Card", link: "/blog-card" },
          { title: "Blog Collage", link: "/blog-collage" },
        ],
      },
      {
        title: "Blog List",
        link: "#",
        submenu: [
          { title: "No Sidebar", link: "/blog-list-no-sidebar" },
          { title: "Left Sidebar", link: "/blog-list-left-sidebar" },
          { title: "Right Sidebar", link: "/blog-list-right-sidebar" },
          { title: "Both Sidebar", link: "/blog-list-both-sidebar" },
        ],
      },
      {
        title: "Post Layout",
        link: "#",
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
	  link: "/",
	  submenu: [
		  { title: "Contact Us 1", link: "/contact-us" },
		  { title: "Contact Us 2", link: "/contact-us2" },
		 
		],
	},
];

export default function Header() {
	const [active, setActive] = useState("/home");

	const wrapperRef = useRef<HTMLUListElement | null>(null);
const indicatorRef = useRef<HTMLLIElement | null>(null);
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const indicator = indicatorRef.current;

    if (!wrapper || !indicator) return;

    const links = wrapper.querySelectorAll<HTMLElement>(".nav-link");

		const moveIndicator = (el: HTMLElement) => {
		const rect = el.getBoundingClientRect();
		const parentRect = wrapper.getBoundingClientRect();

		indicator.style.setProperty("--indicator-width", `${rect.width}px`);
		indicator.style.setProperty(
			"--indicator-x",
			`${rect.left - parentRect.left}px`
		);
		};

		const clearActiveStates = () => {
		links.forEach((el) => el.classList.remove("active"));
		};

    // Default active (first item)
    if (links[0]) {
      links[0].classList.add("active");
      moveIndicator(links[0]);
    } 

    // Events
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => moveIndicator(link));

      link.addEventListener("click", () => {
        clearActiveStates();
        link.classList.add("active");
        moveIndicator(link);
      });
    });

    // Cleanup (important in React)
    return () => {
      links.forEach((link) => {
        link.replaceWith(link.cloneNode(true));
      });
    };
  }, []);
const [searchOpen, setSearchOpen] = useState(false);

const [isSticky, setIsSticky] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



	const handleMouseEnter = (e:any) => { 

		const ul = wrapperRef.current;
		const li = e.currentTarget;

		if (!ul || !li) return;

		const ulRect = ul.getBoundingClientRect();
		const liRect = li.getBoundingClientRect();

		const left = liRect.left - ulRect.left;


		console.log("LI space inside UL:", left);
	}


    return(
         <header
  className={clsx(
    "site-header sticky-header-wrapper absolute top-0 left-0 w-full z-999 transition-all duration-300",
    {
      "fixed bg-white shadow-md py-4": isSticky,
      "absolute bg-transparent lg:pt-7.5": !isSticky,
    }
  )}
>

	<div className="main-bar relative lg:text-white text-secondary w-full">
		<div className="container-fluid flex items-center">

			{/* <!-- Website Logo --> */}
			<div className="flex items-center align-middle xl:w-41.25 w-33.75 sm:h-12.5 h-15.25 xl:me-7.5 me-2 logo-dark">
				<Link
				 aria-label="Go to homepage" href="/home" className="table-cell align-middle">
					<Image
					src={isSticky ? IMAGES.logo : IMAGES.logowhite}
					alt="logo"
					className="object-contain duration-300"
					/>
				</Link>
			</div>

			<button aria-label="Open menu" className="xmenu-toggler lg:hidden float-right sm:mt-4.5 sm:mb-4 sm:ml-7 ml-4 my-2.5 size-11 bg-white rounded-md relative cursor-pointer max-lg:order-1 [.sticky-header-wrapper.is-fixed_&]:bg-secondary" type="button">
				<span className="block absolute left-2.5 h-0.5 rounded-px bg-secondary [.sticky-header-wrapper.is-fixed_&]:bg-white duration-300 top-3.25 w-5.5"></span>
				<span className="block absolute left-2.5 h-0.5 rounded-px bg-secondary [.sticky-header-wrapper.is-fixed_&]:bg-white duration-0 top-5.5 w-6.25"></span>
				<span className="block absolute left-2.5 h-0.5 rounded-px bg-secondary [.sticky-header-wrapper.is-fixed_&]:bg-white duration-300 top-8 w-4"></span>
			</button>
			<div className="lg:hidden fixed top-0 left-0 bg-black size-full duration-300 z-999 opacity-0 visible pointer-events-none menu-close fade-overlay"></div>
			<div className="flex lg:basis-auto lg:mx-auto max-lg:flex-col lg:justify-center justify-start lg:items-center max-lg:fixed max-lg:h-screen max-lg:px-5 max-lg:top-0 max-lg:-left-75 max-lg:z-9999 max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 header-nav custom-scroll lg:rounded-6xl lg:bg-secondary/40 bg-white p-1.5 [.header-nav.show]:left-0">
				<div className="flex items-center relative z-9 py-6.25 lg:hidden w-33.75 h-15.25">
					<Link
					 aria-label="Go to homepage" href="/home" className="table-cell align-middle">
						<Image src={IMAGES.logo} alt="logo" className="object-contain duration-500" />
					</Link>
				</div>
				<ul ref={wrapperRef} className="lg:flex flex-wrap navbar-nav nav-wrapper">
					<li ref={indicatorRef} className="nav-indicator"></li>
						{Menu.map((item, i) => (
						<li
						key={i}
						className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group"
						>
						{/* MAIN LINK */}
						<Link
							href={item.link || "#"}
							 onClick={() => setActive(item.link)}
								className={`lg:py-2.5 py-2 xl:px-4 lg:px-2 relative z-1 lg:inline-block block xl:text-base text-2sm leading-none! font-medium rounded-8xl lg:group-hover:text-heading nav-link ${
								active === item.link ? "active" : ""
								}`}

							onMouseEnter={(e) => { handleMouseEnter(e) }}
						
						>
							<span className="inline-block lg:leading-5 leading-7.5">
							{item.title}
							</span>

							{/* MOBILE ICON */}
							{item.submenu && (
							<i className="fas fa-chevron-right lg:hidden! block! size-7 leading-7! text-center text-xs bg-secondary rounded text-white float-end"></i>
							)}
						</Link>

						{/* FIRST LEVEL DROPDOWN */}
						{item.submenu && (
							<ul className="lg:absolute bg-white block lg:left-0 lg:py-5 max-lg:py-2.5 max-lg:border-t max-lg:border-gray-200 w-full lg:w-55 lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-1 max-lg:hidden">
							
							{item.submenu.map((child, j) => (
								<li
								key={j}
								className={`relative ${
									child.submenu ? "group/second sub-menu-down" : ""
								}`}
								>
								<Link
									href={child.link || "#"}
									className={`block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-secondary ${
									child.submenu
										? " after:inline-block after:font-black after:text-tiny after:float-right"
										: ""
									}`}
								>
									{item.title === "Blogs" && (
										<span className="flex !items-center justify-center size-7 lg:bg-transparent bg-black float-end text-gray-600">
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
									<ul className="bg-white lg:py-5 lg:w-55 2xl:left-55 lg:-left-55 lg:top-0 lg:shadow-1 lg:absolute lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover/second:opacity-100 lg:group-hover/second:visible lg:group-hover/second:translate-y-0 max-lg:hidden max-lg:pl-5">
									
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
								)}
								</li>
							))}
							</ul>
						)}
						</li>
					))}
				</ul>
				<div className="lg:hidden block max-lg:p-5 text-center mt-auto">
					<ul>
						<li className="inline-block mx-0.5">
							<Link
							 rel="noopener noreferrer" aria-label="DexignZone on Facebook" className="size-10 leading-10! border border-black/10 text-center text-secondary hover:bg-primary hover:border-primary fab fa-facebook-f" target="_blank" href="https://www.facebook.com/dexignzone"></Link>
						</li>
						<li className="inline-block mx-0.5">
							<Link
							 rel="noopener noreferrer" aria-label="DexignZone on Twitter" className="size-10 leading-10! border border-black/10 text-center text-secondary hover:bg-primary hover:border-primary fab fa-twitter" target="_blank" href="https://twitter.com/dexignzones"></Link>
						</li>
						<li className="inline-block mx-0.5">
							<Link
							 rel="noopener noreferrer" aria-label="DexignZone on Linkedin" className="size-10 leading-10! border border-black/10 text-center text-secondary hover:bg-primary hover:border-primary fab fa-linkedin-in" target="_blank" href="https://www.linkedin.com/showcase/3686700/admin/"></Link>
						</li>
						<li className="inline-block mx-0.5">
							<Link
							 rel="noopener noreferrer" aria-label="DexignZone on Instagram" className="size-10 leading-10! border border-black/10 text-center text-secondary hover:bg-primary hover:border-primary fab fa-instagram" target="_blank" href="https://www.instagram.com/dexignzone/"></Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="extra-nav flex items-center h-12.5 3xl:pl-7.5 max-lg:ms-auto">
				<div className="flex items-center w-full">
					<ul className="lg:ml-5 sm:ml-3.75 flex items-center gap-5 w-full justify-between">
						<li className="inline-block">
							<button aria-label="Open search" type="button" 
							 onClick={() => setSearchOpen(true)}
							  className={clsx(
								"md:size-12.5 size-10.5 flex items-center justify-center rounded-full cursor-pointer backdrop-blur-md transition-colors duration-300",
								{
								"bg-white/10 text-white": !isSticky,
								"bg-gray-200 text-black": isSticky,
								}
							)}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path
										d="M21 21L16.66 16.66"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</li>
						<li className="inline-block max-xl:hidden">
							<Link
							 	href="/book-now" className="btn btn-primary btn-hover light">
								<span>Book Now</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={`fixed -top-full left-0 w-full h-screen bg-white z-999 flex items-center justify-center p-8 duration-500 xmenu-search [.xmenu-search.show]:top-0 ${searchOpen ? "show" : "" }`} id="searchOverlay1">
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
					 onClick={() => setSearchOpen(false)}
					className="absolute right-8 top-8 text-gray-600 text-lg size-10 cursor-pointer rounded search-remove"><i className="fa fa-close"></i></button>
				</div>
			</div>
		</div>
	</div>

</header>


    );
}