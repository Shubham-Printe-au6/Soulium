import React from 'react';
// importing sections
import Section1 from './sections/section1';
import SearchBar from './searchBarComponent';
import Section2 from './sections/section2';
import Section3 from './sections/section3';
import Section4 from './sections/section4';
import Customer from './customerReviewComponent';
import Section5 from './sections/section5';
import Section6 from './sections/section6';
import SearchCountry from './searchCountryComponent';
import Section7 from './sections/section7';
import Section8 from './sections/section8';
import Section9 from './sections/section9';
import Section10 from './sections/section10';


export default function bodyComponent() {
    return (
        <div>
            <Section1 />
            <SearchBar/ >
            <Section2 />
            <Section3 />
            <Section4 />
            <Customer />
            <Section5 />
            <Section6 />
            <SearchCountry />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
        </div>
    )
}
