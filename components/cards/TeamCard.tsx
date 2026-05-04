import Image from "next/image";
import Link from "next/link";


interface TeamCardProps {
   team: TeamItem;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
    return(
        
        <div className="container box-item max-w-330 mx-auto lg:flex justify-between items-center relative sm:py-10 py-5">
            <Image src={team.img} alt={team.name} placeholder="blur"  blurDataURL="/images/blur.png" width={300}
                    height={350} className="mb-2.5 sm:hidden mx-auto rounded-2xl" />
            <div className="project-title relative z-4 flex items-baseline gap-2.5 lg:mb-0 mb-2.5 sm:justify-start justify-center">
                <h3 className="sm:text-4xl text-xl font-semibold text-secondary">{team.name}</h3>
                <span className="post inline-block group-hover:text-black/70">/ {team.position}</span>
            </div>
            <ul className="relative z-4 flex items-center gap-2.5 lg:mb-0 mb-3.75 sm:justify-start justify-center">
                {team.socialLinks.map((item, index) => (
                    <li
                    key={index}
                    className="inline-block lg:opacity-0 -translate-y-0.5 duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                        <Link
                            href={item.href}
                            className="flex items-center justify-center size-10 rounded-md border border-secondary text-secondary  hover:bg-secondary! hover:border-secondary! hover:text-white! max-lg:group-hover:bg-secondary! max-lg:group-hover:border-secondary! max-lg:group-hover:text-white!"
                        >
                            <i className={`fa-brands ${item.icon}`}></i>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="relative z-4 project-categ">
                <Link href={`/team/${team.slug}`} className="flex items-center gap-1.25 sm:justify-start justify-center group-hover:text-secondary text-lg">
                    <span>More Details</span>
                    <svg className="svg-currentcolor" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.33325 14.1673L14.6666 5.83398" strokeOpacity="0.6"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.33325 5.83398H14.6666V14.1673" strokeOpacity="0.6"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
            <div className="item-image absolute w-75 h-87.5 pointer-events-none top-0 left-0 overflow-hidden opacity-0 max-sm:hidden">
                <div className="reveal-image relative h-full w-full bg-cover bg-center rounded-2xl overflow-hidden" 
                >
                <Image
                    
                    src={team.img}
                    alt={team.name}
                    width={300}
                    height={350}
                    placeholder="blur"
                    blurDataURL="/images/blur.png"
                    className="object-cover w-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default TeamCard;