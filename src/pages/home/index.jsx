import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.scss';

import {
    HomeHero,
    HomeOriginTimeline,
    HomePhilosophy,
    HomeIngredients,
    HomeBestSelection,
    HomeMessage,
    HomeGifts,
    HomeClosing,
} from './components';

// 수정사항:
// - 페이지는 조합만 담당
// - 스타일 책임은 각 컴포넌트 그룹 폴더(HomeHero / HomeStory / HomeSections)로 이동

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    return (
        <main className="home">
            <HomeHero />
            <HomeOriginTimeline />
            <HomePhilosophy />
            <HomeIngredients />
            <HomeBestSelection />
            <HomeMessage />
            <HomeGifts />
            <HomeClosing />
        </main>
    );
};

export default Home;
