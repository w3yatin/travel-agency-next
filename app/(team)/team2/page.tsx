import AllTeamWork from "@/components/AllTeamWork";
import CounterBox from "@/components/CounterBox";
import ParallaxImage from "@/components/ParallaxImage";
import TeamBanner2 from "@/components/TeamBanner2";
import { IMAGES } from "@/utilities/Constants";

export default function TeamPage2() {
    return(
        <>
            <TeamBanner2 />
            <CounterBox />
            <ParallaxImage src={IMAGES.aboutlarge5} />

            <AllTeamWork />
        </>
    );
}