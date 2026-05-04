import AllTeamWork from "@/components/AllTeamWork";
import CounterBox from "@/components/CounterBox";
import ImageBox2 from "@/components/ImageBox2";
import TeamBannerSwiper from "@/components/TeamBannerSwiper";

export default function TeamPage() {
    return(
        <>
            <TeamBannerSwiper />
            <CounterBox />
            <ImageBox2 />
            <AllTeamWork />
        </>
    );
}