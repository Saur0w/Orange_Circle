"use client";

import {JSX} from 'react';
// import type { LenisOptions } from 'lenis';
// import 'locomotive-scroll/locomotive-scroll.css';
import styles from './page.module.css';
import Landing from '@/components/Landing/index';
import About from '@/components/Description/index';
import Sustainability from '@/components/Sustainability/index';
import SlidingImages from '@/components/SlidingImages/index';
import Founders from '@/components/Origin/index';
import Stats from "@/components/Stats/index";
import Join from "@/components/Join/index";

// Interface for locomotive scroll options


export default function Home(): JSX.Element {


    return (
        <div data-scroll-container>
            <main className={styles.main} data-scroll-section>
                <div data-scroll-section>
                    <Landing />
                </div>
                <div data-scroll-section>
                    <About />
                </div>
                <div data-scroll-section>
                    <Stats />
                </div>
                <div data-scroll-section>
                    <Sustainability />
                </div>
                <div data-scroll-section>
                    <Founders />
                </div>
                <div data-scroll-section>
                    <Join />
                </div>
                <div data-scroll-section>
                    <SlidingImages />
                </div>
            </main>
        </div>
    );
}
