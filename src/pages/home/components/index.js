// 수정사항:
// - styles/components 같은 전역 스타일 폴더 대신
//   home 내부 컴포넌트 그룹 옆에 style.scss를 둠
// - 페이지에서 필요한 스타일은 여기서 한 번만 불러오도록 정리

import './HomeHero/style.scss';
import './HomeStory/style.scss';
import './HomeSections/style.scss';

export { default as HomeHero } from './HomeHero';
export { default as HomeOriginTimeline } from './HomeStory/HomeOriginTimeline';
export { default as HomePhilosophy } from './HomeStory/HomePhilosophy';
export { default as HomeIngredients } from './HomeStory/HomeIngredients';
export { default as HomeBestSelection } from './HomeSections/HomeBestSelection';
export { default as HomeMessage } from './HomeSections/HomeMessage';
export { default as HomeGifts } from './HomeSections/HomeGifts';
export { default as HomeClosing } from './HomeSections/HomeClosing';
