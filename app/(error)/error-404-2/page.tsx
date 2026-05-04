import Link from "next/link";

export default function ErrorPage2() {
    return(
        <section>
            <div className="h-screen bg-no-repeat bg-center bg-cover"  style={{backgroundImage: `url(/images/404.png)`}}>
                <div className="absolute top-1/2 left-1/2 -translate-1/2 max-sm:w-full">
                    <div className="container-sm">
                        <div className="bg-white text-center xl:p-21.25 p-10 max-w-175">
                            <span className="text-secondary md:text-xl text-base font-semibold mb-7.5 font-title">Oops! 404 Error</span>
                            <h1 className="xl:text-10xl lg:text-5xl text-4xl lg:mb-10 mb-5">Page Not Found</h1>
                            <Link href="/" className="btn btn-primary btn-hover">
                                <span>Back To Home</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}