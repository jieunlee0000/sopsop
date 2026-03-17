// AE-GUNG - K 콘텐츠 관련 큐레이션 페이지 (준비 중)
import { Link } from 'react-router-dom';
import './style.scss';
import About from '../../components/aegung/About';
import MainVisual from '../../components/aegung/MainVisual';
import Product from '../../components/aegung/Product';
import Packaging from '../../components/aegung/Packaging';
import SpecialStores from '../../components/aegung/SpecialStores';

const AeGung = () => {
    return (
        <main className="aegung">
            <MainVisual />
            <About />
            <Product />
            <Packaging />
            <SpecialStores />
        </main>
    );
};
export default AeGung;
