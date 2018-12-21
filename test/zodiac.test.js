import {getZodiac, zodiacSign} from "../js/zodiac";

test ('it should say zodiac', ()=>{

    const zodiac=getZodiac(6,21);
    expect(zodiac).toBe('рак');
})